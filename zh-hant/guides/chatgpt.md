---
title: 在 ChatGPT 中使用 Frely
description: 將 Frely 作為連接器新增至 ChatGPT,然後在對話中呼叫你的 Frely 模型。
applies_to: any
updated: 2026-10-21
order: 1
name: ChatGPT
---

# 在 ChatGPT 中使用 Frely

只需連接一次。ChatGPT 會登入 Frely,之後即可列出你的模型，並呼叫已發佈的模型。

## 開始之前
<!-- id: before -->

- 一個 Frely 帳戶。請於 frely.cloud 登入。
- Frely 工作區內已啟用的 API key。模型呼叫的費用會透過它計入你的帳戶。

## 將 Frely 新增為連接器
<!-- id: connector -->
<!-- badge: recommended -->

1. 在 ChatGPT 中，開啟 Settings(設定)，前往應用程式與連接器的區段。建立新的連接器。自訂連接器可能需要開發者模式，視乎你的 ChatGPT 計劃而定。
2. 輸入 Frely 作為名稱，並將以下地址貼上為 MCP 伺服器 URL：

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 驗證方式選擇 OAuth。不要加入 API key 或授權標頭。
4. 在彈出的視窗中登入 Frely,並批准存取。
   <!-- mock: consent -->
5. 在新對話中，開啟 Frely 連接器，並要求 ChatGPT 使用你的模型。例如：「使用我的 Frely 模型 GPT-800 來審閱這段文字。」
   <!-- mock: chat -->

## 貼上安裝提示
<!-- id: prompt -->

此方法會安裝 Frely CLI,因此 ChatGPT 需要在你的電腦上執行命令。

1. 在你的 Frely 工作區中，開啟模型並選擇 Copy for ChatGPT。如果模型是別人分享給你的，請使用對方傳送的安裝連結。
2. 將它貼到 ChatGPT。ChatGPT 會安裝 Frely CLI、在你的瀏覽器中讓你登入 Frely,並將該模型新增為 Skill。
3. 如果 ChatGPT 要求你重新載入 Skill,請重新載入。然後按名稱呼叫模型。

## 使用命令列
<!-- id: cli -->

1. 安裝 Frely CLI:

   ```sh
   curl -fsSL https://frely.cloud/install.sh | sh
   ```
2. 登入 Frely:

   ```sh
   frely login
   ```
3. 將模型安裝為 ChatGPT Skill。使用其安裝說明中的模型連結：

   ```sh
   frely agent install <model-link> --host chatgpt
   ```

## 如果無法正常運作
<!-- id: troubleshooting -->

| 問題 | 解決方法 |
| --- | --- |
| ChatGPT 沒有顯示 Frely 工具 | 在對話中開啟 Frely 連接器，或在新增後開始新對話。 |
| 登入失敗或存取被拒 | 使用擁有該 API key 的同一 Frely 帳戶登入。移除連接器後重新新增，以重新開始登入。 |
| 呼叫時顯示需要 API key | 在你的 Frely 工作區建立或啟用 API key,然後再試一次。 |
