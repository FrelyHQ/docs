---
title: How do I install a Frely Agent, Prompt or Skill?
description: Install and run a Frely Agent, Prompt or Skill from the terminal.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 13
---

# How do I install a Frely Agent, Prompt or Skill?

Agent: `frely item install <username/name> --host claude-code --scope global` (hosts: chatgpt, codex, claude-code, pi, generic). Run it with `printf '%s' 'Your task' | frely agent run <username/name> --input-stdin --json`. Marketplace items: `frely item install <username/skill-name> --host claude-code`. Find the name on the creator profile page (`frely.cloud/@<username>`) or in the share link the creator sent you; creator items are not listed in the public Store, which shows only products Frely picks. The first call opens a browser for authorization, and a paid part installs only if your account holds a pass; otherwise the command says how to buy one. Frely never overwrites a folder it did not install or a file you edited.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
