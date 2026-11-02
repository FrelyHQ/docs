---
title: 如何連接 Claude Code 或 Codex？
description: 只需一個指令，即可將 Claude Code 或 Codex 連接至 FrelyMCP。
applies_to: any
updated: 2026-10-29
site: cli
category: Connecting AI clients
order: 7
---

# 如何連接 Claude Code 或 Codex？

Claude Code：執行 `claude mcp add --transport http frelymcp "https://mcp.frely.cloud/mcp"`，然後在 Claude Code 中開啟 `/mcp` 進行授權。Codex：執行 `codex mcp add frelymcp --url "https://mcp.frely.cloud/mcp"`。兩者均使用 OAuth，因此當系統提示時，請登入 Frely 並批准該用戶端。任何其他支援以 OAuth 連接遠端 HTTP MCP 的 MCP 用戶端，均可以使用同一網址。

Related: [FrelyMCP 端點](https://mcp.frely.cloud/mcp) · [安裝頁面](https://cli.frely.cloud/#install) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
