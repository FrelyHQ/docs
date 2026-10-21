---
title: FrelyMCP
description: FrelyMCP 让 Claude、ChatGPT 等 MCP 客户端访问你自己的电脑、云端工具，以及 Frely 账户里的模型和 AI Agent。
applies_to: any
updated: 2026-10-21
order: 3
---

# FrelyMCP

FrelyMCP 是你 Frely 账户的 MCP 服务。连接一次，你的 AI 应用就能访问你自己的电脑、你开启的云端工具，以及你的模型和 AI Agent。通过 OAuth 登录，不需要把 API Key 粘贴进应用。

## 能做什么
<!-- id: what -->

本地：列出已关联的电脑，读取工作区文件、编辑文件、执行命令、抓取网页。读写本机文件只是其中一部分。云端：使用你为这个连接开启的云端 MCP 服务，不需要设备。模型和 Agent：列出你能用的模型和 Agent，为 MCP 开启或关闭，并在 AI 应用里直接向它提问。你可以接入自己的 Agent，它的用法和模型一样。用量计入你的 Frely 账户。

## 开始之前
<!-- id: before -->

需要一个 Frely 账户（在 frely.cloud 登录）。使用设备工具，需要在那台电脑上安装并关联 Frely CLI；只用模型、Agent 和云端工具不需要设备。

```sh
curl -fsSL https://frely.cloud/install.sh | sh
frely login
frely mcp start
```

## 连接 AI 应用
<!-- id: connect -->

把下面的地址填为 MCP 服务器 URL，认证方式选 OAuth，不要添加认证头。

```sh
https://mcp.frely.cloud/mcp
```

## Claude
<!-- id: claude -->

在 Claude 中打开设置，进入连接器，选择添加自定义连接器，名称填 FrelyMCP，粘贴上面的地址。选择连接，登录 Frely 并批准访问。Claude Code 运行：claude mcp add --transport http frelymcp https://mcp.frely.cloud/mcp，再用 /mcp 登录。

## ChatGPT
<!-- id: chatgpt -->

在 ChatGPT 中打开设置，进入应用与连接器。新建连接器，粘贴上面的地址，认证选 OAuth 并登录 Frely。自定义连接器是否需要开发者模式，取决于你的 ChatGPT 套餐。

## 通过配置文件安装
<!-- id: config -->

部分 AI Agent（例如 WorkBuddy）通过配置文件而不是连接器界面添加 MCP 服务。把下面的条目加入该 Agent 的 MCP 配置文件的 mcpServers 中（保留已有的服务）。然后重启 Agent，并在提示时完成 Frely 登录与授权。如果你的 Agent 不支持 url 字段，请在它的远程或 HTTP 服务器选项里填写同一个地址。

```json
{
  "mcpServers": {
    "frely": {
      "url": "https://mcp.frely.cloud/mcp"
    }
  }
}
```

## 工具
<!-- id: tools -->

AI 应用可以调用的工具：

| 工具 | 作用 |
| --- | --- |
| `list_devices` | 列出已关联的电脑、工作区以及是否在线。请先调用它。 |
| `read` | 读取工作区内的文件和目录。 |
| `edit_file` | 在工作区内创建或修改文件。 |
| `process` | 在设备上执行命令并返回输出。 |
| `web_fetch` | 从设备抓取网页。 |
| `request_permission / confirm_permission` | 请你批准默认沙箱之外的访问，例如 ~/.ssh。你在 Frely 网站上用验证码批准。 |
| `models_list / models_set / models_invoke` | 列出你的模型和 Agent、为 MCP 开启或关闭，并向它提问。开启后每个还会以 <model>__invoke 的形式出现。 |
| `<mcp>__<tool>` | 你为这个连接开启的云端 MCP 服务的工具。它们在云端运行，不需要设备。 |
| `local_mcp_list / local_mcp_call` | 访问设备上运行的 MCP 服务（设备提供时）。 |
| `frely_list / frely_call` | 管理你的 Frely 账户：API Key、Credit、套餐、订单和 Creator 商品。它们在云端运行，不需要设备。新连接默认只读，需要你在 Frely 网站上放开更多权限；动钱或改凭据的操作每次都要你批准，付款会打开付款页面。 |
| `store` | 展示 Frely 商店（订阅、套餐、Credit、扩展权益、Skills、平台服务），支持卡片的应用显示卡片，其他应用显示表格。每个购买链接都会在 Frely 网站打开该商品，在那里付款。 |

## 安全与授权
<!-- id: safety -->

命令在你电脑上的沙箱里运行，默认禁止读取 ~/.ssh、~/.aws 等凭证目录，工具只触及你登记的工作区。任务需要更多权限时，AI 应用必须用 request_permission 提出申请；由你在 Frely 网站上决定、选择有效时长，之后可随时撤销。AI 应用不能自己批准自己的申请。

## 你的数据
<!-- id: data -->

设备工具调用（read、edit_file、process、web_fetch 和本地 MCP）会转发到你自己的电脑，FrelyMCP 只保留这些调用所需的 OAuth 登录记录。向模型和 Agent 的调用经过 Frely 网关；Request Capture 可能在有限期限内保存其请求和响应内容，你选择的模型提供方会收到回答所需的请求数据。详情见隐私政策第 4 和第 6 节。Frely Credit 不可转移；模型调用只按用量扣除你自己的 Credit。

## 遇到问题
<!-- id: help -->

如果 list_devices 没有设备，请在那台电脑上运行 frely mcp start，并确认 CLI 登录的是同一个 Frely 账户。设备离线时，请开机联网后运行同一条命令。其他问题请发邮件到 support@frely.cloud。
