---
title: Como instalar apenas o programa, sem o serviço de dispositivo?
description: Instale o programa frely sem o serviço de dispositivo.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 4
---

# Como instalar apenas o programa, sem o serviço de dispositivo?

Utilize `https://frely.cloud/install.sh` (macOS e Linux) ou `https://frely.cloud/install.ps1` (Windows). Estes instalam apenas o `frely`, o que é adequado para scripts, Skills e agentes. Ou execute `npm install --global --ignore-scripts frely-cli@latest` (Node.js 22 ou superior). Os instaladores verificam o SHA-256 do executável e descarregam primeiro a partir de GitHub Releases, recorrendo depois ao npmmirror e ao npmjs.

Related: [install.sh](https://frely.cloud/install.sh) · [install.ps1](https://frely.cloud/install.ps1) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
