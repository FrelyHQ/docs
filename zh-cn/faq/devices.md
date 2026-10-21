---
title: 设备与 Frely CLI
description: 安装 CLI、关联电脑、保持可用，以及移除。
applies_to: any
updated: 2026-10-21
order: 4
---

# 设备与 Frely CLI

## 如何安装 Frely CLI 并关联我的电脑？
<!-- id: install -->

运行安装脚本：curl -fsSL https://frely.cloud/install.sh | sh。它会安装 frely 并运行 frely mcp start，后者会打开浏览器进行登录（新账户可在同一页面注册），要求你批准该设备，并打印你的 MCP URL。随时可以重新运行来更新。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 我的 AI 应用里没有显示设备。
<!-- id: no-device -->

在这台电脑上运行 frely mcp start，并确认 CLI 登录的是与你的 AI 应用相同的 Frely 账户。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 设备显示离线。
<!-- id: offline -->

把电脑开机、联网，然后重新运行 frely mcp start。frely doctor 会显示账户、安装、版本、MCP 和服务状态；加 -v 可查看详情。

Console: [我的设备](https://frely.cloud/user/device)

## 设备访问已过期。
<!-- id: expired -->

设备 MCP 访问默认有效期为 90 天。运行 frely mcp start 重新批准（frely mcp start --days 加 1 到 365 的数字可提前续期）。MCP URL 不会改变。你可以在 Frely 网站的“我的设备”里管理你的电脑。

Console: [我的设备](https://frely.cloud/user/device)

## 为什么 AI 应用要请求读取某些文件夹的权限？
<!-- id: permissions -->

命令在沙箱中运行，沙箱会阻止 ~/.ssh 和 ~/.aws 等凭据文件夹，工具也只触及你登记的工作区。当任务需要更多权限时，AI 应用必须提出申请，由你在 Frely 网站上决定是否批准以及有效时长，之后可随时撤销。AI 应用不能批准自己的申请。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 如何从我的电脑移除 Frely？
<!-- id: uninstall -->

在本地终端运行 frely uninstall。它会先列出所有内容，在你输入 yes 后移除。它会撤销这台电脑的访问，移除服务、已保存的登录、设备身份、设置和缓存，最后移除 frely 程序。你的 Provider 和 Agent 保留在你的账户中。
