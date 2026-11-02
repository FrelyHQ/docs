---
title: ¿Cómo administro mi cuenta de Frely (API keys, Credit, planes, órdenes) desde la terminal o una IA?
description: Administra API keys, Credit, planes y órdenes con frely api.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# ¿Cómo administro mi cuenta de Frely (API keys, Credit, planes, órdenes) desde la terminal o una IA?

Usa `frely api list` para ver las operaciones, `frely api describe <name>` para inspeccionar una y `frely api call <name> --json '{...}'` para ejecutarla. Ejemplos: `frely api call agents.list`, `frely api call usage.summary`. Los clientes de IA conectados a FrelyMCP acceden a las mismas operaciones mediante las herramientas `frely_list` y `frely_call`. El primer comando `frely api` abre un navegador para una autorización OAuth separada. Las operaciones se sirven en https://frely.cloud/mcp.

Related: [frely api doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/api.md) · [Endpoint de API de la cuenta de Frely](https://frely.cloud/mcp) · [Frely App (My Devices)](https://frely.cloud/app/)
