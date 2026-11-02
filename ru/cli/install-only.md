---
title: Как установить только программу, без службы устройства?
description: Установите программу frely без службы устройства.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 4
---

# Как установить только программу, без службы устройства?

Используйте `https://frely.cloud/install.sh` (macOS и Linux) или `https://frely.cloud/install.ps1` (Windows). Они устанавливают только `frely`, что подходит для скриптов, Skills и агентов. Или выполните `npm install --global --ignore-scripts frely-cli@latest` (Node.js 22 или новее). Установщики проверяют SHA-256 исполняемого файла и сначала скачивают его из GitHub Releases, а при неудаче переключаются на npmmirror и npmjs.

Related: [install.sh](https://frely.cloud/install.sh) · [install.ps1](https://frely.cloud/install.ps1) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
