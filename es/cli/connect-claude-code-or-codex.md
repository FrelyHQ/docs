---
title: ¿Cómo conecto Claude Code o Codex?
description: Conecta Claude Code o Codex a FrelyMCP con un solo comando.
applies_to: any
updated: 2026-10-29
site: cli
category: Connecting AI clients
order: 7
---

# ¿Cómo conecto Claude Code o Codex?

Claude Code: `claude mcp add --transport http frelymcp "https://mcp.frely.cloud/mcp"`, luego abre `/mcp` en Claude Code para autorizar. Codex: `codex mcp add frelymcp --url "https://mcp.frely.cloud/mcp"`. Ambos usan OAuth, así que inicia sesión en Frely y aprueba el cliente cuando se te solicite. Cualquier otro cliente MCP que admita MCP remoto por HTTP con OAuth puede usar la misma URL.

Related: [Endpoint de FrelyMCP](https://mcp.frely.cloud/mcp) · [Página de instalación](https://cli.frely.cloud/#install) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
