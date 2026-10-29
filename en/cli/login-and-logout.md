---
title: How do I sign in or out?
description: Sign in, sign out and stop remote control of the computer.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 15
---

# How do I sign in or out?

`frely mcp start` signs in when needed, so you do not need a separate login first. Use `frely login` to sign in on its own (add `--no-browser` on a machine without a browser, or `--email <address>` then `--code <6-digit code>`), and `frely logout` to sign out; logout also revokes the `frely api` authorization. To stop remote control of the computer, use `frely mcp stop` (pause) or `frely mcp remove` (revoke every client and uninstall the service).

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (My Devices)](https://frely.cloud/app/)
