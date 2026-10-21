---
title: 设备与 Frely CLI
description: 安装 CLI、关联电脑、保持可用以及移除。
applies_to: any
updated: 2026-10-21
order: 4
---

# 设备与 Frely CLI

## 如何安装 Frely CLI 并关联我的电脑？
<!-- id: install -->

运行安装脚本：curl -fsSL https://frely.cloud/install.sh | sh。它会安装 frely 并运行 frely mcp start，后者会打开浏览器登录（新账户可在同一页面注册），请你在页面上批准该设备，并打印你的 MCP URL。随时可以重新运行来更新。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 我的 AI 应用看不到设备。
<!-- id: no-device -->

在那台电脑上运行 frely mcp start，并确认 CLI 登录的是与 AI 应用相同的 Frely 账户。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 设备显示离线。
<!-- id: offline -->

把电脑开机、联网，再运行一次 frely mcp start。frely doctor 可以查看账户、安装、版本、MCP 和服务状态；加 -v 可看详情。

Console: [我的设备](https://frely.cloud/user/device)

## 设备访问已过期。
<!-- id: expired -->

设备 MCP 访问默认 90 天有效。运行 frely mcp start 重新批准（frely mcp start --days 后跟 1 到 365 的数字可提前续期）。MCP URL 不变。你可以在 Frely 网站的“我的设备”中管理你的电脑。

Console: [我的设备](https://frely.cloud/user/device)

## 为什么 AI 应用会请求读取某些文件夹的权限？
<!-- id: permissions -->

命令在沙箱中运行，默认禁止访问 ~/.ssh、~/.aws 等凭证目录，工具只触及你登记的工作区。当任务需要更多权限时，应用必须提出申请，由你在 Frely 网站上决定并选择有效时长，之后可随时撤销。AI 应用不能自己批准自己的申请。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 如何从电脑上移除 Frely？
<!-- id: uninstall -->

在本地终端运行 frely uninstall。它会先列出所有将删除的内容，在你输入 yes 后执行删除。它会吊销这台电脑的访问，移除服务、保存的登录、设备身份、设置和缓存，最后删除 frely 程序。你的 Provider 和 Agent 保留在你的账户中。
