---
title: 讓 AI 使用我的電腦安全嗎？
description: 存取權限、沙盒及憑證在你電腦上如何受到限制。
applies_to: any
updated: 2026-11-02
site: cli
category: Security and limits
order: 17
---

# 讓 AI 使用我的電腦安全嗎？

存取權限僅限於你分享的資料夾。檔案工具會拒絕符號連結逃逸，並將讀寫上限設為 1 MiB。指令會以你的作業系統使用者身份在作業系統沙盒內執行：憑證資料夾無法讀取，寫入僅限於工作區及暫存目錄，而網絡流量會經過代理伺服器。如果電腦無法提供沙盒，指令會被拒絕執行，而不是在沒有沙盒的情況下執行。MCP URL 不包含任何秘密，而 CLI 會將其執行金鑰加密後儲存在作業系統的憑證儲存庫中。你可以隨時使用 `frely link off` 撤銷存取權限；這會撤銷所有用戶端，並鎖定該電腦上的遙距控制，直到你在該電腦上執行 `frely link on` 為止。

Related: [沙盒如何保護你的資料](https://frely.cloud/connect/sandbox/) · [憑證與安裝界限](https://github.com/FrelyHQ/frely-cli/blob/main/docs/credential-storage.md) · [安全政策](https://github.com/FrelyHQ/frely-cli/blob/main/SECURITY.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
