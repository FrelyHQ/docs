---
title: 如何安裝 Frely Agent、提示詞或 Skill？
description: 從終端機安裝並執行 Frely Agent、提示詞或 Skill。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 13
---

# 如何安裝 Frely Agent、提示詞或 Skill？

Agent：`frely item install <username/name> --host claude-code --scope global`（主機：chatgpt、codex、claude-code、pi、generic）。使用 `printf '%s' 'Your task' | frely agent run <username/name> --input-stdin --json` 執行。市集項目：`frely item install <username/skill-name> --host claude-code`。你可以在 Creator 個人檔案頁面（`frely.cloud/@<username>`）或 Creator 傳給你的分享連結中找到名稱；Creator 的項目不會列在公開的 Store，Store 只會顯示 Frely 精選的產品。首次呼叫會開啟瀏覽器以進行授權，而付費項目只有在你帳戶持有通行證時才會安裝；否則指令會說明如何購買。Frely 絕不會覆寫不是由它安裝的資料夾，亦不會覆寫你曾編輯過的檔案。

Related: [Frely App（My Devices，我的裝置）](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
