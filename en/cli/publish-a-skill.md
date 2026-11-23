---
title: How do I publish a Skill I wrote to Frely?
description: Publish a Skill folder as a new marketplace version with frely item publish.
applies_to: any
updated: 2026-11-23
site: cli
category: Account and API
order: 14
---

# How do I publish a Skill I wrote to Frely?

Run `frely item publish <folder>` in a terminal where you are signed in (`frely login`). The folder holds `SKILL.md` with `name` and `description` in its frontmatter. The command packs the folder, uploads it as a new version of the item `<your-username>/<slug>` and prints the version and the install command `frely item install <your-username>/<slug>`. The slug defaults to the `name` in `SKILL.md`; `--slug <slug>` sets another one (1-40 lowercase letters, digits or hyphens). Publishing the same slug again adds a new version, and an installed copy updates with `frely item update <folder>`.

Left out of the package: files and folders whose name starts with `.`, `skills-config` and `node_modules`. A symbolic link stops the command. The command checks the free-tier limits before it uploads: at most 64 files, 64 KB per file and 128 KB in total. `--premium <path>` marks a file, or a folder when the path ends in `/`, that only buyers with a pass receive; `SKILL.md` is always free. Publishing needs a Creator plan with a free published slot and Frely scans the new version. Anyone who installs the Skill can read its free files, so keep secrets out of the folder.

Related: [Install a Frely Agent, Prompt or Skill](./install-agents-and-items.md) · [Commands](./commands.md)
