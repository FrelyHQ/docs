---
title: 在 Claude 中使用 Frely
description: 把 Frely 作为自定义连接器添加到 Claude，或作为 MCP 服务器添加到 Claude Code。
applies_to: any
updated: 2026-10-21
order: 2
name: Claude
---

# 在 Claude 中使用 Frely

只需连接一次。Claude 登录 Frely 后，可以列出你的模型并调用已发布的模型。

## 开始之前
<!-- id: before -->

- 一个 Frely 账户，在 frely.cloud 登录。
- 在 Frely 工作台中有一个已启用的 API Key。模型调用通过它计入你的账户。

## Claude 应用（网页版和桌面版）
<!-- id: connector -->
<!-- badge: 推荐 -->

1. 在 Claude 中打开设置，进入“连接器”，选择“添加自定义连接器”。
2. 名称填 Frely，URL 填：

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 不要添加认证请求头，Claude 会使用 OAuth。
4. 点击连接，登录 Frely 并授权。
   <!-- mock: consent -->
5. 在对话中打开工具菜单，启用 Frely，让 Claude 使用你的模型。例如：“用我的 Frely 模型 GPT-800 检查这段文字。”
   <!-- mock: chat -->

## Claude Code
<!-- id: claude-code -->

1. 把 Frely 添加为 MCP 服务器：

   ```sh
   claude mcp add --transport http frely https://frely.cloud/mcp
   ```
2. 在 Claude Code 中运行 /mcp，选择 frely，在浏览器中登录 Frely。

   ```sh
   /mcp
   ```
3. 如果只想把一个模型添加为 Skill：安装 Frely CLI，运行 frely login，再安装模型：

   ```sh
   frely agent install <model-link> --host claude-code
   ```

## 遇到问题时
<!-- id: troubleshooting -->

| 问题 | 处理 |
| --- | --- |
| Claude 里看不到 Frely 工具 | 在对话的工具菜单中启用 Frely，或连接后新建一个对话。 |
| 登录失败或被拒绝访问 | 使用拥有该 API Key 的同一个 Frely 账户登录。删除连接器后重新添加，可以重新发起登录。 |
| 调用提示需要 API Key | 在 Frely 工作台创建或启用一个 API Key 后重试。 |
