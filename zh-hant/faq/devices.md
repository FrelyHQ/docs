---
title: 裝置與 Frely CLI
description: 安裝 CLI、連結電腦、確保其正常運作以及移除。
applies_to: any
updated: 2026-10-21
order: 4
---

# 裝置與 Frely CLI

## 如何安裝 Frely CLI 並連結我的電腦？
<!-- id: install -->

執行安裝腳本：curl -fsSL https://frely.cloud/install.sh | sh。它會安裝 frely 並執行 frely mcp start，過程會開啟瀏覽器讓你登入（新帳戶可在同一頁面註冊）、要求你批准該裝置，並顯示你的 MCP URL。你可隨時再次執行以進行更新。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 我的 AI 應用程式沒有顯示任何裝置。
<!-- id: no-device -->

在該電腦上執行 frely mcp start，並確保 CLI 所登入的 Frely 帳戶與你的 AI 應用程式相同。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 裝置顯示為離線。
<!-- id: offline -->

開啟電腦、連接互聯網，然後再次執行 frely mcp start。frely doctor 會顯示帳戶、安裝、版本、MCP 及服務的狀態；加入 -v 可查看詳細資料。

Console: [My Devices（我的裝置）](https://frely.cloud/user/device)

## 裝置存取權已過期。
<!-- id: expired -->

裝置的 MCP 存取權預設有效期為 90 天。執行 frely mcp start 再次批准（frely mcp start --days 加上 1 至 365 之間的數字可提早續期）。MCP URL 不會改變。你可以在 Frely 網站的 My Devices 下管理你的電腦。

Console: [My Devices](https://frely.cloud/user/device)

## 為什麼 AI 應用程式會要求讀取某些資料夾的權限？
<!-- id: permissions -->

指令會在沙盒中執行，沙盒會封鎖 ~/.ssh 和 ~/.aws 等憑證資料夾，而工具亦只會接觸你已註冊的工作區。當任務需要更多權限時，應用程式必須提出請求，由你在 Frely 網站上決定是否批准以及有效期多久，之後你亦可以撤銷。AI 應用程式無法自行批准自己的請求。

Related: [FrelyMCP 指南](https://frely.cloud/docs/frelymcp/)

## 如何從我的電腦移除 Frely？
<!-- id: uninstall -->

在本機終端機中執行 frely uninstall。它會先列出所有內容，然後在你輸入 yes 後才會移除。它會撤銷這部電腦的存取權，移除服務、已儲存的登入、裝置識別、設定及快取，最後移除 frely 程式。它會保留你帳戶中的 Providers 及 Agents。
