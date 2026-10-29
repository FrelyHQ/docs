---
title: A command failed because of the sandbox. What can I do?
description: What to do when the sandbox blocks a command.
applies_to: any
updated: 2026-10-29
site: cli
category: Security and limits
order: 18
---

# A command failed because of the sandbox. What can I do?

On the Frely connections page you can open more for a connection: credential folders to read, extra folders to write, or a time-limited run without the sandbox. On Windows, or on Linux without bubblewrap, socat and ripgrep, commands are refused because the computer cannot sandbox; install those tools on Linux. `FRELY_SANDBOX=off` turns the sandbox off on the device only; use it only when you accept the risk.

Related: [How the sandbox protects your data](https://frely.cloud/connect/sandbox/) · [Connections page](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
