# Instructions for AI contributors

This repository holds public user documentation only. Never add internal plans, pricing strategy, operations rules, credentials, internal hostnames or unreleased features.

## Writing rules

- One topic per file under `en/`. Write English first; translations are added separately under `zh-cn/`, `zh-hant/`, `ru/`, `es/`, `pt/`, `ja/` and `ko/`.
- Frontmatter keys: `title`, `description`, `applies_to` (product or CLI version, or `any`), `updated` (YYYY-MM-DD). Optional `site: frely | cli` names the site that renders the page (missing means `frely`); the other site lists it as a link. `scripts/check.mjs` rejects any other value.
- Standard Markdown only. No MDX, no HTML except fact markers.
- Task pages: goal, prerequisites, exact commands, expected output, then a table of error, cause, fix.
- Commands are complete. Use `<name>` for values the reader supplies and explain each one.
- Mark values that come from the product with a fact marker so CI can verify them:
  `<!-- fact:plan.creator.monthlyUsd -->19<!-- /fact -->`
- FAQ files (`en/faq/<topic>.md`, `order` in frontmatter): each question is a `##` heading, followed by `<!-- id: stable-anchor -->`, the answer paragraph, then optional lines `Related: [label](url) · [label](url)`, `Console: [label](url)` and ``API tools: `a`, `b` ``. Keep the id stable; it is the page anchor.
- CLI pages (`en/cli/<slug>.md`, `site: cli`): the page for https://cli.frely.cloud/docs/help/<slug>/. Frontmatter adds `category` (the group on the CLI docs index) and `order` (a number; pages sort by it and a group appears where its first page sits). The body is `# <question>`, the answer paragraph(s) and an optional `Related: [label](url) · [label](url)` line. Answers use paragraphs, lists, `code` and [links](url). The file name is the URL slug; keep it stable.
- Guide files (`en/guides/*.md`): the Landing parses them, so keep the shape. Client guides (`chatgpt.md`, `claude.md`) have `name` in frontmatter, an intro paragraph, a `## ` section for each of: `before` (bullet list), one or more routes (optional note paragraph, then a numbered step list; a step may hold a fenced code block and a `<!-- mock: connector|consent|chat -->` comment), and `troubleshooting` (two-column table). Each section heading is followed by `<!-- id: ... -->`; a route can add `<!-- badge: recommended -->`. `frelymcp.md` has one `## ` section per topic with an id, a text paragraph, an optional code fence and an optional two-column table of tools.
- Translations live in `zh-cn/`, `zh-hant/`, `ru/`, `es/`, `pt/`, `ja/` and `ko/` with the same file names and structure. A missing file falls back to English.
- Link to other pages with relative paths (`./devices.md`). Link to the product with absolute `https://frely.cloud/...` URLs.
- Avoid adverbs. Name actions, objects, conditions and results.

## Check before committing

```sh
bun scripts/check.mjs        # frontmatter, links, fact markers, forbidden terms
bun scripts/build-llms.mjs   # regenerates llms.txt and llms-full.txt
```
