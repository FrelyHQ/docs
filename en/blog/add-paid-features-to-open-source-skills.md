---
title: How to add paid features to an open-source Skill
description: Keep your Skill open source and free, and put the advanced part behind a paid pass on Frely. Your repository stays as it is, and one message to your AI does the publishing.
date: 2026-10-24
draft: true
applies_to: any
updated: 2026-10-24
---

You wrote a Skill, put it on GitHub, and people use it. Some of it took far more work than the rest: the scripts, the templates, the deep reference files. You do not want to hide the Skill, and you do not want to hand over everything either.

Frely gives you a middle path. **The open-source part stays free and public. The advanced part sits behind a paid pass.** Your repository does not change.

## How it works

You publish the Skill to Frely and mark which files are paid:

- **`SKILL.md` is always free**, so buyers can see what they are getting.
- **Paid files** are exact files or whole folders, for example `scripts/` or `reference/advanced.md`.
- **You set a price for each pass length**: choose from 1 hour, 8 hours, 24 hours, 7 days, 30 days, or forever. Offer one or all six.

Buyers install it with one command: `frely item install <item-id>`. It works with ChatGPT, Codex, Claude Code and other tools that use Skills. While a pass is active, the paid files are fetched with the Skill. When it expires, the install stops fetching the paid part. A `forever` pass lets the buyer keep a local copy for good and includes later updates.

## Publish with one message

You do not need to read documentation. Send this to the AI you already use (it needs to run commands on your computer, like the desktop apps, Codex or Claude Code):

`Follow https://frely.cloud/prompt/creator.md and publish this Skill: <your repository URL>`

The AI installs the Frely CLI, reads your repository and asks you exactly three things:

1. Which files are paid? It proposes scripts, templates and deep reference files by default.
2. What is the price for each pass length?
3. Do you want to offer a `forever` pass?

It does the rest and gives you the item id and the install command.

## What to know before you publish

- **The paid part is visible to people who buy it.** The Skill is installed on the buyer's own device, so the free part is visible to everyone and the paid part to everyone with a pass. If the content must stay private, publish it as a hosted Agent instead, where users get results but never the prompt.
- **Check the license.** If your repository's license forbids redistribution, do not publish it. The source URL is shown as attribution, and Frely does not verify repository ownership.
- **Size limits.** The zipped Skill is at most 256 KiB, 64 files, 64 KiB per file and 128 KiB in total.
- **You receive Frely Credit, not cash.** Usage fees are held for 30 days, then added to your Frely Credit, which you can spend on Frely. It cannot be withdrawn or transferred. Frely takes a platform fee from each sale, shown on the page when you set your prices.
- **A free account can publish one item.**

## Update or take it down

To release a new version, publish again with the same slug. To take it down, mark it unpublished. Your GitHub repository is never touched, so your open-source version stays where it always was.

[Publish your Skill on Frely](https://frely.cloud/prompt/creator.md)
