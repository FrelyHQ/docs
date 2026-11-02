---
title: 功能無法正常運作，應如何診斷？
description: 使用 frely doctor 診斷登入、安裝及服務問題。
applies_to: any
updated: 2026-11-02
site: cli
category: Maintenance
order: 19
---

# 功能無法正常運作，應如何診斷？

執行 `frely doctor` 以檢查登入狀態、安裝情況、最新版本、MCP 及服務狀態。加入 `-v` 可查看設定檔路徑、授權到期時間、最近一次心跳及已移除敏感資訊的錯誤訊息。如果裝置顯示離線，請執行 `frely link on`，此指令可安全地重複執行。如果問題仍然存在，可在 Discord 提問，或附上 `frely doctor -v` 的輸出結果到 GitHub 開立 issue。

Related: [服務維護文件](https://github.com/FrelyHQ/frely-cli/blob/main/docs/service-maintenance.md) · [Discord](https://discord.gg/hugMuSveb) · [GitHub issues](https://github.com/FrelyHQ/frely-cli/issues)
