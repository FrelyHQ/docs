---
title: How do I uninstall Frely CLI?
description: Remove Frely CLI and what it keeps.
applies_to: any
updated: 2026-10-29
site: cli
category: Maintenance
order: 21
---

# How do I uninstall Frely CLI?

Run `frely uninstall` in a local terminal (not through Device MCP). It lists everything first and removes it after you type yes (`--yes` for scripts). It revokes this computer's access on the Frely side, removes the service, saved login, device identity, settings, caches and the Agent Skills Frely installed, and last the `frely` program. It keeps the Frely App, your Providers and Agents in your account, the PATH lines the installer added, Skills you edited and marketplace items.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (My Devices)](https://frely.cloud/app/)
