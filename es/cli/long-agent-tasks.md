---
title: ¿Qué sucede cuando un Frely Agent tarda mucho tiempo?
description: Cómo una ejecución larga de un Agent devuelve un ID de tarea, cómo esperarla, cancelarla y desactivar las líneas de progreso.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# ¿Qué sucede cuando un Frely Agent tarda mucho tiempo?

`frely agent run` registra la ejecución en tu computadora y un proceso en segundo plano espera al Agent, así que una tarea larga sobrevive aunque el comando se corte. La tarea sigue ejecutándose en Frely; consultar su estado no cuesta nada. Si el comando termina antes de la respuesta, ejecuta `frely agent result --last --wait` (o `frely agent result <runId> --wait`). Mientras la ejecución está en curso, `frely agent result <runId>` muestra su línea de progreso más reciente cuando el Agent ha escrito una. Detén una ejecución con `frely agent cancel <runId>`; la tarea también se detiene en Frely y lo que ya se ejecutó se cobra. Un precio establecido por el Creator del Agent se cobra cuando la tarea se completa, cuando la cancelas o cuando el Agent ya entregó resultados; una tarea que falla sin entregar resultados no se cobra. Para ocultar las líneas de progreso, agrega `--no-progress-summary` a `frely agent run`, o escribe `When calling Frely Agents, pass --no-progress-summary.` en el `AGENTS.md` o `CLAUDE.md` que lee tu IA.

Related: [Instalar un Frely Agent, Prompt o Skill](./install-agents-and-items.md)
