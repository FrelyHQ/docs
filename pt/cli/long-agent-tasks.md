---
title: O que acontece quando um Frely Agent demora muito tempo?
description: Como uma execução longa de um Agent devolve um ID de tarefa, como esperar por ela, cancelá-la e desativar as linhas de progresso.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# O que acontece quando um Frely Agent demora muito tempo?

`frely agent run` regista a execução no seu computador e um processo em segundo plano fica à espera do Agent, pelo que uma tarefa longa sobrevive a um comando interrompido. A tarefa continua a ser executada no Frely; consultar o seu estado não custa nada. Se o comando terminar antes da resposta, execute `frely agent result --last --wait` (ou `frely agent result <runId> --wait`). Enquanto a execução está a decorrer, `frely agent result <runId>` mostra a linha de progresso mais recente, quando o Agent tiver escrito uma. Pare uma execução com `frely agent cancel <runId>`; a tarefa também para no Frely e o que já foi executado é cobrado. Um preço definido pelo Creator do Agent é cobrado quando a tarefa é concluída, quando a cancelar ou quando o Agent já tiver entregado um resultado; uma tarefa que falha sem entregar resultado não é cobrada. Para ocultar as linhas de progresso, adicione `--no-progress-summary` a `frely agent run`, ou escreva `When calling Frely Agents, pass --no-progress-summary.` no `AGENTS.md` ou `CLAUDE.md` que a sua IA lê.

Related: [Instalar um Frely Agent, Prompt ou Skill](./install-agents-and-items.md)
