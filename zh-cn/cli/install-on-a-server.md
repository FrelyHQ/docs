---
title: 如何在无浏览器的服务器上安装？
description: 使用一次性安装命令在无浏览器的服务器上完成安装。
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 3
---

# 如何在无浏览器的服务器上安装？

在 Frely App 中依次进入 My Devices（我的设备）、Add a computer（添加电脑）、Create install command（创建安装命令），即可生成一次性安装命令；也可以让 ChatGPT 或 Claude（已连接到 FrelyMCP）为您添加电脑。将命令粘贴到服务器上即可。命令形如 `curl -fsSL https://frely.cloud/start.sh | FRELY_INSTALL_TOKEN=fit_... sh`。该令牌只能使用一次，15 分钟后过期，且不会被保存。在 Linux 上还需运行 `sudo loginctl enable-linger $USER`，这样即使您退出 SSH 登录，服务也会保持在线。

Related: [Frely App（我的设备）](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
