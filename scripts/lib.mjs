import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

export const root = new URL('../', import.meta.url).pathname;
export const locales = ['en', 'zh-cn', 'zh-hant', 'ru', 'es', 'pt', 'ja', 'ko'];

export async function pages() {
  const out = [];
  for (const locale of locales) {
    const walk = async (dir) => {
      let entries;
      try { entries = await readdir(dir, { withFileTypes: true }); } catch { return; }
      for (const entry of entries) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) await walk(path);
        else if (entry.name.endsWith('.md')) out.push(await parse(path, locale));
      }
    };
    await walk(join(root, locale));
  }
  return out.sort((a, b) => a.path.localeCompare(b.path));
}

async function parse(path, locale) {
  const text = await readFile(path, 'utf8');
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  const meta = {};
  if (match) for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) meta[key.trim()] = rest.join(':').trim();
  }
  return { path: relative(root, path), locale, meta, body: match ? match[2] : text, hasFrontmatter: Boolean(match) };
}
