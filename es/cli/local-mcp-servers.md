---
title: ¿Cómo permito que una IA remota use un servidor MCP que se ejecuta en mi computadora?
description: Permite que una IA remota use un servidor MCP que se ejecuta en tu computadora.
applies_to: any
updated: 2026-11-02
site: cli
category: Using your computer
order: 11
---

# ¿Cómo permito que una IA remota use un servidor MCP que se ejecuta en mi computadora?

Frely detecta los servidores que escuchan solo en loopback; enumera los que encuentre con `frely link local list`. Agrega otros con `frely link local add <name> --url http://127.0.0.1:<port>/mcp`, o, para un servidor stdio, con `frely link local add <name> -- <command> [args...]`. Cada servidor permanece oculto para los clientes remotos hasta que lo actives, uno por uno, en la página de conexiones de Frely. Los servidores habilitados se ejecutan fuera del sandbox de comandos con tu cuenta de usuario.

Related: [Página de conexiones](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
