---
title: Как подключить Claude Code или Codex?
description: Подключите Claude Code или Codex к FrelyMCP одной командой.
applies_to: any
updated: 2026-10-29
site: cli
category: Connecting AI clients
order: 7
---

# Как подключить Claude Code или Codex?

Claude Code: `claude mcp add --transport http frelymcp "https://mcp.frely.cloud/mcp"`, затем откройте `/mcp` в Claude Code, чтобы авторизоваться. Codex: `codex mcp add frelymcp --url "https://mcp.frely.cloud/mcp"`. В обоих случаях используется OAuth, поэтому войдите в Frely и подтвердите клиент, когда появится запрос. Любой другой MCP-клиент с поддержкой удалённого HTTP MCP и OAuth может использовать тот же URL.

Related: [Конечная точка FrelyMCP](https://mcp.frely.cloud/mcp) · [Страница установки](https://cli.frely.cloud/#install) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
