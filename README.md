# Frely docs

User documentation for [Frely](https://frely.cloud): FAQ, client guides, FrelyMCP and CLI guides.
The rendered site is at https://frely.cloud/docs/. This repository is the source; the site builds from a pinned commit of it.

- Plain Markdown with a small frontmatter block. Read it here, in an editor, or feed it to an AI agent.
- `llms.txt` lists every page; `llms-full.txt` holds all pages in one file.
- Prices and limits in the text are checked against the product by Frely's CI, so the values here match the site.

## Layout

| Path | Content |
| --- | --- |
| `en/` | English source (written first) |
| `zh-cn/`, `zh-hant/`, `ru/`, `es/`, `pt/`, `ja/`, `ko/` | Translations; a missing page falls back to `en/` |
| `scripts/` | Checks and `llms.txt` generator |

## Contribute

Open a pull request. Every change is reviewed by a maintainer before it reaches the site. See [AGENTS.md](AGENTS.md) for the writing rules and the check command (`bun scripts/check.mjs`).

## License

Text: CC BY 4.0. Code samples and scripts: Apache-2.0. "Frely" and the logo are trademarks of Frely; the licenses do not grant trademark rights.
