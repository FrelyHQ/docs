---
title: Devices and the Frely CLI
description: Install the Frely CLI, link a computer, keep it working, and remove it.
applies_to: any
updated: 2026-10-21
---

# Devices and the Frely CLI

## How do I install the Frely CLI and link my computer?

Run the install script:

```sh
curl -fsSL https://frely.cloud/install.sh | sh
```

The script installs `frely` and runs `frely mcp start`. That command opens the browser to sign in (new accounts can register on the same page), asks you to approve the device and prints your MCP URL. Run the script again at any time to update.

See the [FrelyMCP guide](https://frely.cloud/docs/frelymcp/).

## My AI app shows no device.

Run `frely mcp start` on the computer. Make sure the CLI is signed in to the same Frely account as your AI app.

## A device shows as offline.

Turn the computer on, connect it to the internet and run `frely mcp start` again. `frely doctor` shows the account, installation, version, MCP and service state; add `-v` for details. Manage computers under [My Devices](https://frely.cloud/user/device).

## Device access expired.

Device MCP access lasts 90 days by default. Run `frely mcp start` to approve again; `frely mcp start --days <1-365>` renews early. The MCP URL does not change.

## Why does the AI app ask for permission to read some folders?

Commands run in a sandbox that blocks credential folders such as `~/.ssh` and `~/.aws`, and tools only touch workspaces you registered. When a task needs more, the app asks. You decide on the Frely site and set how long the permission lasts. You can revoke it later. The AI app cannot approve its own request.

## How do I remove Frely from my computer?

Run `frely uninstall` in a local terminal. The command lists everything it will remove, then removes it after you type `yes`. It revokes this computer's access, removes the service, saved login, device identity, settings and caches, and finally the `frely` program. Your Providers and Agents stay in your account.
