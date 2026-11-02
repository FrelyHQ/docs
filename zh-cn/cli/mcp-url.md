---
title: 我的 MCP URL 是什么，它会变化吗？
description: FrelyMCP 的地址，以及如何将其打印出来。
applies_to: any
updated: 2026-11-02
site: cli
category: Connecting AI clients
order: 8
---

# 我的 MCP URL 是什么，它会变化吗？

FrelyMCP 的地址对你账户中的每台计算机都是 https://mcp.frely.cloud/mcp。它永远不会变化，也不包含任何机密信息；OAuth 令牌由客户端持有。运行 `frely link on` 即可打印该 URL，或运行 `frely link status`（供脚本使用时可加上 `--json`）来显示 URL、工作区、授权到期时间和服务状态。

Related: [FrelyMCP 端点](https://mcp.frely.cloud/mcp) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
