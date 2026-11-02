---
title: 指令因沙盒而失敗。我可以怎樣做？
description: 當沙盒封鎖指令時的處理方法。
applies_to: any
updated: 2026-10-29
site: cli
category: Security and limits
order: 18
---

# 指令因沙盒而失敗。我可以怎樣做？

在 Frely 的連接頁面，你可以為某個連接開啟更多設定：可讀取的憑證資料夾、額外可寫入的資料夾，或是不使用沙盒的限時執行。在 Windows 上，或是在沒有 bubblewrap、socat 和 ripgrep 的 Linux 上，指令會被拒絕，因為電腦無法建立沙盒；請在 Linux 上安裝這些工具。`FRELY_SANDBOX=off` 只會在該裝置上關閉沙盒；請只在你接受相關風險時才使用。

Related: [沙盒如何保護你的資料](https://frely.cloud/connect/sandbox/) · [連接頁面](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
