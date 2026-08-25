export type Environment = 'forest' | 'plains' | 'coast' | 'river' | 'mountain';
export type SettlementSize = 'hamlet' | 'village' | 'town';
export type SettlementStyle = 'timber' | 'stone' | 'coastal' | 'highland' | 'medieval' | 'edo' | 'sahelian';
export type ServiceType = string;
export type EditTool = 'select' | 'building' | 'path' | 'water' | 'tree' | 'erase';

export interface SettlementConfig {
  seed: string;
  environment: Environment;
  size: SettlementSize;
  style: SettlementStyle;
  homes: number;
  services: ServiceType[];
}

export interface Point { x: number; y: number }

export interface Building {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  service: ServiceType | null;
}

export interface PathRoute { points: Point[] }
export interface Plaza { x: number; y: number; width: number; height: number }

export interface SettlementMap {
  config: SettlementConfig;
  width: number;
  height: number;
  plaza: Plaza;
  buildings: Building[];
  paths: PathRoute[];
  water: Point[];
  wild: Point[];
}

type RandomSource = () => number;
export interface HomeRange { min: number; max: number }
export interface SettlementPreset { homes: number; services: ServiceType[] }

export const DEFAULT_CONFIG: SettlementConfig = {
  seed: 'Willow Mere Crossing',
  environment: 'forest',
  size: 'village',
  style: 'medieval',
  homes: 14,
  services: ['tavern', 'smithy', 'temple', 'market'],
};

const SIZE_PRESETS: Record<SettlementSize, SettlementPreset> = {
  hamlet: { homes: 6, services: ['tavern', 'stable'] },
  village: { homes: 14, services: ['tavern', 'smithy', 'temple', 'market'] },
  town: { homes: 24, services: ['tavern', 'smithy', 'temple', 'market', 'stable', 'hall'] },
};

const DIMENSIONS: Record<SettlementSize, { width: number; height: number }> = {
  hamlet: { width: 34, height: 24 },
  village: { width: 42, height: 28 },
  town: { width: 52, height: 34 },
};

const HOME_RANGES: Record<SettlementSize, HomeRange> = {
  hamlet: { min: 3, max: 18 },
  village: { min: 4, max: 28 },
  town: { min: 6, max: 42 },
};

export function homeRange(size: SettlementSize): HomeRange { return HOME_RANGES[size]; }
export function settlementPreset(size: SettlementSize): SettlementPreset { return { homes: SIZE_PRESETS[size].homes, services: [...SIZE_PRESETS[size].services] }; }

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, Math.round(value)));
const isEnvironment = (value: unknown): value is Environment => ['forest', 'plains', 'coast', 'river', 'mountain'].includes(String(value));
const isSize = (value: unknown): value is SettlementSize => ['hamlet', 'village', 'town'].includes(String(value));
const isStyle = (value: unknown): value is SettlementStyle => ['timber', 'stone', 'coastal', 'highland', 'medieval', 'edo', 'sahelian'].includes(String(value));

export function normalizeConfig(input: Partial<SettlementConfig>): SettlementConfig {
  const size = isSize(input.size) ? input.size : DEFAULT_CONFIG.size;
  const range = HOME_RANGES[size];
  const services = Array.isArray(input.services) ? input.services.filter((value): value is string => typeof value === 'string' && value.trim().length > 0).map((value) => value.trim()).slice(0, 32) : DEFAULT_CONFIG.services;
  return {
    seed: String(input.seed || DEFAULT_CONFIG.seed).slice(0, 48),
    environment: isEnvironment(input.environment) ? input.environment : DEFAULT_CONFIG.environment,
    size,
    style: isStyle(input.style) ? input.style : DEFAULT_CONFIG.style,
    homes: clamp(input.homes ?? DEFAULT_CONFIG.homes, range.min, range.max),
    services: [...new Set(services)],
  };
}

function hashSeed(seed: string): number {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRandom(seed: string): RandomSource {
  let state = hashSeed(seed);
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function randomInt(random: RandomSource, min: number, max: number): number {
  return Math.floor(random() * (max - min + 1)) + min;
}

function routeBetween(from: Point, to: Point): Point[] {
  const points: Point[] = [{ ...from }];
  let current = { ...from };
  while (current.x !== to.x || current.y !== to.y) {
    const horizontal = current.x !== to.x;
    current = horizontal ? { x: current.x + Math.sign(to.x - current.x), y: current.y } : { x: current.x, y: current.y + Math.sign(to.y - current.y) };
    points.push({ ...current });
  }
  return points;
}

function createWater(environment: Environment, width: number, height: number, random: RandomSource): Point[] {
  const result: Point[] = [];
  if (environment === 'coast') {
    const edge = random() < 0.5 ? width - 1 : 0;
    for (let y = 0; y < height; y += 1) {
      const depth = 3 + Math.floor(random() * 3);
      for (let offset = 0; offset < depth; offset += 1) result.push({ x: edge === 0 ? offset : width - 1 - offset, y });
    }
  }
  if (environment === 'river') {
    let x = Math.floor(width * (0.35 + random() * 0.3));
    for (let y = 0; y < height; y += 1) {
      x = clamp(x + randomInt(random, -1, 1), 2, width - 3);
      result.push({ x, y }, { x: x + 1, y });
    }
  }
  return result;
}

function buildingCells(buildings: Building[], plaza: Plaza): Set<string> {
  const cells = new Set<string>();
  buildings.forEach((building) => { for (let y = building.y - 2; y < building.y + building.height + 2; y += 1) for (let x = building.x - 2; x < building.x + building.width + 2; x += 1) cells.add(`${x},${y}`); });
  for (let y = plaza.y - 2; y < plaza.y + plaza.height + 2; y += 1) for (let x = plaza.x - 2; x < plaza.x + plaza.width + 2; x += 1) cells.add(`${x},${y}`);
  return cells;
}

interface WildContext { config: SettlementConfig; dimensions: { width: number; height: number }; random: RandomSource; water: Set<string>; buildings: Building[]; plaza: Plaza }

function createWild(context: WildContext): Point[] {
  const result: Point[] = [];
  const { config, dimensions, random, water, buildings, plaza } = context;
  let chance = 0.07;
  if (config.environment === 'forest') chance = 0.12;
  if (config.environment === 'mountain') chance = 0.09;
  const blocked = buildingCells(buildings, plaza);
  const seen = new Set<string>();
  const attempts = Math.floor(dimensions.width * dimensions.height * chance * 3);
  for (let index = 0; index < attempts && result.length < Math.floor(dimensions.width * dimensions.height * chance); index += 1) {
    const point = { x: randomInt(random, 1, dimensions.width - 2), y: randomInt(random, 1, dimensions.height - 2) };
    const key = `${point.x},${point.y}`;
    if (!water.has(key) && !blocked.has(key) && !seen.has(key)) { seen.add(key); result.push(point); }
  }
  return result;
}

function overlaps(building: Building, other: Building): boolean {
  return building.x - 1 < other.x + other.width && building.x + building.width + 1 > other.x && building.y - 1 < other.y + other.height && building.y + building.height + 1 > other.y;
}

function inPlaza(building: Building, plaza: Plaza): boolean {
  return building.x < plaza.x + plaza.width && building.x + building.width > plaza.x && building.y < plaza.y + plaza.height && building.y + building.height > plaza.y;
}

function layoutColumns(size: SettlementSize): number { if (size === 'hamlet') return 4; if (size === 'village') return 6; return 7; }
function layoutXStep(size: SettlementSize): number { return size === 'hamlet' ? 6 : 5; }
function layoutYStep(size: SettlementSize): number { if (size === 'hamlet') return 7; if (size === 'village') return 5; return 4; }

interface GridContext { spots: Point[]; size: SettlementSize; dimensions: { width: number; height: number }; plaza: Plaza; homes: number; variant: number }

function addGridSpots(context: GridContext): void {
  const { spots, size, dimensions, plaza, homes, variant } = context;
  const columns = layoutColumns(size);
  const xStep = layoutXStep(size);
  const yStep = layoutYStep(size);
  const rows = Math.ceil(Math.max(homes, columns) / columns);
  const footprintWidth = (columns - 1) * xStep + 4;
  const footprintHeight = (rows - 1) * yStep + 3;
  const startX = Math.max(2, Math.floor(plazaCenter(plaza).x - footprintWidth / 2));
  const startY = Math.max(2, Math.floor(plazaCenter(plaza).y - footprintHeight / 2));
  const xBias = [0, 1, -1][variant % 3]!;
  const yBias = [0, -1, 1][(variant + 1) % 3]!;
  for (let row = 0; row < rows; row += 1) for (let column = 0; column < columns; column += 1) {
    const stagger = size === 'town' ? (variant === 1 ? row % 2 : 0) : variant === 2 ? column % 2 : row % 2;
    const spot = { x: startX + column * xStep + stagger + xBias, y: startY + row * yStep + (variant === 2 ? column % 2 : yBias) };
    if (spot.x + 4 < dimensions.width - 1 && spot.y + 3 < dimensions.height - 1) spots.push(spot);
  }
}

function addHamletAnchors(spots: Point[], plaza: Plaza, variant: number): void {
  const left = plaza.x - 5;
  const right = plaza.x + plaza.width + 1;
  const top = plaza.y - 4;
  const bottom = plaza.y + plaza.height + 1;
  const anchors = [{ x: left, y: top }, { x: right, y: top }, { x: left, y: bottom }, { x: right, y: bottom }];
  for (let index = 0; index < anchors.length; index += 1) spots.push(anchors[(index + variant) % anchors.length]!);
}

function candidateSpots(size: SettlementSize, dimensions: { width: number; height: number }, plaza: Plaza, homes: number, variant: number): Point[] {
  const spots: Point[] = [];
  if (size === 'hamlet') addHamletAnchors(spots, plaza, variant);
  addGridSpots({ spots, size, dimensions, plaza, homes, variant });
  return spots;
}

function buildingPattern(style: SettlementStyle, index: number, variant: number): { width: number; height: number } {
  const patterns: Record<SettlementStyle, { width: number; height: number }[]> = {
    timber: [{ width: 3, height: 2 }, { width: 4, height: 2 }, { width: 3, height: 3 }, { width: 2, height: 2 }],
    stone: [{ width: 4, height: 2 }, { width: 3, height: 3 }, { width: 4, height: 3 }, { width: 3, height: 2 }],
    coastal: [{ width: 4, height: 2 }, { width: 3, height: 2 }, { width: 4, height: 3 }, { width: 2, height: 2 }],
    highland: [{ width: 3, height: 3 }, { width: 3, height: 2 }, { width: 2, height: 3 }, { width: 4, height: 2 }],
    medieval: [{ width: 4, height: 2 }, { width: 3, height: 3 }, { width: 4, height: 3 }, { width: 3, height: 2 }],
    edo: [{ width: 4, height: 2 }, { width: 3, height: 2 }, { width: 4, height: 2 }, { width: 3, height: 3 }],
    sahelian: [{ width: 3, height: 2 }, { width: 4, height: 2 }, { width: 3, height: 3 }, { width: 4, height: 2 }],
  };
  return patterns[style][(index + variant) % patterns[style].length]!;
}

function servicePlacement(service: ServiceType, random: RandomSource): 'center' | 'edge' | 'mixed' {
  const name = service.toLocaleLowerCase();
  if (name.includes('hall') || name.includes('town') || name.includes('ayunt')) return random() < 0.82 ? 'center' : 'mixed';
  if (name.includes('stable') || name.includes('smith') || name.includes('forge') || name.includes('establ')) return random() < 0.8 ? 'edge' : 'mixed';
  if (name.includes('temple') || name.includes('market') || name.includes('tavern')) return random() < 0.7 ? 'center' : 'mixed';
  return 'mixed';
}

function servicePriority(service: ServiceType): number {
  const name = service.toLocaleLowerCase();
  if (name.includes('hall') || name.includes('town') || name.includes('ayunt')) return 0;
  if (name.includes('temple') || name.includes('market') || name.includes('tavern')) return 1;
  if (name.includes('stable') || name.includes('smith') || name.includes('forge') || name.includes('establ')) return 2;
  return 3;
}

function serviceScore(building: Building, placement: 'center' | 'edge' | 'mixed', mapWidth: number, mapHeight: number, plaza: Plaza, random: RandomSource): number {
  const center = buildingCenter(building);
  const centerDistance = Math.hypot(center.x - plazaCenter(plaza).x, center.y - plazaCenter(plaza).y) / Math.hypot(mapWidth, mapHeight);
  const edgeDistance = Math.min(center.x, center.y, mapWidth - center.x, mapHeight - center.y) / Math.min(mapWidth, mapHeight);
  const preference = placement === 'edge' ? edgeDistance : placement === 'center' ? centerDistance : centerDistance * 0.5 + edgeDistance * 0.5;
  return preference + random() * 0.22;
}

function assignServices(config: SettlementConfig, buildings: Building[], dimensions: { width: number; height: number }, plaza: Plaza, variant: number): Building[] {
  const random = createRandom(`${config.seed}:${config.size}:${config.style}:services:${variant}`);
  const available = [...buildings];
  const services = [...config.services].sort((left, right) => servicePriority(left) - servicePriority(right) || random() - 0.5);
  services.forEach((service) => {
    if (!available.length) return;
    const placement = servicePlacement(service, random);
    const ranked = available.map((building) => ({ building, score: serviceScore(building, placement, dimensions.width, dimensions.height, plaza, random) })).sort((left, right) => left.score - right.score);
    const selected = ranked[0]!.building;
    selected.service = service;
    available.splice(available.indexOf(selected), 1);
  });
  return buildings;
}

function placeBuildings(config: SettlementConfig, placement: { dimensions: { width: number; height: number }; plaza: Plaza; water: Set<string> }, variant: number): Building[] {
  const buildings: Building[] = [];
  const { dimensions, plaza, water } = placement;
  for (const [index, spot] of candidateSpots(config.size, dimensions, plaza, config.homes, variant).entries()) {
    if (buildings.length >= config.homes) break;
    const pattern = buildingPattern(config.style, index, variant);
    const building: Building = { id: `building-${buildings.length + 1}`, x: spot.x, y: spot.y, width: pattern.width, height: pattern.height, service: null };
    const occupied = Array.from({ length: building.height }, (_, row) => Array.from({ length: building.width }, (_, column) => water.has(`${building.x + column},${building.y + row}`))).flat().some(Boolean);
    if (!occupied && !inPlaza(building, plaza) && !buildings.some((other) => overlaps(building, other))) buildings.push(building);
  }
  return assignServices(config, buildings, dimensions, plaza, variant);
}

function buildingCenter(building: Building): Point { return { x: building.x + Math.floor(building.width / 2), y: building.y + Math.floor(building.height / 2) }; }
function plazaCenter(plaza: Plaza): Point { return { x: plaza.x + Math.floor(plaza.width / 2), y: plaza.y + Math.floor(plaza.height / 2) }; }

function createPaths(buildings: Building[], plaza: Plaza): PathRoute[] {
  const anchor = plazaCenter(plaza);
  return buildings.map((building) => ({ points: routeBetween(buildingCenter(building), anchor) }));
}

export function generateSettlement(input: Partial<SettlementConfig>): SettlementMap {
  const config = normalizeConfig(input);
  const dimensions = DIMENSIONS[config.size];
  const plaza: Plaza = { x: Math.floor(dimensions.width / 2) - 3, y: Math.floor(dimensions.height / 2) - 2, width: 6, height: 4 };
  const random = createRandom(config.seed);
  const layoutVariant = Math.floor(createRandom(`${config.seed}:${config.size}:${config.style}:layout`)() * 3);
  const water = createWater(config.environment, dimensions.width, dimensions.height, random);
  const waterSet = new Set(water.map((point) => `${point.x},${point.y}`));
  const buildings = placeBuildings(config, { dimensions, plaza, water: waterSet }, layoutVariant);
  return { config, width: dimensions.width, height: dimensions.height, plaza, buildings, paths: createPaths(buildings, plaza), water, wild: createWild({ config, dimensions, random, water: waterSet, buildings, plaza }) };
}

function getPlaza(map: SettlementMap): Plaza { return map.plaza ?? { x: Math.floor(map.width / 2) - 3, y: Math.floor(map.height / 2) - 2, width: 6, height: 4 }; }

export function addBuilding(map: SettlementMap, point: Point, service: ServiceType | null = null): SettlementMap {
  const building: Building = { id: `building-${map.buildings.length + 1}`, x: clamp(point.x, 1, map.width - 4), y: clamp(point.y, 1, map.height - 3), width: 3, height: 2, service };
  if (map.buildings.some((other) => overlaps(building, other)) || inPlaza(building, getPlaza(map))) return map;
  const buildings = [...map.buildings, building];
  return { ...map, buildings, paths: createPaths(buildings, getPlaza(map)) };
}

export function addPath(map: SettlementMap, point: Point): SettlementMap {
  const path = { points: [{ x: clamp(point.x, 0, map.width - 1), y: clamp(point.y, 0, map.height - 1) }, { x: clamp(point.x + 2, 0, map.width - 1), y: clamp(point.y, 0, map.height - 1) }] };
  return { ...map, paths: [...map.paths, path] };
}

export function addWater(map: SettlementMap, point: Point): SettlementMap {
  const waterPoint = { x: clamp(point.x, 0, map.width - 1), y: clamp(point.y, 0, map.height - 1) };
  const key = `${waterPoint.x},${waterPoint.y}`;
  if (map.water.some((item) => `${item.x},${item.y}` === key)) return map;
  const buildings = map.buildings.filter((building) => waterPoint.x < building.x || waterPoint.x >= building.x + building.width || waterPoint.y < building.y || waterPoint.y >= building.y + building.height);
  const wild = map.wild.filter((item) => item.x !== waterPoint.x || item.y !== waterPoint.y);
  const water = [...map.water, waterPoint];
  return { ...map, buildings, wild, water, paths: createPaths(buildings, getPlaza(map)) };
}

export function addTree(map: SettlementMap, point: Point): SettlementMap {
  const tree = { x: clamp(point.x, 0, map.width - 1), y: clamp(point.y, 0, map.height - 1) };
  if (map.wild.some((item) => item.x === tree.x && item.y === tree.y)) return map;
  return { ...map, wild: [...map.wild, tree] };
}

export function eraseAt(map: SettlementMap, point: Point): SettlementMap {
  const plaza = getPlaza(map);
  const buildings = map.buildings.filter((building) => point.x < building.x || point.x >= building.x + building.width || point.y < building.y || point.y >= building.y + building.height);
  const water = map.water.filter((item) => item.x !== point.x || item.y !== point.y);
  const paths = map.paths.filter((path) => !path.points.some((item) => item.x === point.x && item.y === point.y));
  const wild = map.wild.filter((item) => item.x !== point.x || item.y !== point.y);
  return { ...map, plaza, buildings, water, paths, wild };
}
