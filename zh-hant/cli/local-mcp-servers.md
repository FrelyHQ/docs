---
title: 如何讓遠端 AI 使用在我電腦上執行的 MCP 伺服器？
description: 讓遠端 AI 使用在你電腦上執行的 MCP 伺服器。
applies_to: any
updated: 2026-11-02
site: cli
category: Using your computer
order: 11
---

# 如何讓遠端 AI 使用在我電腦上執行的 MCP 伺服器？

Frely 會找出僅監聽 loopback 的伺服器；請用 `frely link local list` 列出這些伺服器。如要新增其他伺服器，可使用 `frely link local add <name> --url http://127.0.0.1:<port>/mcp`；如屬 stdio 伺服器，則使用 `frely link local add <name> -- <command> [args...]`。在你於 Frely 連線頁面逐一開啟之前，每個伺服器都會對遠端用戶端保持隱藏。已啟用的伺服器會以你的用戶帳戶、在指令沙盒以外執行。

Related: [連線頁面](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
