---
title: Devices and the Frely CLI
description: Answers about devices and the Frely CLI: installing the CLI, linking a computer to your account, keeping it working, and removing it.
applies_to: any
updated: 2026-10-26
order: 4
---

# Devices and the Frely CLI

## How do I install the Frely CLI and link my computer?
<!-- id: install -->

Run the install script: curl -fsSL https://frely.cloud/install.sh | sh. It installs frely and runs frely link on, which opens the browser to sign in (new accounts can register on the same page), asks you to approve the device and prints your MCP URL. Run it again at any time to update.

Related: [FrelyMCP guide](https://frely.cloud/docs/frelymcp/)

## My AI app shows no device.
<!-- id: no-device -->

Run frely link on on the computer, and make sure the CLI is signed in to the same Frely account as your AI app.

Related: [FrelyMCP guide](https://frely.cloud/docs/frelymcp/)

## A device shows as offline.
<!-- id: offline -->

Turn the computer on, connect it to the internet and run frely link on again. frely doctor shows the account, installation, version, MCP and service state; add -v for details.

Console: [My Devices](https://frely.cloud/user/device)

## Device access expired.
<!-- id: expired -->

Device MCP access lasts 90 days by default. Run frely link on to approve again (frely link on --days with a number from 1 to 365 renews early). The MCP URL does not change. You can manage your computers under My Devices on the Frely website.

Console: [My Devices](https://frely.cloud/user/device)

## Why does the AI app ask for permission to read some folders?
<!-- id: permissions -->

Commands run in a sandbox that blocks credential folders such as ~/.ssh and ~/.aws, and tools only touch workspaces you registered. When a task needs more, the app must ask, you decide on the Frely site and how long it lasts, and you can revoke it later. The AI app cannot approve its own request.

Related: [FrelyMCP guide](https://frely.cloud/docs/frelymcp/) · [How the sandbox protects your data](https://frely.cloud/connect/sandbox/)

## How do I remove Frely from my computer?
<!-- id: uninstall -->

Run frely uninstall in a local terminal. It lists everything first, then removes it after you type yes. It revokes this computer's access, removes the service, saved login, device identity, settings and caches, and finally the frely program. It keeps your Providers and Agents in your account.
