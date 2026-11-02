---
title: Quanto tempo dura o acesso ao dispositivo e como o renovar?
description: Quanto tempo dura o acesso ao dispositivo e como o renovar.
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 16
---

# Quanto tempo dura o acesso ao dispositivo e como o renovar?

O acesso Device MCP dura 90 dias por predefinição. Execute `frely link on --days 1..365` para o renovar antes de expirar ou escolher outra duração. Quando expira, os pedidos e o trabalho em fila param (as escritas concluídas não são revertidas) e o `frely link on` volta a pedir aprovação. O URL nunca é alterado. Faça a gestão dos seus computadores no site da Frely, na secção My Devices (Os Meus Dispositivos).

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [Documento Device MCP](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
