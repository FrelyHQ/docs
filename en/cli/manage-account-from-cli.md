---
title: How do I manage my Frely account (API keys, credits, plans, orders) from the terminal or an AI?
description: Manage API keys, credits, plans and orders with frely api.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# How do I manage my Frely account (API keys, credits, plans, orders) from the terminal or an AI?

Use `frely api list` to see operations, `frely api describe <name>` to inspect one, and `frely api call <name> --json '{...}'` to run it. Examples: `frely api call agents.list`, `frely api call usage.summary`. AI clients connected to FrelyMCP reach the same operations through the `frely_list` and `frely_call` tools. The first `frely api` command opens a browser for separate OAuth authorization. The operations are served at https://frely.cloud/mcp.

Related: [frely api doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/api.md) · [Frely account API endpoint](https://frely.cloud/mcp) · [Frely App (My Devices)](https://frely.cloud/app/)
