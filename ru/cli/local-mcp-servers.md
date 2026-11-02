---
title: Как разрешить удалённому ИИ использовать MCP-сервер, работающий на моём компьютере?
description: Разрешите удалённому ИИ использовать MCP-сервер, работающий на вашем компьютере.
applies_to: any
updated: 2026-11-02
site: cli
category: Using your computer
order: 11
---

# Как разрешить удалённому ИИ использовать MCP-сервер, работающий на моём компьютере?

Frely находит серверы, которые слушают только на loopback; список можно получить командой `frely link local list`. Другие серверы добавьте командой `frely link local add <name> --url http://127.0.0.1:<port>/mcp`, а для stdio-сервера — `frely link local add <name> -- <command> [args...]`. Каждый сервер остаётся скрытым от удалённых клиентов, пока вы не включите его — по одному — на странице подключений Frely. Включённые серверы работают вне командной песочницы от имени вашей учётной записи.

Related: [Страница подключений](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
