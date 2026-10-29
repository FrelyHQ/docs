---
title: Is it safe to let an AI use my computer?
description: How access, the sandbox and credentials are limited on your computer.
applies_to: any
updated: 2026-10-29
site: cli
category: Security and limits
order: 17
---

# Is it safe to let an AI use my computer?

Access is limited to the folders you share. File tools reject symlink escapes and cap reads and writes at 1 MiB. Commands run as your OS user inside an OS sandbox: credential folders are unreadable, writes are limited to the workspace and the temp directory, and network goes through a proxy. If the computer cannot sandbox, commands are refused rather than run unsandboxed. The MCP URL contains no secret, and the CLI keeps its execution key encrypted in the OS credential store. You can revoke access any time with `frely mcp remove`.

Related: [How the sandbox protects your data](https://frely.cloud/connect/sandbox/) · [Credential and installation boundaries](https://github.com/FrelyHQ/frely-cli/blob/main/docs/credential-storage.md) · [Security policy](https://github.com/FrelyHQ/frely-cli/blob/main/SECURITY.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
