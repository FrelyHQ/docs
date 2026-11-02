---
title: 命令因沙箱而失败，该怎么办？
description: 沙箱拦截命令时的处理方法。
applies_to: any
updated: 2026-10-29
site: cli
category: Security and limits
order: 18
---

# 命令因沙箱而失败，该怎么办？

在 Frely 连接页面上，你可以为某个连接打开“更多”选项：设置可读取的凭据文件夹、可写入的额外文件夹，或进行一次不受沙箱限制的限时运行。在 Windows 上，或在缺少 bubblewrap、socat 和 ripgrep 的 Linux 上，命令会被拒绝，因为计算机无法创建沙箱；在 Linux 上请安装这些工具。`FRELY_SANDBOX=off` 只会在当前设备上关闭沙箱；请仅在你接受风险的情况下使用。

Related: [沙箱如何保护你的数据](https://frely.cloud/connect/sandbox/) · [连接页面](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
