import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pages, root } from './lib.mjs';

const required = ['title', 'description', 'applies_to', 'updated'];
const forbidden = [/\binternal\b/i, /BEGIN [A-Z ]*PRIVATE KEY/, /sk-[A-Za-z0-9]{20,}/, /frely-docs/];
const errors = [];
for (const page of await pages()) {
  const fail = (message) => errors.push(`${page.path}: ${message}`);
  if (!page.hasFrontmatter) fail('missing frontmatter');
  for (const key of required) if (!page.meta[key]) fail(`missing frontmatter key ${key}`);
  if (page.meta.updated && !/^\d{4}-\d{2}-\d{2}$/.test(page.meta.updated)) fail('updated must be YYYY-MM-DD');
  for (const pattern of forbidden) if (pattern.test(page.body)) fail(`forbidden pattern ${pattern}`);
  for (const [, target] of page.body.matchAll(/\]\((\.{1,2}\/[^)#\s]+)(?:#[^)]*)?\)/g)) {
    if (!existsSync(resolve(root, dirname(page.path), target))) fail(`broken link ${target}`);
  }
  const open = (page.body.match(/<!-- fact:/g) ?? []).length;
  const close = (page.body.match(/<!-- \/fact -->/g) ?? []).length;
  if (open !== close) fail('unbalanced fact markers');
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('ok');
