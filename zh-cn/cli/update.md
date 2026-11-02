---
title: 如何更新 Frely CLI？
description: 更新 Frely CLI 并保留你的登录、设备和工作区。
applies_to: any
updated: 2026-10-29
site: cli
category: Maintenance
order: 20
---

# 如何更新 Frely CLI？

运行 `frely update`。它会保留你的登录、设备、URL 和工作区，从不降级，会暂停后台服务，在校验之后替换程序并重启服务。在 Windows 上，它会打印一条 PowerShell 命令，供你在本地终端中运行。重新运行 https://frely.cloud/start.sh 也会更新并重启服务。

Related: [自更新文档](https://github.com/FrelyHQ/frely-cli/blob/main/docs/self-update.md) · [start.sh](https://frely.cloud/start.sh)
