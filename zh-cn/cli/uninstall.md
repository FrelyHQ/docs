---
title: 如何卸载 Frely CLI？
description: 移除 Frely CLI 及其保留的内容。
applies_to: any
updated: 2026-10-29
site: cli
category: Maintenance
order: 21
---

# 如何卸载 Frely CLI？

在本地终端中运行 `frely uninstall`（不要通过 Device MCP 运行）。它会先列出将要删除的全部内容，在你输入 yes 后才会执行删除（脚本可使用 `--yes`）。它会在 Frely 侧撤销这台计算机的访问权限，删除服务、已保存的登录信息、设备身份、设置、缓存以及 Frely 安装的 Agent Skills，最后删除 `frely` 程序。它会保留 Frely App、你账户中的 Providers（提供商）和 Agents、安装程序添加的 PATH 行、你编辑过的 Skills 以及市场条目。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App（My Devices，我的设备）](https://frely.cloud/app/)
