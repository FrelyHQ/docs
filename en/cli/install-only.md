---
title: How do I install only the program, without the device service?
description: Install the frely program without the device service.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 4
---

# How do I install only the program, without the device service?

Use `https://frely.cloud/install.sh` (macOS and Linux) or `https://frely.cloud/install.ps1` (Windows). They only install `frely`, which suits scripts, Skills and agents. Or run `npm install --global --ignore-scripts frely-cli@latest` (Node.js 22 or newer). The installers check the SHA-256 of the executable and download from GitHub Releases first, then fall back to npmmirror and npmjs.

Related: [install.sh](https://frely.cloud/install.sh) · [install.ps1](https://frely.cloud/install.ps1) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
