---
title: Dispositivos e a Frely CLI
description: Instalar a CLI, associar um computador, mantê-lo a funcionar e removê-lo.
applies_to: any
updated: 2026-10-21
order: 4
---

# Dispositivos e a Frely CLI

## Como instalo a Frely CLI e asocio o meu computador?
<!-- id: install -->

Execute o script de instalação: curl -fsSL https://frely.cloud/install.sh | sh. O script instala o frely e executa frely mcp start, que abre o navegador para iniciar sessão (as novas contas podem registar-se na mesma página), pede-lhe que autorize o dispositivo e mostra o seu URL MCP. Volte a executá-lo em qualquer altura para atualizar.

Related: [Guia do FrelyMCP](https://frely.cloud/docs/frelymcp/)

## A minha aplicação de IA não mostra nenhum dispositivo.
<!-- id: no-device -->

Execute frely mcp start no computador e certifique-se de que a CLI tem sessão iniciada na mesma conta Frely que a sua aplicação de IA.

Related: [Guia do FrelyMCP](https://frely.cloud/docs/frelymcp/)

## Um dispositivo aparece como offline.
<!-- id: offline -->

Ligue o computador, ligue-o à internet e execute frely mcp start novamente. O frely doctor mostra o estado da conta, da instalação, da versão, do MCP e do serviço; acrescente -v para mais detalhes.

Console: [My Devices (Os meus dispositivos)](https://frely.cloud/user/device)

## O acesso do dispositivo expirou.
<!-- id: expired -->

O acesso MCP do dispositivo dura 90 dias por predefinição. Execute frely mcp start para autorizar novamente (frely mcp start --days com um número de 1 a 365 renova antecipadamente). O URL MCP não muda. Pode gerir os seus computadores em My Devices no site da Frely.

Console: [My Devices](https://frely.cloud/user/device)

## Porque é que a aplicação de IA pede permissão para ler algumas pastas?
<!-- id: permissions -->

Os comandos são executados numa sandbox que bloqueia pastas de credenciais como ~/.ssh e ~/.aws, e as ferramentas só acedem aos espaços de trabalho que registou. Quando uma tarefa precisa de mais, a aplicação tem de pedir, você decide no site da Frely e durante quanto tempo a permissão vale, e pode revogá-la mais tarde. A aplicação de IA não pode autorizar o seu próprio pedido.

Related: [Guia do FrelyMCP](https://frely.cloud/docs/frelymcp/)

## Como removo a Frely do meu computador?
<!-- id: uninstall -->

Execute frely uninstall num terminal local. Começa por listar tudo e remove-o depois de escrever yes. Revoga o acesso deste computador e remove o serviço, o início de sessão guardado, a identidade do dispositivo, as definições e as caches e, por fim, o programa frely. Mantém os seus Providers e Agents na sua conta.
