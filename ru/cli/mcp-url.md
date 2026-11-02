---
title: Что такое мой MCP URL и меняется ли он?
description: Адрес FrelyMCP и как его вывести.
applies_to: any
updated: 2026-11-02
site: cli
category: Connecting AI clients
order: 8
---

# Что такое мой MCP URL и меняется ли он?

Адрес FrelyMCP — https://mcp.frely.cloud/mcp — одинаков для всех компьютеров вашей учётной записи. Он никогда не меняется и не содержит секрета; токены OAuth хранятся в клиентах. Выполните `frely link on`, чтобы вывести URL, или `frely link status` (добавьте `--json` для скриптов), чтобы увидеть URL, рабочее пространство, срок действия авторизации и состояние сервиса.

Related: [Конечная точка FrelyMCP](https://mcp.frely.cloud/mcp) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
