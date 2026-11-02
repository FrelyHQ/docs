---
title: 我的 MCP URL 是甚麼？會改變嗎？
description: FrelyMCP 地址，以及顯示它的方法。
applies_to: any
updated: 2026-11-02
site: cli
category: Connecting AI clients
order: 8
---

# 我的 MCP URL 是甚麼？會改變嗎？

你帳戶中每部電腦的 FrelyMCP 地址都是 https://mcp.frely.cloud/mcp。這個地址永不改變，亦不含任何秘密；客戶端則持有 OAuth tokens。執行 `frely link on` 即可顯示該 URL，或執行 `frely link status`（用於腳本時可加上 `--json`）來顯示 URL、工作區、授權到期時間及服務狀態。

Related: [FrelyMCP 端點](https://mcp.frely.cloud/mcp) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
