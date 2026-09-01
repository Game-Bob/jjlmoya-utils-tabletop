import { describe, expect, it } from 'vitest';
import { ALL_TOOLS } from '../tools';
import type { ToolLocaleContent } from '../types';

interface LinkFailure {
  tool: string;
  message: string;
}

function parseUrl(tool: string, rawUrl: string, failures: LinkFailure[]): URL | undefined {
  try {
    return new URL(rawUrl);
  } catch {
    failures.push({ tool, message: `invalid URL: ${rawUrl}` });
    return undefined;
  }
}

function checkUrl(tool: string, url: URL, seen: Set<string>, failures: LinkFailure[]): void {
  if (url.protocol !== 'https:') failures.push({ tool, message: `non-HTTPS URL: ${url.href}` });
  if (url.pathname === '/' && !url.search && !url.hash) failures.push({ tool, message: `generic homepage, cite the exact document: ${url.href}` });
  if (seen.has(url.href)) failures.push({ tool, message: `duplicate source URL: ${url.href}` });
  seen.add(url.href);
}

async function checkTool(tool: (typeof ALL_TOOLS)[number]): Promise<LinkFailure[]> {
  const failures: LinkFailure[] = [];
  const loader = tool.entry.i18n.en;
  if (!loader) return [{ tool: tool.entry.id, message: 'English locale loader is missing' }];

  const content = (await loader()) as ToolLocaleContent;
  const seen = new Set<string>();
  for (const entry of content.bibliography ?? []) {
    const url = parseUrl(tool.entry.id, entry.url, failures);
    if (url) checkUrl(tool.entry.id, url, seen, failures);
  }
  return failures;
}

describe('QA: bibliography links are specific and usable', () => {
  it('uses unique HTTPS links to exact source pages instead of generic homepages', async () => {
    const failures = (await Promise.all(ALL_TOOLS.map(checkTool))).flat();
    const messages = failures.map(({ tool, message }) => `${tool}: ${message}`);
    expect(messages, `Bibliography hygiene failures:\n${messages.join('\n')}`).toEqual([]);
  });
});
