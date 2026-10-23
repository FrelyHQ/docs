---
title: 在 Claude 中使用 Frely
description: 將 Frely 作為自訂連接器新增至 Claude，或作為 MCP 伺服器新增至 Claude Code。
applies_to: any
updated: 2026-10-21
order: 2
name: Claude
---

# 在 Claude 中使用 Frely

只需連接一次。Claude 會登入 Frely，之後即可列出你的模型並呼叫已發佈的模型。

## 開始之前
<!-- id: before -->

- 一個 Frely 帳戶。請到 frely.cloud 登入。
- 在你的 Frely 工作區中已啟用的 API key。模型呼叫會透過它向你的帳戶收取費用。

## Claude 應用程式（網頁版及桌面版）
<!-- id: connector -->
<!-- badge: recommended -->

1. 在 Claude 中，開啟 Settings（設定），前往 Connectors（連接器），然後選擇 Add custom connector（新增自訂連接器）。
2. 輸入 Frely 作為名稱，並將以下地址貼上作為 URL：

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 不要新增驗證標頭。Claude 使用 OAuth。
4. 選擇 Connect，登入 Frely，並批准存取。
   <!-- mock: consent -->
5. 在聊天中，開啟工具選單，啟用 Frely，並要求 Claude 使用你的模型。例如：「使用我的 Frely 模型 GPT-800 來審閱這段文字。」
   <!-- mock: chat -->

## Claude Code
<!-- id: claude-code -->

1. 將 Frely 新增為 MCP 伺服器：

   ```sh
   claude mcp add --transport http frely https://frely.cloud/mcp
   ```
2. 在 Claude Code 中執行 /mcp，選擇 frely，然後在瀏覽器中登入 Frely。

   ```sh
   /mcp
   ```
3. 如想改為將單一模型新增為 Skill，請安裝 Frely CLI、執行 frely login，然後安裝該模型：

   ```sh
   frely agent install <model-link> --host claude-code
   ```

## 如果無法正常運作
<!-- id: troubleshooting -->

| 問題 | 解決方法 |
| --- | --- |
| Claude 沒有顯示 Frely 工具 | 在聊天的工具選單中啟用 Frely，或在連接後開始新的聊天。 |
| 登入失敗或存取被拒 | 使用擁有該 API key 的同一個 Frely 帳戶登入。移除連接器並重新新增，以重新開始登入程序。 |
| 呼叫時顯示需要 API key | 在你的 Frely 工作區中建立或啟用 API key，然後再試一次。 |
