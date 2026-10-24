import { writeFile } from 'node:fs/promises';
import { pages, root } from './lib.mjs';

const site = 'https://github.com/FrelyHQ/docs/blob/main/';
const list = (await pages()).filter((page) => page.locale === 'en' && page.meta.draft !== 'true');
const head = '# Frely docs\n\n> User documentation for Frely: accounts, billing, models, FrelyMCP, the Frely CLI, and creating on Frely.\n\n';
const strip = (text) => text.replace(/<!-- \/?fact(?::[^>]*)? -->/g, '');

await writeFile(root + 'llms.txt', head + '## Pages\n\n' + list.map((page) => `- [${page.meta.title}](${site}${page.path}): ${page.meta.description}`).join('\n') + '\n');
await writeFile(root + 'llms-full.txt', head + list.map((page) => `## ${page.meta.title}\n\nSource: ${site}${page.path}\n\n${strip(page.body).trim()}\n`).join('\n'));
