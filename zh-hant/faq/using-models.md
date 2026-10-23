---
title: 使用模型與 API key
description: API key、用戶端設定、用量，以及請求失敗時的處理方法。
applies_to: any
updated: 2026-10-21
order: 3
---

# 使用模型與 API key

## 如何建立 API key？
<!-- id: api-key -->

在你的控制台開啟 API key 頁面並建立一個。Key 用於授權模型呼叫，而非管理操作。請將它保存在用戶端的受保護設定中。切勿把它放進 Git、截圖或聊天訊息之中。撤銷 key 即會終止其之後的使用。

Related: [指南](https://frely.cloud/docs/)

Console: [你的 API key](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## Frely API 的 base URL 是甚麼？
<!-- id: base-url -->

https://api.frely.cloud。請一律使用 https：以純 http 發出的請求會被拒絕，因此設定為 http://api.frely.cloud 的用戶端將會失敗。同一地址適用於所有協定，例如 https://api.frely.cloud/v1/chat/completions、/v1/responses、/v1/messages、/v1/embeddings，以及位於 /v1/models 的模型清單。有些用戶端要求 base URL 以 /v1 結尾（https://api.frely.cloud/v1），並自行附加端點路徑。

Related: [在 Claude 中使用 Frely](https://frely.cloud/docs/claude/) · [在 ChatGPT 中使用 Frely](https://frely.cloud/docs/chatgpt/)

Console: [API 測試（顯示 base URL 及現成的 curl 指令）](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## 如何驗證 API 請求？
<!-- id: authentication -->

以 bearer token 形式傳送你的 API key：Authorization: Bearer <your key>。帶有請求主體的請求請加上 Content-Type: application/json。沒有有效 key 的請求會收到 401。Key 只授權模型呼叫，並不授權帳戶管理。

Console: [你的 API key](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## 錯誤回應是甚麼樣子的？
<!-- id: errors -->

JSON 內容的格式為 {"error":{"message","type","param","code"}}。type 對應 HTTP 狀態：401 authentication_error、402 insufficient_quota、403 permission_error、404 not_found_error、408 或 504 timeout_error、429 rate_limit_error、其他 4xx 為 invalid_request_error、503 service_unavailable_error、其他 5xx 為 server_error。每個回應都帶有 x-request-id 標頭；聯絡支援時請保留它。可重試的失敗可能附有以秒計的 Retry-After 標頭。

Related: [聯絡支援](https://frely.cloud/support/)

Console: [請求歷史紀錄](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## 我要在 AI 應用程式或用戶端輸入甚麼？
<!-- id: client-settings -->

三項數值：你所選協定的公開服務地址（而非內部地址）、你自己的 API key，以及一個你的帳戶可以看到的公開模型名稱。你的帳戶說明會顯示確切數值。

Related: [在 Claude 中使用 Frely](https://frely.cloud/docs/claude/) · [在 ChatGPT 中使用 Frely](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## 如何將 Frely 加入 Claude 或 ChatGPT？
<!-- id: connector -->

將 Frely 新增為 connector（連接器），以 FrelyMCP 地址作為 MCP 伺服器 URL，選擇 OAuth，登入 Frely 並批准存取。逐步指南會展示每個畫面。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/) · [在 Claude 中使用 Frely](https://frely.cloud/docs/claude/) · [在 ChatGPT 中使用 Frely](https://frely.cloud/docs/chatgpt/)

## 模型有顯示在清單中，但我無法呼叫。
<!-- id: no-access -->

出現在清單上並不代表有權呼叫。請檢查你的計劃、餘額、額度及服務條款；如果你屬於某個 Team，請向獲授權的管理員查詢。更換 key 並不能繞過限制。

API tools: `models.available`, `budget.get`, `credits.account`

## 我的請求失敗或逾時。
<!-- id: request-failed -->

請記下時間、協定、模型名稱及請求 ID（先遮去敏感資料），並查看你的請求歷史紀錄。逾時或連線中斷並不代表沒有消耗用量，因此重試前請先檢查用量。切勿向任何人發送憑證、請求內容或原始錯誤內容。

Related: [聯絡支援](https://frely.cloud/support/)

Console: [請求歷史紀錄](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## 我可以信賴模型輸出嗎？
<!-- id: output-quality -->

模型輸出可能包含錯誤，Frely 並不保證其準確性。在安全關鍵、法律、財務、醫療、保安或生產環境中使用之前，請先仔細核對。

Related: [服務條款](https://frely.cloud/terms/)
