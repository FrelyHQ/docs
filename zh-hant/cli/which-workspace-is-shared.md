---
title: AI 可以存取哪個資料夾？
description: AI 可以使用哪些資料夾，以及如何更改。
applies_to: any
updated: 2026-11-02
site: cli
category: Getting started
order: 5
---

# AI 可以存取哪個資料夾？

預設使用 `~/Frely` 資料夾，由安裝程式建立。在此變更之前已設定的電腦，會繼續使用其原本共用的資料夾。如要共用另一個資料夾，可在安裝前設定 `FRELY_WORKSPACE=/path`。之後可使用 `frely link workspace add <path>` 共用更多資料夾、`frely link workspace remove <path>` 停止共用某個資料夾，以及 `frely link workspace list` 查看全部資料夾。

當 AI 用戶端需要使用共用資料夾以外的資料夾時，它會向你請求，你可以在網頁上允許該資料夾，選擇限時或永久。永久允許只適用於單一資料夾，並不適用於你的主資料夾或其上層資料夾，而且需要你的通行密鑰或驗證器代碼。在網頁上允許的資料夾會列於裝置頁面，你可以隨時將其移除。已允許資料夾內的憑證和 shell 啟動檔案仍然受到保護。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [裝置 MCP 文件](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md)
