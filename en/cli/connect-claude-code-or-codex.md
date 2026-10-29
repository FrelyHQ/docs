---
title: How do I connect Claude Code or Codex?
description: Connect Claude Code or Codex to FrelyMCP with one command.
applies_to: any
updated: 2026-10-29
site: cli
category: Connecting AI clients
order: 7
---

# How do I connect Claude Code or Codex?

Claude Code: `claude mcp add --transport http frelymcp "https://mcp.frely.cloud/mcp"`, then open `/mcp` in Claude Code to authorize. Codex: `codex mcp add frelymcp --url "https://mcp.frely.cloud/mcp"`. Both use OAuth, so sign in to Frely and approve the client when asked. Any other MCP client that supports remote HTTP MCP with OAuth can use the same URL.

Related: [FrelyMCP endpoint](https://mcp.frely.cloud/mcp) · [Install page](https://cli.frely.cloud/#install) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
