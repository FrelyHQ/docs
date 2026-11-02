---
title: 让 AI 使用我的电脑安全吗？
description: 访问、沙盒和凭据在你的电脑上如何受到限制。
applies_to: any
updated: 2026-11-02
site: cli
category: Security and limits
order: 17
---

# 让 AI 使用我的电脑安全吗？

访问范围仅限于你共享的文件夹。文件工具会拒绝符号链接逃逸，并将读写大小限制在 1 MiB 以内。命令以你的操作系统用户身份在操作系统沙盒中运行：凭据文件夹不可读取，写入仅限于工作区和临时目录，网络流量经过代理。如果电脑无法进行沙盒隔离，命令将被拒绝执行，而不会在没有沙盒的情况下运行。MCP URL 不包含任何机密信息，CLI 会将其执行密钥加密后保存在操作系统的凭据存储中。你可以随时使用 `frely link off` 撤销访问；该命令会撤销所有客户端的访问，并锁定该电脑上的远程控制，直到你在该电脑上运行 `frely link on` 为止。

Related: [沙盒如何保护你的数据](https://frely.cloud/connect/sandbox/) · [凭据与安装边界](https://github.com/FrelyHQ/frely-cli/blob/main/docs/credential-storage.md) · [安全政策](https://github.com/FrelyHQ/frely-cli/blob/main/SECURITY.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
