---
title: 如何為開放源碼 Skill 加上付費功能
description: 讓你的 Skill 繼續開放源碼兼免費，並把進階部分放在 Frely 的付費通行證之後。你的 repository 維持原樣，只需向你的 AI 發出一則訊息，發佈就完成了。
date: 2026-10-24
draft: true
applies_to: any
updated: 2026-10-24
---

你寫了一個 Skill，放上 GitHub，有人在使用。當中有些部分所花的心血遠比其餘部分多：腳本、範本、深入的參考文件。你不想隱藏整個 Skill，但也不想把所有東西都交出去。

Frely 為你提供一條中間路線。**開放源碼的部分維持免費公開，進階部分則放在付費通行證之後。**你的 repository 不會有任何改動。

## 運作方式

你把 Skill 發佈到 Frely，並標明哪些檔案屬於付費內容：

- **`SKILL.md` 永遠免費**，讓買家清楚知道自己會買到甚麼。
- **付費檔案**可以是個別檔案或整個資料夾，例如 `scripts/` 或 `reference/advanced.md`。
- **你為每種通行證時長自訂價格**：可選 1 小時、8 小時、24 小時、7 日、30 日或永久。提供其中一種或全部六種都可以。

買家用一個指令就能安裝：`frely item install <item-id>`。它適用於 ChatGPT、Codex、Claude Code 及其他使用 Skills 的工具。通行證有效期間，付費檔案會隨 Skill 一併取得。通行證過期後，安裝便會停止取得付費部分。`forever` 通行證讓買家永久保留一份本地副本，並包含日後的更新。

## 一則訊息即可發佈

你不必閱讀任何文件。只要把下面這段話發給你已在使用的 AI（它需要能在你的電腦上執行指令，例如桌面應用程式、Codex 或 Claude Code）：

`Follow https://frely.cloud/prompt/creator.md and publish this Skill: <your repository URL>`

AI 會安裝 Frely CLI，讀取你的 repository，然後只問你三條問題：

1. 哪些檔案屬於付費？預設會建議腳本、範本及深入的參考檔案。
2. 每種通行證時長的價格是多少？
3. 你想不想提供 `forever` 通行證？

其餘事情它會全部代勞，並把 item id 和安裝指令交給你。

## 發佈前須知

- **付費部分對買了的人是可見的。**Skill 會安裝在買家自己的裝置上，所以免費部分人人可見，付費部分則凡持有通行證的人皆可見。如果內容必須保持私密，請改為發佈成 hosted Agent，用戶只會取得結果，永遠不會接觸到 prompt。
- **檢查授權條款。**如果你的 repository 的授權條款禁止再分發，就不要發佈。來源 URL 會顯示為出處標示，而 Frely 並不核實 repository 的擁有權。
- **大小限制。**壓縮後的 Skill 最多 256 KiB、64 個檔案、每個檔案 64 KiB，全部合計 128 KiB。
- **你收到的是 Frely Credit，不是現金。**使用費會先保留 30 日，然後撥入你的 Frely Credit，可以在 Frely 上使用，但不能提現或轉讓。Frely 會從每筆交易收取平台費，金額會在你設定價格的頁面上顯示。
- **免費帳戶可以發佈一個 item。**

## 更新或下架

要推出新版本，用同一個 slug 再次發佈即可。要下架，就把它標記為未發佈。你的 GitHub repository 永遠不會被改動，所以你的開放源碼版本會一直留在原處。

[在 Frely 上發佈你的 Skill](https://frely.cloud/prompt/creator.md)
