---
title: Which folder does the AI get access to?
description: Which folders the AI can use and how to change them.
applies_to: any
updated: 2026-11-02
site: cli
category: Getting started
order: 5
---

# Which folder does the AI get access to?

The folder `~/Frely` by default; the installer creates it. Computers set up before this change keep the folder they already share. Set `FRELY_WORKSPACE=/path` before installing to share another folder. Afterwards use `frely link workspace add <path>` to share more folders, `frely link workspace remove <path>` to stop sharing one, and `frely link workspace list` to see them all.

When an AI client needs a folder outside the shared ones, it asks you, and you allow that folder on the web, for a limited time or permanently. Permanent works for one folder, not for your home folder or the folders above it, and needs your passkey or authenticator code. Folders allowed on the web are listed on the device page, where you can remove them at any time. Credential and shell start-up files inside an allowed folder stay protected.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Device MCP doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md)
