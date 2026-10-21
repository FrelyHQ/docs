---
title: 在 ChatGPT 中使用 Frely
description: 把 Frely 作为连接器添加到 ChatGPT，然后在对话中调用你的 Frely 模型。
applies_to: any
updated: 2026-10-21
order: 1
name: ChatGPT
---

# 在 ChatGPT 中使用 Frely

只需连接一次。ChatGPT 登录 Frely 后，可以列出你的模型并调用已发布的模型。

## 开始之前
<!-- id: before -->

- 一个 Frely 账户，在 frely.cloud 登录。
- 在 Frely 工作台中有一个已启用的 API Key。模型调用通过它计入你的账户。

## 添加 Frely 连接器
<!-- id: connector -->
<!-- badge: 推荐 -->

1. 在 ChatGPT 中打开设置，进入应用与连接器相关的页面，新建一个连接器。根据 ChatGPT 套餐不同，自定义连接器可能需要开启开发者模式。
2. 名称填 Frely，MCP 服务器地址填：

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 认证方式选 OAuth。不要填写 API Key 或认证请求头。
4. 在弹出的窗口中登录 Frely 并授权。
   <!-- mock: consent -->
5. 新建对话，打开 Frely 连接器，让 ChatGPT 使用你的模型。例如：“用我的 Frely 模型 GPT-800 检查这段文字。”
   <!-- mock: chat -->

## 粘贴安装提示词
<!-- id: prompt -->

这种方式会安装 Frely CLI，需要 ChatGPT 能在你的电脑上执行命令。

1. 在 Frely 工作台打开模型，点击“Copy for ChatGPT”。别人分享给你的模型，使用对方发来的安装链接。
2. 粘贴到 ChatGPT。ChatGPT 会安装 Frely CLI、在浏览器中登录 Frely，并把模型添加为 Skill。
3. 如果 ChatGPT 提示重新加载 Skill，照做后按名称调用模型。

## 使用命令行
<!-- id: cli -->

1. 安装 Frely CLI：

   ```sh
   curl -fsSL https://frely.cloud/install.sh | sh
   ```
2. 登录 Frely：

   ```sh
   frely login
   ```
3. 把模型安装为 ChatGPT Skill，模型链接取自它的安装说明：

   ```sh
   frely agent install <model-link> --host chatgpt
   ```

## 遇到问题时
<!-- id: troubleshooting -->

| 问题 | 处理 |
| --- | --- |
| ChatGPT 里看不到 Frely 工具 | 在对话中打开 Frely 连接器，或添加后新建一个对话。 |
| 登录失败或被拒绝访问 | 使用拥有该 API Key 的同一个 Frely 账户登录。删除连接器后重新添加，可以重新发起登录。 |
| 调用提示需要 API Key | 在 Frely 工作台创建或启用一个 API Key 后重试。 |
