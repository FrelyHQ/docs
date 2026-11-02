---
title: 如何在終端機或 AI 中管理我的 Frely 帳戶（API Key、Credit、方案及訂單）？
description: 使用 frely api 管理 API Key、Credit、方案及訂單。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# 如何在終端機或 AI 中管理我的 Frely 帳戶（API Key、Credit、方案及訂單）？

使用 `frely api list` 查看可用的操作，使用 `frely api describe <name>` 檢視單一操作，並使用 `frely api call <name> --json '{...}'` 執行操作。例如：`frely api call agents.list`、`frely api call usage.summary`。連接到 FrelyMCP 的 AI 用戶端可透過 `frely_list` 和 `frely_call` 工具存取相同的操作。首次執行 `frely api` 指令時，會開啟瀏覽器以進行獨立的 OAuth 授權。這些操作由 https://frely.cloud/mcp 提供。

Related: [frely api doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/api.md) · [Frely 帳戶 API 端點](https://frely.cloud/mcp) · [Frely App（My Devices）](https://frely.cloud/app/)
