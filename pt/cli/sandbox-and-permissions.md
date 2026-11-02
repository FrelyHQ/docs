---
title: Um comando falhou por causa da sandbox. O que posso fazer?
description: O que fazer quando a sandbox bloqueia um comando.
applies_to: any
updated: 2026-10-29
site: cli
category: Security and limits
order: 18
---

# Um comando falhou por causa da sandbox. O que posso fazer?

Na página de ligações da Frely, pode abrir mais opções para uma ligação: pastas de credenciais para leitura, pastas adicionais para escrita ou uma execução com tempo limitado sem a sandbox. No Windows, ou no Linux sem bubblewrap, socat e ripgrep, os comandos são recusados porque o computador não consegue aplicar a sandbox; instale essas ferramentas no Linux. `FRELY_SANDBOX=off` desativa a sandbox apenas no dispositivo; utilize-a só quando aceitar o risco.

Related: [Como a sandbox protege os seus dados](https://frely.cloud/connect/sandbox/) · [Página de ligações](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
