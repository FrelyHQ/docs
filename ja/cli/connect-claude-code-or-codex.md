---
title: Claude Code や Codex に接続するにはどうすればよいですか？
description: 1つのコマンドで Claude Code または Codex を FrelyMCP に接続します。
applies_to: any
updated: 2026-10-29
site: cli
category: Connecting AI clients
order: 7
---

# Claude Code や Codex に接続するにはどうすればよいですか？

Claude Code の場合：`claude mcp add --transport http frelymcp "https://mcp.frely.cloud/mcp"` を実行し、Claude Code で `/mcp` を開いて認証してください。Codex の場合：`codex mcp add frelymcp --url "https://mcp.frely.cloud/mcp"` を実行します。どちらも OAuth を使用するため、Frely にサインインし、求められたらクライアントを承認してください。OAuth 対応のリモート HTTP MCP をサポートするその他の MCP クライアントでも、同じ URL を利用できます。

Related: [FrelyMCP エンドポイント](https://mcp.frely.cloud/mcp) · [インストールページ](https://cli.frely.cloud/#install) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
