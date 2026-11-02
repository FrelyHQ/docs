---
title: 透過 Skill 與 CLI 使用 Frely
description: 安裝 Frely CLI 及其 Skill，讓你的 AI 代理可以使用你的 Frely 帳戶，並從終端機控制你自己的電腦。
applies_to: any
updated: 2026-11-02
order: 0
---

# 透過 Skill 與 CLI 使用 Frely

Frely CLI 是你 Frely 帳戶的命令列。它的 Skill 會教導具備 shell 的 AI 代理（如 Claude Code、Codex、pi 等）使用該命令列：登入、呼叫你的 Frely 帳戶、安裝你購買的項目，並在你自己的電腦上執行命令。這是透過 AI 代理使用 Frely 的建議方式。如果你的 AI 應用程式無法執行命令，請改用 FrelyMCP 指南（另一種做法）。

## 開始之前
<!-- id: before -->

你需要一個 Frely 帳戶（在 frely.cloud 登入），以及一個可以在你安裝 CLI 的電腦上執行 shell 命令的 AI 代理。CLI 可在 macOS、Linux 和 Windows 上執行。

## 安裝 CLI
<!-- id: install -->

執行適用於你系統的命令。它只會安裝 `frely` 程式。

```sh
curl -fsSL https://frely.cloud/install.sh | sh
```

在 Windows 上，請在 PowerShell 中執行：

```sh
curl.exe -fsSLo "$env:TEMP\frely-install.ps1" https://frely.cloud/install.ps1; powershell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\frely-install.ps1"
```

## 登入
<!-- id: login -->

執行下面的命令。它會開啟你的瀏覽器，讓你登入或註冊，並批准這部電腦。在沒有瀏覽器的電腦上，請執行 `frely login --email`，然後輸入傳送到你收件箱的代碼。

```sh
frely login
```

## 安裝 Skill
<!-- id: skill -->

將 `frely` Skill 安裝到你的 AI 代理。把 `<host>` 替換為 `claude-code`、`codex`、`pi`、`chatgpt` 或 `generic`。之後請重新啟動代理工作階段，讓它找到該 Skill。

```sh
frely skill install --host <host>
```

## 向你的代理提出要求
<!-- id: use -->

用日常用語告訴你的代理你想做甚麼，例如：「列出我的 Frely 電腦」、「在我的辦公室電腦上執行測試」，或「安裝我在 Frely 購買的 Skill」。代理會替你執行 `frely` 命令。它第一次控制一部電腦時，Frely 會要求你在 Frely 網站上用一個短代碼進行批准。代理不能批准自己的請求。

## 讓電腦可被控制
<!-- id: device -->

要讓你的代理在另一部電腦上工作，請在該電腦上執行此命令。它會登入、批准該電腦並啟動背景服務。對於沒有瀏覽器的伺服器，請在 Frely App 的 My Devices（我的裝置）下建立一次性安裝命令。

```sh
frely link on
```

## 你的代理使用的命令
<!-- id: commands -->

| 命令 | 作用 |
| --- | --- |
| `frely devices` | 列出你的電腦以及它們是否在線。 |
| `frely run <device> -- <command>` | 在一部電腦上執行命令。 |
| `frely read <device>:<path>` | 讀取一部電腦上的檔案或資料夾。 |
| `frely edit <device>:<path> --from <file>` | 在一部電腦上寫入檔案。 |
| `frely item install <username/name> --host <host>` | 從 Frely 安裝 Skill、Prompt 或 Agent。 |
| `frely api list` | 列出你的代理可以呼叫的帳戶工具。 |
| `frely doctor` | 檢查登入、安裝和連線。 |

## 如果無法正常運作
<!-- id: help -->

如果代理沒有使用 Frely，請重新啟動代理工作階段，並確認 `frely skill install` 已完成。如果找不到 `frely`，請開啟新的終端機再執行一次。如果一部電腦顯示為離線，請在該電腦上執行 `frely link on`。如果命令要求批准，請開啟它顯示的連結，並在 Frely 網站上確認。其他問題：support@frely.cloud。
