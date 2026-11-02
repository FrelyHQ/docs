---
title: Как долго действует доступ к устройству и как его продлить?
description: Как долго действует доступ к устройству и как его продлить.
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 16
---

# Как долго действует доступ к устройству и как его продлить?

MCP-доступ к устройству по умолчанию действует 90 дней. Чтобы продлить его до истечения срока или задать другую длительность, выполните `frely link on --days 1..365`. Когда срок действия истекает, запросы и задачи в очереди прекращаются (уже выполненные записи не отменяются), а `frely link on` снова запрашивает подтверждение. URL при этом никогда не меняется. Управляйте своими компьютерами на сайте Frely в разделе My Devices («Мои устройства»).

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [Документация по MCP устройства](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
