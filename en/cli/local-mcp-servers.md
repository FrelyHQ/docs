---
title: How do I let remote AI use an MCP server that runs on my computer?
description: Let remote AI use an MCP server that runs on your computer.
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 11
---

# How do I let remote AI use an MCP server that runs on my computer?

Frely finds servers that listen only on loopback; list them with `frely mcp local list`. Add others with `frely mcp local add <name> --url http://127.0.0.1:<port>/mcp`, or for a stdio server `frely mcp local add <name> -- <command> [args...]`. Each server stays hidden from remote clients until you turn it on, one by one, on the Frely connections page. Enabled servers run outside the command sandbox with your user account.

Related: [Connections page](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
