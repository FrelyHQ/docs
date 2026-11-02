---
title: 如何连接 Claude Code 或 Codex？
description: 使用一条命令将 Claude Code 或 Codex 连接到 FrelyMCP。
applies_to: any
updated: 2026-10-29
site: cli
category: Connecting AI clients
order: 7
---

# 如何连接 Claude Code 或 Codex？

Claude Code：运行 `claude mcp add --transport http frelymcp "https://mcp.frely.cloud/mcp"`，然后在 Claude Code 中打开 `/mcp` 进行授权。Codex：运行 `codex mcp add frelymcp --url "https://mcp.frely.cloud/mcp"`。两者均使用 OAuth，因此请在提示时登录 Frely 并批准该客户端。任何其他支持远程 HTTP MCP 且支持 OAuth 的 MCP 客户端都可以使用相同的 URL。

Related: [FrelyMCP 端点](https://mcp.frely.cloud/mcp) · [安装页面](https://cli.frely.cloud/#install) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
