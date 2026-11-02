---
title: 如何只安裝程式，而不安裝裝置服務？
description: 安裝 frely 程式而不安裝裝置服務。
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 4
---

# 如何只安裝程式，而不安裝裝置服務？

請使用 `https://frely.cloud/install.sh`（macOS 和 Linux）或 `https://frely.cloud/install.ps1`（Windows）。它們只會安裝 `frely`，適合用於腳本、Skills 和 Agent。你也可以執行 `npm install --global --ignore-scripts frely-cli@latest`（Node.js 22 或更新版本）。安裝程式會驗證執行檔的 SHA-256，並先從 GitHub Releases 下載，失敗時才改用 npmmirror 和 npmjs。

Related: [install.sh](https://frely.cloud/install.sh) · [install.ps1](https://frely.cloud/install.ps1) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
