---
title: Como instalar num servidor sem browser?
description: Instale num servidor sem browser utilizando um comando de instalação de utilização única.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 3
---

# Como instalar num servidor sem browser?

Crie um comando de instalação de utilização única na Frely App, em My Devices (Os meus dispositivos), Add a computer (Adicionar um computador), Create install command (Criar comando de instalação), ou peça ao ChatGPT ou ao Claude (ligados ao FrelyMCP) para adicionar um computador. Cole o comando no servidor. O comando tem o seguinte aspeto: `curl -fsSL https://frely.cloud/start.sh | FRELY_INSTALL_TOKEN=fit_... sh`. O token funciona uma única vez, expira ao fim de 15 minutos e não é guardado. No Linux, execute também `sudo loginctl enable-linger $USER` para que o serviço permaneça online depois de terminar a sessão SSH.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
