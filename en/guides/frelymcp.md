---
title: FrelyMCP (alternative)
description: Use FrelyMCP when your AI app cannot run commands: it gives Claude, ChatGPT and other MCP clients access to your computers, cloud tools, models and agents.
applies_to: any
updated: 2026-10-28
order: 3
---

# FrelyMCP (alternative)

The recommended way to use Frely from an AI agent is the Use Frely with Skill and CLI guide. Choose FrelyMCP instead when your AI app cannot run shell commands, for example ChatGPT or Claude in the browser. It connects with a URL and OAuth.

FrelyMCP is the MCP server for your Frely account. Connect it once and your AI app can reach your own computers, the cloud tools you turned on, and your models and AI agents. You sign in with OAuth; no API key is pasted into the app.

## What it does
<!-- id: what -->

Local: list the computers linked to your account, read files in a workspace, edit files, run commands and fetch web pages on them. Reading and writing local files is only one part of it. Cloud: use the cloud MCP servers you turned on for this connection, with no device needed. Models and agents: list the models and agents you can use, turn one on or off for MCP, and ask it from inside your AI app. You can connect your own agent, and it works like a model. Usage is billed to your Frely account.

## Before you start
<!-- id: before -->

You need a Frely account (sign in at frely.cloud). To use the device tools, install the Frely CLI on the computer and link it, as described in the Use Frely with Skill and CLI guide. Models, agents and cloud tools work without a device.

```sh
curl -fsSL https://frely.cloud/install.sh | sh
frely login
frely mcp start
```

## Connect your AI app
<!-- id: connect -->

Use this address as the MCP server URL and choose OAuth. Do not add authentication headers.

```sh
https://mcp.frely.cloud/mcp
```

## Claude
<!-- id: claude -->

In Claude, open Settings, go to Connectors, choose Add custom connector, enter FrelyMCP as the name and paste the address above. Select Connect, sign in to Frely and approve access. For Claude Code run: claude mcp add --transport http frelymcp https://mcp.frely.cloud/mcp then /mcp to sign in.

## ChatGPT
<!-- id: chatgpt -->

In ChatGPT, open Settings and go to the section for apps and connectors. Create a new connector, paste the address above, choose OAuth and sign in to Frely. Custom connectors can require developer mode, depending on your ChatGPT plan.

## Codex
<!-- id: codex -->

Run: codex mcp add frelymcp --url https://mcp.frely.cloud/mcp. Codex starts the OAuth sign-in: sign in to Frely and approve access. Do not add a token or an authorization header.

## Install with a config file
<!-- id: config -->

Some AI agents, such as WorkBuddy, add MCP servers through a config file instead of a connector screen. Add this entry to the mcpServers object in the agent's MCP config file (keep any servers already there). Then restart the agent and finish the Frely sign-in and approval when it asks. If your agent does not accept a url field, use its remote or HTTP server option with the same address.

```json
{
  "mcpServers": {
    "frely": {
      "url": "https://mcp.frely.cloud/mcp"
    }
  }
}
```

## Tools
<!-- id: tools -->

The tools your AI app can call:

| Tool | What it does |
| --- | --- |
| `list_devices` | Shows your linked computers, their workspaces and whether they are online. Call it first. |
| `read` | Reads files and folders inside a workspace. |
| `edit_file` | Creates or changes a file inside a workspace. |
| `process` | Runs a command on the device and returns its output. |
| `web_fetch` | Fetches a web page from the device. |
| `request_permission / confirm_permission` | Asks you to approve access outside the default sandbox, for example ~/.ssh. You approve on the Frely site with a code. |
| `models_list / models_set / models_invoke` | Lists your models and agents, turns one on or off for MCP, and asks it. Each enabled one also appears as <model>__invoke. |
| `<mcp>__<tool>` | Tools of the cloud MCP servers you turned on for this connection. They run in the cloud and need no device. |
| `local_mcp_list / local_mcp_call` | Reaches MCP servers running on a device, when the device exposes any. |
| `frely_list / frely_call` | Manages your Frely account: API keys, credits, plans, orders and Creator items. They run in the cloud and need no device. A new connection may only read until you allow more on the Frely site; actions that move money or change credentials need your approval each time, and payments open a payment page. |
| `store` | Shows the Frely Store (subscriptions, plans, Credit, extensions, official Skills, services) as a card, or a table in apps without cards. Each Buy link opens that product on the Frely site, where you pay. Items that creators publish are on their profile pages, not in the Store. |

## Safety and approval
<!-- id: safety -->

Commands run in a sandbox on your computer that blocks credential folders such as ~/.ssh and ~/.aws, and tools only touch the workspaces you registered. When a task needs more, the AI app must ask with request_permission. You decide on the Frely site, choose how long it lasts, and can revoke it later. The AI app cannot approve its own request.

## Your data
<!-- id: data -->

Device tool calls (read, edit_file, process, web_fetch and local MCP) are relayed to your own computer; FrelyMCP keeps only the OAuth sign-in records for them. Calls to models and agents go through the Frely gateway. Request Capture may keep their request and response content for a limited period, and the model provider you choose receives the request data it needs to answer. Details are in the Privacy Policy, sections 4 and 6. Frely Credit cannot be transferred; model calls are only metered against your own Credit.

## If something does not work
<!-- id: help -->

If list_devices shows no device, run frely mcp start on the computer and check that the CLI is signed in to the same Frely account. If a device is offline, turn the computer on and run the same command. Other questions: support@frely.cloud.
