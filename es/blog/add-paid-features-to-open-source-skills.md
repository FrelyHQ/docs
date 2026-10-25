---
title: Cómo agregar funciones de pago a un Skill de código abierto
description: Mantén tu Skill de código abierto y gratuito, y pon la parte avanzada detrás de un pase de pago en Frely. Tu repositorio queda como está, y un mensaje a tu IA hace la publicación.
date: 2026-10-24
draft: true
applies_to: any
updated: 2026-10-24
---

Escribiste un Skill, lo pusiste en GitHub y la gente lo usa. Algunas partes te costaron mucho más trabajo que el resto: los scripts, las plantillas, los archivos de referencia profundos. No quieres ocultar el Skill, y tampoco quieres entregarlo todo.

Frely te ofrece un camino intermedio. **La parte de código abierto sigue siendo gratuita y pública. La parte avanzada queda detrás de un pase de pago.** Tu repositorio no cambia.

## Cómo funciona

Publicas el Skill en Frely y marcas qué archivos son de pago:

- **`SKILL.md` siempre es gratuito**, para que los compradores puedan ver lo que obtienen.
- **Los archivos de pago** son archivos exactos o carpetas completas, por ejemplo `scripts/` o `reference/advanced.md`.
- **Estableces un precio para cada duración de pase**: elige entre 1 hora, 8 horas, 24 horas, 7 días, 30 días o para siempre. Ofrece una o las seis.

Los compradores lo instalan con un solo comando: `frely item install <item-id>`. Funciona con ChatGPT, Codex, Claude Code y otras herramientas que usan Skills. Mientras un pase está activo, los archivos de pago se obtienen junto con el Skill. Cuando expira, la instalación deja de obtener la parte de pago. Un pase `forever` permite al comprador conservar una copia local para siempre e incluye actualizaciones posteriores.

## Publica con un mensaje

No necesitas leer documentación. Envía esto a la IA que ya usas (necesita ejecutar comandos en tu computadora, como las aplicaciones de escritorio, Codex o Claude Code):

`Follow https://frely.cloud/prompt/creator.md and publish this Skill: <your repository URL>`

La IA instala el Frely CLI, lee tu repositorio y te hace exactamente tres preguntas:

1. ¿Qué archivos son de pago? Por defecto propone los scripts, las plantillas y los archivos de referencia profundos.
2. ¿Cuál es el precio para cada duración de pase?
3. ¿Quieres ofrecer un pase `forever`?

Hace el resto y te da el item id y el comando de instalación.

## Lo que debes saber antes de publicar

- **La parte de pago es visible para quienes la compran.** El Skill se instala en el propio dispositivo del comprador, así que la parte gratuita es visible para todos y la parte de pago para todos los que tienen un pase. Si el contenido debe permanecer privado, publícalo en su lugar como un Agent alojado, donde los usuarios obtienen resultados pero nunca el prompt.
- **Revisa la licencia.** Si la licencia de tu repositorio prohíbe la redistribución, no lo publiques. La URL de origen se muestra como atribución, y Frely no verifica la propiedad del repositorio.
- **Límites de tamaño.** El Skill comprimido en zip tiene como máximo 256 KiB, 64 archivos, 64 KiB por archivo y 128 KiB en total.
- **Recibes Frely Credit, no dinero en efectivo.** Las tarifas de uso se retienen durante 30 días y luego se agregan a tu Frely Credit, que puedes gastar en Frely. No se puede retirar ni transferir. Frely cobra una comisión de plataforma en cada venta, que se muestra en la página cuando estableces tus precios.
- **Una cuenta gratuita puede publicar un item.**

## Actualizar o retirar la publicación

Para lanzar una nueva versión, publica de nuevo con el mismo slug. Para retirarlo, márcalo como no publicado. Tu repositorio de GitHub nunca se toca, así que tu versión de código abierto queda donde siempre estuvo.

[Publica tu Skill en Frely](https://frely.cloud/prompt/creator.md)
