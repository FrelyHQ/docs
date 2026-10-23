---
title: FrelyMCP
description: O FrelyMCP dá ao Claude, ao ChatGPT e a outros clientes MCP acesso aos seus próprios computadores, às ferramentas na nuvem e aos modelos e agentes de IA da sua conta Frely.
applies_to: any
updated: 2026-10-21
order: 3
---

# FrelyMCP

O FrelyMCP é o servidor MCP da sua conta Frely. Ligue-o uma vez e a sua aplicação de IA passa a alcançar os seus próprios computadores, as ferramentas na nuvem que ativou e os seus modelos e agentes de IA. Inicia sessão com OAuth; nenhuma API Key é colada na aplicação.

## O que faz
<!-- id: what -->

Local: listar os computadores associados à sua conta, ler ficheiros num espaço de trabalho, editar ficheiros, executar comandos e obter páginas web neles. Ler e escrever ficheiros locais é apenas uma parte. Nuvem: utilizar os servidores MCP na nuvem que ativou para esta ligação, sem necessidade de dispositivo. Modelos e agentes: listar os modelos e agentes que pode utilizar, ativar ou desativar um para MCP e fazer-lhe pedidos a partir da sua aplicação de IA. Pode ligar o seu próprio agente, e ele funciona como um modelo. A utilização é faturada na sua conta Frely.

## Antes de começar
<!-- id: before -->

Precisa de uma conta Frely (inicie sessão em frely.cloud). Para utilizar as ferramentas do dispositivo, instale a Frely CLI no computador e ligue-a. Modelos, agentes e ferramentas na nuvem funcionam sem dispositivo.

```sh
curl -fsSL https://frely.cloud/install.sh | sh
frely login
frely mcp start
```

## Ligue a sua aplicação de IA
<!-- id: connect -->

Utilize este endereço como URL do servidor MCP e escolha OAuth. Não adicione cabeçalhos de autenticação.

```sh
https://mcp.frely.cloud/mcp
```

## Claude
<!-- id: claude -->

No Claude, abra Settings (Definições), vá a Connectors (Conectores), escolha Add custom connector (Adicionar conector personalizado), introduza FrelyMCP como nome e cole o endereço acima. Selecione Connect (Ligar), inicie sessão no Frely e aprove o acesso. No Claude Code, execute: claude mcp add --transport http frelymcp https://mcp.frely.cloud/mcp e depois /mcp para iniciar sessão.

## ChatGPT
<!-- id: chatgpt -->

No ChatGPT, abra Settings e vá à secção de aplicações e conectores. Crie um novo conector, cole o endereço acima, escolha OAuth e inicie sessão no Frely. Os conectores personalizados podem exigir o modo de programador, dependendo do seu plano ChatGPT.

## Instalar com um ficheiro de configuração
<!-- id: config -->

Alguns agentes de IA, como o WorkBuddy, adicionam servidores MCP através de um ficheiro de configuração em vez de um ecrã de conector. Adicione esta entrada ao objeto mcpServers no ficheiro de configuração MCP do agente (mantenha os servidores que já lá estiverem). Depois reinicie o agente e conclua o início de sessão no Frely e a aprovação quando ele o pedir. Se o seu agente não aceitar um campo url, utilize a opção de servidor remoto ou HTTP do agente com o mesmo endereço.

```json
{
  "mcpServers": {
    "frely": {
      "url": "https://mcp.frely.cloud/mcp"
    }
  }
}
```

## Ferramentas
<!-- id: tools -->

As ferramentas que a sua aplicação de IA pode chamar:

| Ferramenta | O que faz |
| --- | --- |
| `list_devices` | Mostra os seus computadores associados, os respetivos espaços de trabalho e se estão online. Chame-a primeiro. |
| `read` | Lê ficheiros e pastas dentro de um espaço de trabalho. |
| `edit_file` | Cria ou altera um ficheiro dentro de um espaço de trabalho. |
| `process` | Executa um comando no dispositivo e devolve o resultado. |
| `web_fetch` | Obtém uma página web a partir do dispositivo. |
| `request_permission / confirm_permission` | Pede-lhe que aprove o acesso fora da sandbox predefinida, por exemplo ~/.ssh. A aprovação é feita no site do Frely com um código. |
| `models_list / models_set / models_invoke` | Lista os seus modelos e agentes, ativa ou desativa um para MCP e faz-lhe pedidos. Cada um dos ativados também aparece como <model>__invoke. |
| `<mcp>__<tool>` | Ferramentas dos servidores MCP na nuvem que ativou para esta ligação. Correm na nuvem e não precisam de dispositivo. |
| `local_mcp_list / local_mcp_call` | Acede a servidores MCP em execução num dispositivo, quando o dispositivo expõe algum. |
| `frely_list / frely_call` | Gere a sua conta Frely: API Keys, créditos, planos, encomendas e itens Creator. Correm na nuvem e não precisam de dispositivo. Uma ligação nova pode apenas ler até que autorize mais no site do Frely; as ações que movem dinheiro ou alteram credenciais precisam da sua aprovação de cada vez, e os pagamentos abrem uma página de pagamento. |
| `store` | Mostra a Frely Store (subscrições, planos, Credit, extensões, Skills, serviços) como um cartão, ou uma tabela em aplicações sem cartões. Cada ligação Buy abre esse produto no site do Frely, onde paga. |

## Segurança e aprovação
<!-- id: safety -->

Os comandos correm numa sandbox no seu computador que bloqueia pastas de credenciais como ~/.ssh e ~/.aws, e as ferramentas acedem apenas aos espaços de trabalho que registou. Quando uma tarefa precisa de mais, a aplicação de IA tem de fazer o pedido com request_permission. Decide no site do Frely, escolhe durante quanto tempo dura e pode revogá-lo mais tarde. A aplicação de IA não pode aprovar o seu próprio pedido.

## Os seus dados
<!-- id: data -->

As chamadas às ferramentas do dispositivo (read, edit_file, process, web_fetch e MCP local) são reencaminhadas para o seu próprio computador; o FrelyMCP guarda apenas os registos de início de sessão OAuth correspondentes. As chamadas a modelos e agentes passam pela gateway do Frely. O Request Capture pode guardar o conteúdo dos pedidos e das respostas durante um período limitado, e o fornecedor de modelos que escolher recebe os dados do pedido de que precisa para responder. Os detalhes estão na Política de Privacidade, nas secções 4 e 6. O Frely Credit não pode ser transferido; as chamadas a modelos são contabilizadas apenas no seu próprio Credit.

## Se algo não funcionar
<!-- id: help -->

Se list_devices não mostrar nenhum dispositivo, execute frely mcp start no computador e verifique se a CLI tem sessão iniciada na mesma conta Frely. Se um dispositivo estiver offline, ligue o computador e execute o mesmo comando. Outras questões: support@frely.cloud.
