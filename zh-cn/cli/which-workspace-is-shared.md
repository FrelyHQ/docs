---
title: AI 可以访问哪个文件夹？
description: AI 可以使用哪些文件夹以及如何更改。
applies_to: any
updated: 2026-11-02
site: cli
category: Getting started
order: 5
---

# AI 可以访问哪个文件夹？

默认文件夹为 `~/Frely`，由安装程序创建。在此变更之前完成设置的计算机将继续使用其已共享的文件夹。若要共享其他文件夹，请在安装前设置 `FRELY_WORKSPACE=/path`。之后可使用 `frely link workspace add <path>` 共享更多文件夹，使用 `frely link workspace remove <path>` 停止共享某个文件夹，并使用 `frely link workspace list` 查看全部文件夹。

当 AI 客户端需要访问共享文件夹之外的文件夹时，它会向你询问，你可以在网页上允许该文件夹，可选择限时或永久。永久授权仅适用于单个文件夹，不适用于你的主目录及其上层文件夹，并且需要你的通行密钥或身份验证器代码。在网页上允许的文件夹会列在设备页面中，你可以随时将其移除。已允许文件夹内的凭据文件和 shell 启动文件仍受保护。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [设备 MCP 文档](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md)
