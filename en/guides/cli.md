---
title: Use Frely with Skill and CLI
description: Install the Frely CLI and its Skill so your AI agent can use your Frely account and control your own computers from a terminal.
applies_to: any
updated: 2026-10-28
order: 0
---

# Use Frely with Skill and CLI

The Frely CLI is the command line for your Frely account. Its Skill teaches an AI agent that has a shell (Claude Code, Codex, pi and similar) to use that command line: sign in, call your Frely account, install what you bought, and run commands on your own computers. This is the recommended way to use Frely from an AI agent. If your AI app cannot run commands, use [FrelyMCP](./frelymcp.md) instead.

## Before you start
<!-- id: before -->

You need a Frely account (sign in at frely.cloud) and an AI agent that can run shell commands on the computer where you install the CLI. The CLI runs on macOS, Linux and Windows.

## Install the CLI
<!-- id: install -->

Run the command for your system. It installs the `frely` program only.

```sh
curl -fsSL https://frely.cloud/install.sh | sh
```

On Windows, run this in PowerShell:

```sh
curl.exe -fsSLo "$env:TEMP\frely-install.ps1" https://frely.cloud/install.ps1; powershell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\frely-install.ps1"
```

## Sign in
<!-- id: login -->

Run the command below. It opens your browser so you can sign in or sign up and approve this computer. On a computer without a browser, run `frely login --email` and enter the code sent to your inbox.

```sh
frely login
```

## Install the Skill
<!-- id: skill -->

Install the `frely` Skill into your AI agent. Replace `<host>` with `claude-code`, `codex`, `pi`, `chatgpt` or `generic`. Restart the agent session afterwards so it finds the Skill.

```sh
frely skill install --host <host>
```

## Ask your agent
<!-- id: use -->

Tell your agent what you want in plain words, for example: "List my Frely computers", "Run the tests on my office computer", or "Install the Skill I bought on Frely". The agent runs `frely` commands for you. The first time it controls a computer, Frely asks you to approve on the Frely site with a short code. The agent cannot approve its own request.

## Make a computer controllable
<!-- id: device -->

To let your agent work on another computer, run this on that computer. It signs in, approves the computer and starts the background service. For a server without a browser, create a one-time install command in the Frely app under My Devices.

```sh
frely mcp start
```

## Commands your agent uses
<!-- id: commands -->

| Command | What it does |
| --- | --- |
| `frely devices` | Lists your computers and whether they are online. |
| `frely run <device> -- <command>` | Runs a command on a computer. |
| `frely read <device>:<path>` | Reads a file or folder on a computer. |
| `frely edit <device>:<path> --from <file>` | Writes a file on a computer. |
| `frely item install <username/name> --host <host>` | Installs a Skill, Prompt or Agent from Frely. |
| `frely api list` | Lists the account tools your agent can call. |
| `frely doctor` | Checks sign-in, installation and connection. |

## If something does not work
<!-- id: help -->

If the agent does not use Frely, restart the agent session and check that `frely skill install` finished. If `frely` is not found, open a new terminal and run it again. If a computer shows as offline, run `frely mcp start` on it. If a command asks for approval, open the link it prints and confirm on the Frely site. Other questions: support@frely.cloud.
