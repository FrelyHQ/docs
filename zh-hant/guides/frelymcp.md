---
title: FrelyMCP
description: FrelyMCP 讓 Claude、ChatGPT 及其他 MCP 用戶端存取你自己的電腦、雲端工具，以及你 Frely 帳戶內的模型與 AI Agent。
applies_to: any
updated: 2026-10-21
order: 3
---

# FrelyMCP

FrelyMCP 是你 Frely 帳戶的 MCP 伺服器。只需連接一次，你的 AI 應用程式即可存取你自己的電腦、你已開啟的雲端工具，以及你的模型和 AI Agent。你以 OAuth 登入；無需把 API Key 貼進應用程式。

## 功能
<!-- id: what -->

本機：列出已連結到你帳戶的電腦、讀取工作區內的檔案、編輯檔案、執行指令，以及在這些電腦上擷取網頁。讀寫本機檔案只是其中一部分。雲端：使用你為此連線開啟的雲端 MCP 伺服器，過程無需任何裝置。模型與 Agent：列出你可使用的模型和 Agent、為 MCP 開啟或關閉其中一項，並直接在你的 AI 應用程式內向它提問。你可以連接自己的 Agent，其運作方式與模型相同。用量會計入你的 Frely 帳戶收費。

## 開始之前
<!-- id: before -->

你需要一個 Frely 帳戶（在 frely.cloud 登入）。如要使用裝置工具，請在電腦上安裝 Frely CLI 並完成連結。模型、Agent 和雲端工具無需裝置即可使用。

```sh
curl -fsSL https://frely.cloud/install.sh | sh
frely login
frely mcp start
```

## 連接你的 AI 應用程式
<!-- id: connect -->

使用此地址作為 MCP 伺服器 URL，並選擇 OAuth。請勿加入任何驗證標頭。

```sh
https://mcp.frely.cloud/mcp
```

## Claude
<!-- id: claude -->

在 Claude 中，開啟 Settings（設定），前往 Connectors（連接器），選擇 Add custom connector（新增自訂連接器），名稱輸入 FrelyMCP，並貼上以上地址。選擇 Connect，登入 Frely 並批准存取。至於 Claude Code，請執行：claude mcp add --transport http frelymcp https://mcp.frely.cloud/mcp，然後執行 /mcp 登入。

## ChatGPT
<!-- id: chatgpt -->

在 ChatGPT 中，開啟 Settings，前往應用程式與連接器一節。建立新的連接器，貼上以上地址，選擇 OAuth 並登入 Frely。視乎你的 ChatGPT 方案，自訂連接器可能需要開發者模式。

## 使用設定檔安裝
<!-- id: config -->

部分 AI Agent（例如 WorkBuddy）會透過設定檔而非連接器介面來新增 MCP 伺服器。將此項目加入 Agent 的 MCP 設定檔中的 mcpServers 物件（保留已有的伺服器）。然後重新啟動 Agent，並在其要求時完成 Frely 登入及批准程序。如果你的 Agent 不接受 url 欄位，請使用其 remote 或 HTTP 伺服器選項並填入相同地址。

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

你的 AI 應用程式可以呼叫的工具：

| 工具 | 作用 |
| --- | --- |
| `list_devices` | 顯示你已連結的電腦、其工作區，以及它們是否在線。請最先呼叫此工具。 |
| `read` | 讀取工作區內的檔案和資料夾。 |
| `edit_file` | 在工作區內建立或修改檔案。 |
| `process` | 在裝置上執行指令並傳回其輸出。 |
| `web_fetch` | 從裝置擷取網頁。 |
| `request_permission / confirm_permission` | 要求你批准存取預設沙盒以外的地方，例如 ~/.ssh。你在 Frely 網站上以驗證碼批准。 |
| `models_list / models_set / models_invoke` | 列出你的模型和 Agent、為 MCP 開啟或關閉其中一項，並向它提問。每個已啟用的項目也會以 <model>__invoke 出現。 |
| `<mcp>__<tool>` | 你為此連線開啟的雲端 MCP 伺服器的工具。它們在雲端執行，無需裝置。 |
| `local_mcp_list / local_mcp_call` | 連接裝置上執行的 MCP 伺服器（如該裝置有提供）。 |
| `frely_list / frely_call` | 管理你的 Frely 帳戶：API Key、Credit、方案、訂單及 Creator 項目。它們在雲端執行，無需裝置。新連線起初只能讀取，直至你在 Frely 網站上開放更多權限；涉及金錢或更改憑證的操作每次均需你的批准，付款時會開啟付款頁面。 |
| `store` | 以卡片形式顯示 Frely Store（訂閱、方案、Credit、擴充功能、Skill、服務），在沒有卡片功能的應用程式則以表格顯示。每個 Buy 連結會在 Frely 網站開啟該產品，你可在該處付款。 |

## 安全與批准
<!-- id: safety -->

指令會在你的電腦上的沙盒內執行，該沙盒會封鎖 ~/.ssh 及 ~/.aws 等憑證資料夾，而工具只會接觸你已登記的工作區。當任務需要更多權限時，AI 應用程式必須以 request_permission 提出要求。由你在 Frely 網站上決定，選擇批准的有效期，並可於日後撤銷。AI 應用程式不能自行批准自己的要求。

## 你的資料
<!-- id: data -->

裝置工具呼叫（read、edit_file、process、web_fetch 及本機 MCP）會轉送到你自己的電腦；FrelyMCP 就此只保留 OAuth 登入記錄。對模型和 Agent 的呼叫會經 Frely 閘道傳送。Request Capture 可能會在有限期內保留其請求和回應內容，而你選擇的模型供應商會收到其回答所需的請求資料。詳情見《私隱政策》第 4 及第 6 節。Frely Credit 不可轉讓；模型呼叫只會按你自己的 Credit 計量。

## 如無法正常運作
<!-- id: help -->

如果 list_devices 沒有顯示任何裝置，請在電腦上執行 frely mcp start，並確認 CLI 已登入同一個 Frely 帳戶。如果裝置離線，請開啟該電腦並執行相同指令。其他查詢：support@frely.cloud。
