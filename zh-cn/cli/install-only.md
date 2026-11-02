---
title: 如何只安装程序，而不安装设备服务？
description: 安装 frely 程序，无需设备服务。
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 4
---

# 如何只安装程序，而不安装设备服务？

使用 `https://frely.cloud/install.sh`（macOS 和 Linux）或 `https://frely.cloud/install.ps1`（Windows）。它们只安装 `frely`，适合脚本、Skill 和 Agent。也可以运行 `npm install --global --ignore-scripts frely-cli@latest`（Node.js 22 或更高版本）。安装脚本会校验可执行文件的 SHA-256，并优先从 GitHub Releases 下载，随后回退到 npmmirror 和 npmjs。

Related: [install.sh](https://frely.cloud/install.sh) · [install.ps1](https://frely.cloud/install.ps1) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
