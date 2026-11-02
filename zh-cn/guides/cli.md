---
title: 通过 Skill 和 CLI 使用 Frely
description: 安装 Frely CLI 及其 Skill，让您的 AI Agent 能够使用您的 Frely 账户，并从终端控制您自己的电脑。
applies_to: any
updated: 2026-11-02
order: 0
---

# 通过 Skill 和 CLI 使用 Frely

Frely CLI 是您的 Frely 账户的命令行工具。它的 Skill 会教会拥有 shell 的 AI Agent（Claude Code、Codex、pi 及类似工具）使用该命令行：登录、调用您的 Frely 账户、安装您购买的内容，并在您自己的电脑上运行命令。这是通过 AI Agent 使用 Frely 的推荐方式。如果您的 AI 应用无法运行命令，请改用 FrelyMCP 指南（替代方案）。

## 开始之前
<!-- id: before -->

您需要一个 Frely 账户（在 frely.cloud 登录），以及一个能在您安装 CLI 的电脑上运行 shell 命令的 AI Agent。CLI 可在 macOS、Linux 和 Windows 上运行。

## 安装 CLI
<!-- id: install -->

运行适合您系统的命令。它只安装 `frely` 程序。

```sh
curl -fsSL https://frely.cloud/install.sh | sh
```

在 Windows 上，请在 PowerShell 中运行：

```sh
curl.exe -fsSLo "$env:TEMP\frely-install.ps1" https://frely.cloud/install.ps1; powershell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\frely-install.ps1"
```

## 登录
<!-- id: login -->

运行下面的命令。它会打开您的浏览器，以便您登录或注册并批准这台电脑。在没有浏览器的电脑上，请运行 `frely login --email`，然后输入发送到您邮箱的验证码。

```sh
frely login
```

## 安装 Skill
<!-- id: skill -->

将 `frely` Skill 安装到您的 AI Agent 中。将 `<host>` 替换为 `claude-code`、`codex`、`pi`、`chatgpt` 或 `generic`。之后请重启 Agent 会话，以便它找到该 Skill。

```sh
frely skill install --host <host>
```

## 向您的 Agent 提出请求
<!-- id: use -->

用平常的语言告诉您的 Agent 您想做什么，例如：“列出我的 Frely 电脑”“在我的办公电脑上运行测试”，或“安装我在 Frely 上购买的 Skill”。Agent 会为您运行 `frely` 命令。当它第一次控制某台电脑时，Frely 会要求您在 Frely 网站上使用一个简短代码进行批准。Agent 无法批准自己的请求。

## 让一台电脑可被控制
<!-- id: device -->

要让您的 Agent 在另一台电脑上工作，请在那台电脑上运行此命令。它会登录、批准该电脑并启动后台服务。对于没有浏览器的服务器，请在 Frely App 的 My Devices（我的设备）页面中创建一次性安装命令。

```sh
frely link on
```

## 您的 Agent 会用到的命令
<!-- id: commands -->

| 命令 | 作用 |
| --- | --- |
| `frely devices` | 列出您的电脑以及它们是否在线。 |
| `frely run <device> -- <command>` | 在一台电脑上运行命令。 |
| `frely read <device>:<path>` | 读取一台电脑上的文件或文件夹。 |
| `frely edit <device>:<path> --from <file>` | 在一台电脑上写入文件。 |
| `frely item install <username/name> --host <host>` | 从 Frely 安装 Skill、提示词或 Agent。 |
| `frely api list` | 列出您的 Agent 可以调用的账户工具。 |
| `frely doctor` | 检查登录、安装和连接状态。 |

## 如果无法正常工作
<!-- id: help -->

如果 Agent 没有使用 Frely，请重启 Agent 会话，并检查 `frely skill install` 是否已完成。如果找不到 `frely` 命令，请打开一个新终端再运行一次。如果某台电脑显示为离线，请在那台电脑上运行 `frely link on`。如果某个命令要求批准，请打开它打印的链接，并在 Frely 网站上确认。其他问题：support@frely.cloud。
