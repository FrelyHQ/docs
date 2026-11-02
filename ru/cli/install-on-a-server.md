---
title: Как установить на сервере без браузера?
description: Установка на сервере без браузера с помощью одноразовой команды установки.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 3
---

# Как установить на сервере без браузера?

Создайте одноразовую команду установки в Frely App в разделе My Devices («Мои устройства») → Add a computer («Добавить компьютер») → Create install command («Создать команду установки») или попросите ChatGPT или Claude (подключённые к FrelyMCP) добавить компьютер. Вставьте команду на сервере. Она выглядит так: `curl -fsSL https://frely.cloud/start.sh | FRELY_INSTALL_TOKEN=fit_... sh`. Токен срабатывает один раз, истекает через 15 минут и не сохраняется. На Linux также выполните `sudo loginctl enable-linger $USER`, чтобы сервис оставался онлайн после выхода из SSH.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
