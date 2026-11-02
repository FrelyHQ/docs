---
title: Como ligar o Claude Code ou o Codex?
description: Ligue o Claude Code ou o Codex ao FrelyMCP com um único comando.
applies_to: any
updated: 2026-10-29
site: cli
category: Connecting AI clients
order: 7
---

# Como ligar o Claude Code ou o Codex?

Claude Code: `claude mcp add --transport http frelymcp "https://mcp.frely.cloud/mcp"`, depois abra `/mcp` no Claude Code para autorizar. Codex: `codex mcp add frelymcp --url "https://mcp.frely.cloud/mcp"`. Ambos utilizam OAuth, por isso inicie sessão no Frely e aprove o cliente quando lhe for pedido. Qualquer outro cliente MCP que suporte MCP remoto por HTTP com OAuth pode utilizar o mesmo URL.

Related: [Endpoint do FrelyMCP](https://mcp.frely.cloud/mcp) · [Página de instalação](https://cli.frely.cloud/#install) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
