---
title: Utilizar o Frely no ChatGPT
description: Adicione o Frely ao ChatGPT como conector e, em seguida, chame os seus modelos Frely a partir de uma conversa.
applies_to: any
updated: 2026-10-21
order: 1
name: ChatGPT
---

# Utilizar o Frely no ChatGPT

Ligue uma única vez. O ChatGPT inicia sessão no Frely e pode depois listar os seus modelos e chamar modelos publicados.

## Antes de começar
<!-- id: before -->

- Uma conta Frely. Inicie sessão em frely.cloud.
- Uma chave de API ativada no seu espaço de trabalho Frely. As chamadas a modelos são faturadas na sua conta através dela.

## Adicionar o Frely como conector
<!-- id: connector -->
<!-- badge: recommended -->

1. No ChatGPT, abra as Settings (Definições) e aceda à secção de aplicações e conectores. Crie um novo conector. Os conectores personalizados podem exigir o modo de programador, consoante o seu plano do ChatGPT.
2. Introduza Frely como nome e cole este endereço como URL do servidor MCP:

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. Escolha OAuth para a autenticação. Não adicione uma chave de API nem um cabeçalho de autorização.
4. Inicie sessão no Frely na janela que se abre e aprove o acesso.
   <!-- mock: consent -->
5. Numa nova conversa, ative o conector Frely e peça ao ChatGPT que utilize o seu modelo. Por exemplo: «Utilize o meu modelo Frely GPT-800 para rever este texto.»
   <!-- mock: chat -->

## Colar o prompt de instalação
<!-- id: prompt -->

Este método instala a Frely CLI, pelo que o ChatGPT precisa de executar comandos no seu computador.

1. No seu espaço de trabalho Frely, abra o modelo e escolha Copy for ChatGPT (Copiar para o ChatGPT). Para um modelo que alguém partilhou consigo, utilize a ligação de instalação que essa pessoa enviou.
2. Cole-o no ChatGPT. O ChatGPT instala a Frely CLI, inicia a sessão por si no Frely no navegador e adiciona o modelo como Skill.
3. Se o ChatGPT lhe pedir para recarregar o Skill, recarregue-o. Depois, chame o modelo pelo nome.

## Utilizar a linha de comandos
<!-- id: cli -->

1. Instale a Frely CLI:

   ```sh
   curl -fsSL https://frely.cloud/install.sh | sh
   ```
2. Inicie sessão no Frely:

   ```sh
   frely login
   ```
3. Instale o modelo como um Skill do ChatGPT. Utilize a ligação do modelo indicada nas respetivas instruções de instalação:

   ```sh
   frely agent install <model-link> --host chatgpt
   ```

## Se algo não funcionar
<!-- id: troubleshooting -->

| Problema | O que fazer |
| --- | --- |
| O ChatGPT não mostra as ferramentas Frely | Ative o conector Frely na conversa ou inicie uma nova conversa depois de o adicionar. |
| O início de sessão falha ou o acesso é negado | Inicie sessão com a mesma conta Frely que possui a chave de API. Remova o conector e adicione-o novamente para reiniciar o início de sessão. |
| Uma chamada indica que é necessária uma chave de API | Crie ou ative uma chave de API no seu espaço de trabalho Frely e tente novamente. |
