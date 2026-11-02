---
title: 有些东西无法正常工作，该如何诊断？
description: 使用 frely doctor 诊断登录、安装和服务问题。
applies_to: any
updated: 2026-11-02
site: cli
category: Maintenance
order: 19
---

# 有些东西无法正常工作，该如何诊断？

运行 `frely doctor` 可以检查登录状态、安装情况、最新版本、MCP 和服务状态。加上 `-v` 参数可以查看配置路径、授权到期时间、最近一次心跳以及脱敏后的错误信息。如果设备显示离线，请运行 `frely link on`，重复运行是安全的。如果问题仍然存在，可以在 Discord 上提问，或附上 `frely doctor -v` 的输出来提交一个 GitHub issue。

Related: [服务维护文档](https://github.com/FrelyHQ/frely-cli/blob/main/docs/service-maintenance.md) · [Discord](https://discord.gg/hugMuSveb) · [GitHub issues](https://github.com/FrelyHQ/frely-cli/issues)
