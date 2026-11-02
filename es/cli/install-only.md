---
title: ¿Cómo instalo solo el programa, sin el servicio del dispositivo?
description: Instala el programa frely sin el servicio del dispositivo.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 4
---

# ¿Cómo instalo solo el programa, sin el servicio del dispositivo?

Usa `https://frely.cloud/install.sh` (macOS y Linux) o `https://frely.cloud/install.ps1` (Windows). Solo instalan `frely`, lo cual resulta ideal para scripts, Skills y agentes. O ejecuta `npm install --global --ignore-scripts frely-cli@latest` (Node.js 22 o más reciente). Los instaladores verifican el SHA-256 del ejecutable y descargan primero desde GitHub Releases y, si falla, recurren a npmmirror y npmjs.

Related: [install.sh](https://frely.cloud/install.sh) · [install.ps1](https://frely.cloud/install.ps1) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
