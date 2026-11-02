---
title: 设备访问权限的有效期有多长，如何续期？
description: 设备访问权限的有效期时长，以及如何续期。
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 16
---

# 设备访问权限的有效期有多长，如何续期？

设备 MCP 访问默认持续 90 天。请在到期前运行 `frely link on --days 1..365` 续期，或选择其他时长。到期后，请求和排队中的任务会停止（已完成的写入不会被撤销），并且 `frely link on` 会再次请求批准。URL 永远不会改变。请在 Frely 网站的 My Devices（我的设备）下管理您的计算机。

Related: [Frely App（我的设备）](https://frely.cloud/app/) · [设备 MCP 文档](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
