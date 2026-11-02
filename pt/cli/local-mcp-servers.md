---
title: Como posso permitir que uma IA remota utilize um servidor MCP que corre no meu computador?
description: Permita que uma IA remota utilize um servidor MCP que corre no seu computador.
applies_to: any
updated: 2026-11-02
site: cli
category: Using your computer
order: 11
---

# Como posso permitir que uma IA remota utilize um servidor MCP que corre no meu computador?

A Frely deteta servidores que escutam apenas no loopback; liste-os com `frely link local list`. Adicione outros com `frely link local add <name> --url http://127.0.0.1:<port>/mcp` ou, no caso de um servidor stdio, com `frely link local add <name> -- <command> [args...]`. Cada servidor permanece oculto para os clientes remotos até que o ative, um a um, na página de ligações da Frely. Os servidores ativados são executados fora da sandbox de comandos, com a sua conta de utilizador.

Related: [Página de ligações](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
