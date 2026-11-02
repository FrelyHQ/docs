---
title: Как удалить Frely CLI?
description: Удалите Frely CLI и узнайте, что он сохраняет.
applies_to: any
updated: 2026-10-29
site: cli
category: Maintenance
order: 21
---

# Как удалить Frely CLI?

Выполните `frely uninstall` в локальном терминале (не через Device MCP). Сначала он показывает всё, что собирается удалить, и удаляет это после того, как вы введёте yes (для скриптов — `--yes`). Он отзывает доступ этого компьютера на стороне Frely, удаляет службу, сохранённые данные для входа, идентификатор устройства, настройки, кэши и установленные Frely Agent Skills, а в последнюю очередь — программу `frely`. Он сохраняет Frely App, ваших провайдеров и Agents в аккаунте, строки PATH, добавленные установщиком, Skills, которые вы отредактировали, и элементы маркетплейса.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (My Devices)](https://frely.cloud/app/)
