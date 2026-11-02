---
title: 如何在终端或 AI 中管理我的 Frely 账户（API Key、Credit、套餐、订单）？
description: 使用 frely api 管理 API Key、Credit、套餐和订单。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# 如何在终端或 AI 中管理我的 Frely 账户（API Key、Credit、套餐、订单）？

使用 `frely api list` 查看所有操作，使用 `frely api describe <name>` 查看某个操作的详情，使用 `frely api call <name> --json '{...}'` 执行操作。例如：`frely api call agents.list`、`frely api call usage.summary`。连接到 FrelyMCP 的 AI 客户端可以通过 `frely_list` 和 `frely_call` 工具访问相同的操作。首次运行 `frely api` 命令时，会打开浏览器进行单独的 OAuth 授权。这些操作由 https://frely.cloud/mcp 提供。

Related: [frely api 文档](https://github.com/FrelyHQ/frely-cli/blob/main/docs/api.md) · [Frely 账户 API 端点](https://frely.cloud/mcp) · [Frely App（My Devices，我的设备）](https://frely.cloud/app/)
