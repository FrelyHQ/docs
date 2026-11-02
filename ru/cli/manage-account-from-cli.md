---
title: Как управлять учётной записью Frely (API-ключи, кредиты, тарифы, заказы) из терминала или с помощью ИИ?
description: Управляйте API-ключами, кредитами, тарифами и заказами с помощью frely api.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# Как управлять учётной записью Frely (API-ключи, кредиты, тарифы, заказы) из терминала или с помощью ИИ?

Используйте `frely api list`, чтобы посмотреть операции, `frely api describe <name>`, чтобы изучить одну из них, и `frely api call <name> --json '{...}'`, чтобы выполнить её. Примеры: `frely api call agents.list`, `frely api call usage.summary`. ИИ-клиенты, подключённые к FrelyMCP, обращаются к тем же операциям через инструменты `frely_list` и `frely_call`. Первая команда `frely api` открывает браузер для отдельной OAuth-авторизации. Операции доступны по адресу https://frely.cloud/mcp.

Related: [frely api doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/api.md) · [API-эндпоинт учётной записи Frely](https://frely.cloud/mcp) · [Frely App (My Devices — «Мои устройства»)](https://frely.cloud/app/)
