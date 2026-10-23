---
title: Utilizar modelos e API keys
description: API keys, definições do cliente, utilização e o que fazer quando um pedido falha.
applies_to: any
updated: 2026-10-21
order: 3
---

# Utilizar modelos e API keys

## Como criar uma API key?
<!-- id: api-key -->

Abra a página da API key na sua consola e crie uma. Uma API key autoriza chamadas a modelos, não ações de gestão. Guarde-a na configuração protegida do seu cliente. Nunca a coloque no Git, em capturas de ecrã nem em conversas. Revogar uma API key impede utilizações posteriores.

Related: [Guias](https://frely.cloud/docs/)

Console: [As suas API keys](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## Qual é o URL base da API da Frely?
<!-- id: base-url -->

https://api.frely.cloud. Utilize sempre https: os pedidos por http simples são recusados, pelo que um cliente configurado com http://api.frely.cloud falhará. O mesmo endereço serve todos os protocolos, por exemplo https://api.frely.cloud/v1/chat/completions, /v1/responses, /v1/messages, /v1/embeddings e a lista de modelos em /v1/models. Alguns clientes querem o URL base com /v1 no fim (https://api.frely.cloud/v1) e acrescentam eles próprios o caminho do endpoint.

Related: [Utilizar o Frely no Claude](https://frely.cloud/docs/claude/) · [Utilizar o Frely no ChatGPT](https://frely.cloud/docs/chatgpt/)

Console: [Teste de API (mostra o URL base e um comando curl pronto)](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## Como autenticar pedidos de API?
<!-- id: authentication -->

Envie a sua API key como bearer token: Authorization: Bearer <a sua API key>. Adicione Content-Type: application/json aos pedidos com corpo. Um pedido sem uma API key válida recebe um 401. Uma API key autoriza apenas chamadas a modelos, não a gestão da conta.

Console: [As suas API keys](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## Qual é o aspeto de uma resposta de erro?
<!-- id: errors -->

Um corpo JSON com o formato {"error":{"message","type","param","code"}}. O tipo segue o estado HTTP: 401 authentication_error, 402 insufficient_quota, 403 permission_error, 404 not_found_error, 408 ou 504 timeout_error, 429 rate_limit_error, outros 4xx invalid_request_error, 503 service_unavailable_error, outros 5xx server_error. Cada resposta traz um cabeçalho x-request-id; guarde-o quando contactar o suporte. Uma falha recuperável pode incluir um cabeçalho Retry-After em segundos.

Related: [Contactar o suporte](https://frely.cloud/support/)

Console: [Histórico de pedidos](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## O que introduzir na minha app de IA ou no cliente?
<!-- id: client-settings -->

Três valores: o endereço público do serviço para o protocolo que escolheu (não um endereço interno), a sua própria API key e um nome de modelo público visível para a sua conta. As instruções da sua conta mostram os valores exatos.

Related: [Utilizar o Frely no Claude](https://frely.cloud/docs/claude/) · [Utilizar o Frely no ChatGPT](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## Como adicionar o Frely ao Claude ou ao ChatGPT?
<!-- id: connector -->

Adicione o Frely como conector, utilize o endereço do FrelyMCP como URL do servidor MCP, escolha OAuth, inicie sessão no Frely e aprove o acesso. Os guias passo a passo mostram cada ecrã.

Related: [Guia do FrelyMCP](https://frely.cloud/docs/frelymcp/) · [Utilizar o Frely no Claude](https://frely.cloud/docs/claude/) · [Utilizar o Frely no ChatGPT](https://frely.cloud/docs/chatgpt/)

## Um modelo aparece na lista, mas não consigo chamá-lo.
<!-- id: no-access -->

Estar listado não é autorização para chamar. Verifique o seu plano, o saldo, o limite e os termos do serviço, e pergunte a um administrador autorizado se estiver num Team. Rodar as API keys não contorna uma restrição.

API tools: `models.available`, `budget.get`, `credits.account`

## O meu pedido falhou ou expirou.
<!-- id: request-failed -->

Mantenha uma nota da hora, do protocolo, do nome do modelo e do ID do pedido, com os dados sensíveis removidos, e consulte o seu histórico de pedidos. Um timeout ou uma ligação interrompida não prova que nada foi utilizado, por isso verifique a utilização antes de repetir o pedido. Não envie credenciais, corpos de pedidos nem despejos de erros em bruto a ninguém.

Related: [Contactar o suporte](https://frely.cloud/support/)

Console: [Histórico de pedidos](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## Posso confiar no resultado dos modelos?
<!-- id: output-quality -->

O resultado dos modelos pode conter erros e a Frely não garante a exatidão. Reveja-o antes de o utilizar em contextos críticos para a segurança, jurídicos, financeiros, médicos, de segurança ou de produção.

Related: [Termos de Serviço](https://frely.cloud/terms/)
