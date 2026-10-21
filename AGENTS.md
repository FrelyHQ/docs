# Instructions for AI contributors

This repository holds public user documentation only. Never add internal plans, pricing strategy, operations rules, credentials, internal hostnames or unreleased features.

## Writing rules

- One topic per file under `en/`. Write English first; translations are added separately under `zh-cn/` and `ja/`.
- Frontmatter keys: `title`, `description`, `applies_to` (product or CLI version, or `any`), `updated` (YYYY-MM-DD).
- Standard Markdown only. No MDX, no HTML except fact markers.
- Task pages: goal, prerequisites, exact commands, expected output, then a table of error, cause, fix.
- Commands are complete. Use `<name>` for values the reader supplies and explain each one.
- Mark values that come from the product with a fact marker so CI can verify them:
  `<!-- fact:plan.creator.monthlyUsd -->19<!-- /fact -->`
- Link to other pages with relative paths (`./devices.md`). Link to the product with absolute `https://frely.cloud/...` URLs.
- Avoid adverbs. Name actions, objects, conditions and results.

## Check before committing

```sh
bun scripts/check.mjs        # frontmatter, links, fact markers, forbidden terms
bun scripts/build-llms.mjs   # regenerates llms.txt and llms-full.txt
```
