---
title: Which folder does the AI get access to?
description: Which folders the AI can use and how to change them.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 5
---

# Which folder does the AI get access to?

Your home directory by default; credential and shell start-up files stay protected. Set `FRELY_WORKSPACE=/path` before installing to share another folder. Afterwards use `frely mcp workspace add <path>` to share more folders, `frely mcp workspace remove <path>` to stop sharing one, and `frely mcp workspace list` to see them all.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Device MCP doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md)
