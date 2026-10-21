---
title: 使用模型与 API Key
description: API Key、客户端设置、用量，以及请求失败时的处理。
applies_to: any
updated: 2026-10-21
order: 3
---

# 使用模型与 API Key

## 如何创建 API Key？
<!-- id: api-key -->

在工作台中打开 API Key 页面并创建一个。Key 用于授权模型调用，不用于管理操作。把它保存在客户端受保护的配置中。不要放进 Git、截图或聊天里。撤销 Key 会阻止之后的使用。

Related: [指南](https://frely.cloud/docs/)

Console: [你的 API Key](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## Frely API 的 base URL 是什么？
<!-- id: base-url -->

https://api.frely.cloud。始终使用 https：纯 http 的请求会被拒绝，因此配置为 http://api.frely.cloud 的客户端会失败。同一地址服务所有协议，例如 https://api.frely.cloud/v1/chat/completions、/v1/responses、/v1/messages、/v1/embeddings，以及 /v1/models 的模型列表。有些客户端需要以 /v1 结尾的 base URL（https://api.frely.cloud/v1），并自行添加端点路径。

Related: [在 Claude 中使用 Frely](https://frely.cloud/docs/claude/) · [在 ChatGPT 中使用 Frely](https://frely.cloud/docs/chatgpt/)

Console: [API 测试（显示 base URL 和可直接使用的 curl 命令）](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## 如何认证 API 请求？
<!-- id: authentication -->

把 API Key 作为 Bearer token 发送：Authorization: Bearer <your key>。带请求体的请求要加上 Content-Type: application/json。没有有效 Key 的请求会得到 401。Key 只授权模型调用，不授权账户管理。

Console: [你的 API Key](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## 错误响应是什么样的？
<!-- id: errors -->

JSON 响应体的形式为 {"error":{"message","type","param","code"}}。type 对应 HTTP 状态：401 authentication_error，402 insufficient_quota，403 permission_error，404 not_found_error，408 或 504 timeout_error，429 rate_limit_error，其他 4xx invalid_request_error，503 service_unavailable_error，其他 5xx server_error。每个响应都带有 x-request-id 请求头，联系支持时请保留它。可重试的失败可能带有以秒为单位的 Retry-After 请求头。

Related: [联系支持](https://frely.cloud/support/)

Console: [请求历史](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## 我要在 AI 应用或客户端里填什么？
<!-- id: client-settings -->

三个值：你所选协议的公开服务地址（不是内部地址）、你自己的 API Key，以及你的账户可见的公开模型名称。你的账户说明中显示了确切的值。

Related: [在 Claude 中使用 Frely](https://frely.cloud/docs/claude/) · [在 ChatGPT 中使用 Frely](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## 如何把 Frely 添加到 Claude 或 ChatGPT？
<!-- id: connector -->

把 Frely 添加为连接器，用 FrelyMCP 地址作为 MCP 服务器 URL，认证选 OAuth，登录 Frely 并批准访问。分步指南展示了每个界面。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/) · [在 Claude 中使用 Frely](https://frely.cloud/docs/claude/) · [在 ChatGPT 中使用 Frely](https://frely.cloud/docs/chatgpt/)

## 模型出现在列表里，但我无法调用。
<!-- id: no-access -->

出现在列表中不等于有调用权限。请检查你的套餐、余额、额度和服务条款；如果你在 Team 中，向有权限的管理员询问。轮换 Key 不能绕过限制。

API tools: `models.available`, `budget.get`, `credits.account`

## 我的请求失败或超时了。
<!-- id: request-failed -->

记下时间、协议、模型名称和请求 ID（隐去敏感信息），并查看你的请求历史。超时或连接中断不能证明没有产生用量，重试前请先检查用量。不要把凭据、请求体或原始错误信息发给任何人。

Related: [联系支持](https://frely.cloud/support/)

Console: [请求历史](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## 可以依赖模型输出吗？
<!-- id: output-quality -->

模型输出可能包含错误，Frely 不保证其准确性。在安全攸关、法律、金融、医疗、安防或生产环境中使用前，请先审查。

Related: [服务条款](https://frely.cloud/terms/)
