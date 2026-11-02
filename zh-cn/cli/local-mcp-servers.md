---
title: 如何让远程 AI 使用运行在我电脑上的 MCP 服务器？
description: 让远程 AI 使用运行在你电脑上的 MCP 服务器。
applies_to: any
updated: 2026-11-02
site: cli
category: Using your computer
order: 11
---

# 如何让远程 AI 使用运行在我电脑上的 MCP 服务器？

Frely 会发现仅监听环回地址的服务器；使用 `frely link local list` 列出它们。使用 `frely link local add <name> --url http://127.0.0.1:<port>/mcp` 添加其他服务器，对于 stdio 服务器则使用 `frely link local add <name> -- <command> [args...]`。每台服务器在你于 Frely 连接页面上将其逐一开启之前，都会对远程客户端保持隐藏。已启用的服务器将在命令沙箱之外、以你的用户账户运行。

Related: [连接页面](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
