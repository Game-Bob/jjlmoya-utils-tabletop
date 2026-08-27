import { drawTokenCanvas } from './dom-views';
import { loadImage, readFile, cleanName, copyCanvas, downloadCanvas } from './workspace-media';
import type { StudioElements } from './controller';
import type { SavedMarker, TokenStampState } from './types';
import type { TokenStampUI } from './ui';

export interface WorkspaceContext {
  getState: () => TokenStampState;
  setState: (state: TokenStampState) => void;
  ui: TokenStampUI;
  getMarkers: () => SavedMarker[];
  getImage: () => HTMLImageElement | null;
  selectMarker: (marker: SavedMarker) => void;
  addMarker: () => void;
  removeMarker: (id: string) => void;
  setImage: (image: HTMLImageElement | null) => void;
}

function attachLibraryEvents(elements: StudioElements, context: WorkspaceContext): void {
  elements.library.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const deleteId = target.closest<HTMLElement>('[data-delete-marker]')?.dataset.deleteMarker;
    if (deleteId) { context.removeMarker(deleteId); return; }
    if (target.closest('[data-new-marker]')) { context.addMarker(); return; }
    const markerId = target.closest<HTMLElement>('[data-marker-id]')?.dataset.markerId;
    const marker = context.getMarkers().find((item) => item.id === markerId);
    if (!marker) return;
    context.selectMarker(marker);
  });
}

export function attachWorkspaceEvents(elements: StudioElements, context: WorkspaceContext): void {
  const exportCanvas = (): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    drawTokenCanvas(canvas, context.getState(), context.getImage());
    return canvas;
  };
  elements.download.addEventListener('click', () => downloadCanvas(exportCanvas(), cleanName(context.getState().imageName)));
  elements.copy.addEventListener('click', () => void copyCanvas(exportCanvas()).catch(() => false));
  elements.markerName.addEventListener('input', (event) => context.setState({ ...context.getState(), markerName: (event.target as HTMLInputElement).value }));
  attachLibraryEvents(elements, context);
}

export function attachFileEvents(elements: StudioElements, context: WorkspaceContext): void {
  const load = async (file: File) => context.setImage(await loadDroppedFile(file, context));
  elements.imageInput.addEventListener('change', () => { const file = elements.imageInput.files?.[0]; if (file) void load(file); });
  elements.root.addEventListener('dragover', (event) => event.preventDefault());
  elements.root.addEventListener('drop', (event) => { event.preventDefault(); const file = event.dataTransfer?.files[0]; if (file?.type.startsWith('image/')) void load(file); });
}

async function loadDroppedFile(file: File, context: WorkspaceContext): Promise<HTMLImageElement> {
  const source = await readFile(file);
  const image = await loadImage(source);
  context.setState({ ...context.getState(), imageSrc: source, imageName: file.name, imageX: 0, imageY: 0, imageZoom: 1 });
  return image;
}

async function exportBatch(files: File[], state: TokenStampState): Promise<void> {
  for (const file of files) {
    const source = await readFile(file);
    const image = await loadImage(source);
    const canvas = document.createElement('canvas');
    drawTokenCanvas(canvas, { ...state, imageSrc: source, imageName: file.name }, image);
    downloadCanvas(canvas, cleanName(file.name));
  }
}

export function attachBatchEvents(elements: StudioElements, context: WorkspaceContext): void {
  let files: File[] = [];
  elements.batchInput.addEventListener('change', () => {
    files = Array.from(elements.batchInput.files ?? []);
    elements.batchStatus.textContent = files.length ? context.ui.batchReady.replace('{count}', String(files.length)) : context.ui.batchHint;
    elements.batchDownload.disabled = files.length === 0;
  });
  elements.batchDownload.addEventListener('click', () => void exportBatch(files, context.getState()));
}
