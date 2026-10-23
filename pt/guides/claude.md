---
title: Utilizar o Frely no Claude
description: Adicione o Frely ao Claude como conector personalizado, ou ao Claude Code como servidor MCP.
applies_to: any
updated: 2026-10-21
order: 2
name: Claude
---

# Utilizar o Frely no Claude

Ligue uma única vez. O Claude inicia sessão no Frely e pode depois listar os seus modelos e chamar modelos publicados.

## Antes de começar
<!-- id: before -->

- Uma conta Frely. Inicie sessão em frely.cloud.
- Uma chave de API ativada no seu espaço de trabalho Frely. As chamadas a modelos são faturadas na sua conta através dela.

## Aplicação Claude (web e desktop)
<!-- id: connector -->
<!-- badge: recommended -->

1. No Claude, abra Settings (Definições), vá a Connectors (Conectores) e escolha Add custom connector (Adicionar conector personalizado).
2. Introduza Frely como nome e cole este endereço como URL:

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. Não adicione cabeçalhos de autenticação. O Claude utiliza OAuth.
4. Escolha Connect, inicie sessão no Frely e aprove o acesso.
   <!-- mock: consent -->
5. Numa conversa, abra o menu de ferramentas, ative o Frely e peça ao Claude para utilizar o seu modelo. Por exemplo: "Utiliza o meu modelo Frely GPT-800 para rever este texto."
   <!-- mock: chat -->

## Claude Code
<!-- id: claude-code -->

1. Adicione o Frely como servidor MCP:

   ```sh
   claude mcp add --transport http frely https://frely.cloud/mcp
   ```
2. Execute /mcp no Claude Code, escolha frely e inicie sessão no Frely no seu browser.

   ```sh
   /mcp
   ```
3. Para adicionar um modelo como Skill em alternativa, instale o Frely CLI, execute frely login e instale o modelo:

   ```sh
   frely agent install <model-link> --host claude-code
   ```

## Se algo não funcionar
<!-- id: troubleshooting -->

| Problema | O que fazer |
| --- | --- |
| O Claude não mostra as ferramentas do Frely | Ative o Frely no menu de ferramentas da conversa ou inicie uma nova conversa depois de estabelecer a ligação. |
| O início de sessão falha ou o acesso é recusado | Inicie sessão com a mesma conta Frely a que pertence a chave de API. Remova o conector e volte a adicioná-lo para reiniciar o início de sessão. |
| Uma chamada indica que é necessária uma chave de API | Crie ou ative uma chave de API no seu espaço de trabalho Frely e tente novamente. |
