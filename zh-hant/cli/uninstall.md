---
title: 如何解除安裝 Frely CLI？
description: 移除 Frely CLI 及其所保留的項目。
applies_to: any
updated: 2026-10-29
site: cli
category: Maintenance
order: 21
---

# 如何解除安裝 Frely CLI？

在本機終端機執行 `frely uninstall`（不要透過 Device MCP）。它會先列出所有項目，待你輸入 yes 後才移除（腳本可使用 `--yes`）。它會在 Frely 端撤銷這部電腦的存取權，移除服務、已儲存的登入、裝置識別、設定、快取，以及 Frely 安裝的 Agent Skills，最後才移除 `frely` 程式。它會保留 Frely App、你帳戶內的供應商與 Agent、安裝程式加入的 PATH 設定行、你編輯過的 Skill，以及市集項目。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App（我的裝置）](https://frely.cloud/app/)
