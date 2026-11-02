---
title: Что-то не работает. Как это диагностировать?
description: Диагностируйте проблемы входа, установки и сервиса с помощью frely doctor.
applies_to: any
updated: 2026-11-02
site: cli
category: Maintenance
order: 19
---

# Что-то не работает. Как это диагностировать?

Запустите `frely doctor`, чтобы проверить вход, установку, наличие последней версии, состояние MCP и сервиса. Добавьте `-v`, чтобы получить пути к конфигурации, срок действия авторизации, последний heartbeat и обезличенные ошибки. Если устройство отображается как офлайн, выполните `frely link on` — эту команду безопасно запускать повторно. Если проблема не исчезла, задайте вопрос в Discord или создайте issue на GitHub, приложив вывод `frely doctor -v`.

Related: [Документация по обслуживанию сервиса](https://github.com/FrelyHQ/frely-cli/blob/main/docs/service-maintenance.md) · [Discord](https://discord.gg/hugMuSveb) · [Issues на GitHub](https://github.com/FrelyHQ/frely-cli/issues)
