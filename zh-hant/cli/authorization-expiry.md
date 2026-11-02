---
title: 裝置存取權限有效期多久？如何續期？
description: 裝置存取權限的有效期，以及如何續期。
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 16
---

# 裝置存取權限有效期多久？如何續期？

裝置 MCP 存取權限預設有效期為 90 天。請在到期前執行 `frely link on --days 1..365` 續期，或選擇其他期限。到期後，請求和排隊中的工作會停止（已完成的寫入不會被復原），且 `frely link on` 會再次要求批准。URL 不會改變。你可以在 Frely 網站的 My Devices（我的裝置）下管理你的電腦。

Related: [Frely App（My Devices）](https://frely.cloud/app/) · [Device MCP 文件](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
