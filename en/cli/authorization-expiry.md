---
title: How long does device access last, and how do I renew it?
description: How long device access lasts and how to renew it.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 16
---

# How long does device access last, and how do I renew it?

Device MCP access lasts 90 days by default. Run `frely mcp start --days 1..365` to renew before it expires or choose another length. When it expires, requests and queued work stop (finished writes are not undone) and `frely mcp start` asks for approval again. The URL never changes. Manage your computers on the Frely website under My Devices.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [Device MCP doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
