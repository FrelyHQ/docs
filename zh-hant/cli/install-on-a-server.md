---
title: 如何在沒有瀏覽器的伺服器上安裝？
description: 使用一次性安裝指令，在沒有瀏覽器的伺服器上進行安裝。
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 3
---

# 如何在沒有瀏覽器的伺服器上安裝？

在 Frely App 的「我的裝置」（My Devices）中，依序選擇「新增電腦」（Add a computer）→「建立安裝指令」（Create install command）來建立一次性安裝指令，或要求已連接 FrelyMCP 的 ChatGPT 或 Claude 為你新增電腦。在伺服器上貼上該指令，其格式如下：`curl -fsSL https://frely.cloud/start.sh | FRELY_INSTALL_TOKEN=fit_... sh`。此 token 只能使用一次，15 分鐘後便會過期，且不會被儲存。在 Linux 上，另請執行 `sudo loginctl enable-linger $USER`，以確保你登出 SSH 後服務仍然保持線上。

Related: [Frely App（我的裝置）](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
