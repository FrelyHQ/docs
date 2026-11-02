---
title: Como gerir a minha conta Frely (chaves de API, créditos, planos e encomendas) a partir do terminal ou de uma IA?
description: Gira chaves de API, créditos, planos e encomendas com frely api.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# Como gerir a minha conta Frely (chaves de API, créditos, planos e encomendas) a partir do terminal ou de uma IA?

Utilize `frely api list` para ver as operações, `frely api describe <name>` para inspecionar uma operação e `frely api call <name> --json '{...}'` para a executar. Exemplos: `frely api call agents.list`, `frely api call usage.summary`. Os clientes de IA ligados ao FrelyMCP acedem às mesmas operações através das ferramentas `frely_list` e `frely_call`. O primeiro comando `frely api` abre um navegador para uma autorização OAuth separada. As operações são disponibilizadas em https://frely.cloud/mcp.

Related: [frely api doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/api.md) · [Endpoint da API da conta Frely](https://frely.cloud/mcp) · [Frely App (My Devices)](https://frely.cloud/app/)
