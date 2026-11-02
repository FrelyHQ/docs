---
title: Un comando falló por el sandbox. ¿Qué puedo hacer?
description: Qué hacer cuando el sandbox bloquea un comando.
applies_to: any
updated: 2026-10-29
site: cli
category: Security and limits
order: 18
---

# Un comando falló por el sandbox. ¿Qué puedo hacer?

En la página de conexiones de Frely puedes abrir más para una conexión: carpetas de credenciales para leer, carpetas adicionales para escribir o una ejecución limitada por tiempo sin el sandbox. En Windows, o en Linux sin bubblewrap, socat y ripgrep, los comandos se rechazan porque la computadora no puede crear el sandbox; instala esas herramientas en Linux. `FRELY_SANDBOX=off` desactiva el sandbox solo en el dispositivo; úsalo solo cuando aceptes el riesgo.

Related: [Cómo el sandbox protege tus datos](https://frely.cloud/connect/sandbox/) · [Página de conexiones](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
