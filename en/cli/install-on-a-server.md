---
title: How do I install on a server with no browser?
description: Install on a server with no browser using a one-time install command.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 3
---

# How do I install on a server with no browser?

Create a one-time install command in the Frely App under My Devices, Add a computer, Create install command, or ask ChatGPT or Claude (connected to FrelyMCP) to add a computer. Paste the command on the server. It looks like `curl -fsSL https://frely.cloud/start.sh | FRELY_INSTALL_TOKEN=fit_... sh`. The token works once, expires after 15 minutes and is not saved. On Linux also run `sudo loginctl enable-linger $USER` so the service stays online after you log out of SSH.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
