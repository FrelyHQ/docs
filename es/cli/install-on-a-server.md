---
title: ¿Cómo instalo en un servidor sin navegador?
description: Instala en un servidor sin navegador usando un comando de instalación de un solo uso.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 3
---

# ¿Cómo instalo en un servidor sin navegador?

Crea un comando de instalación de un solo uso en la Frely App, en My Devices (Mis dispositivos), Add a computer (Agregar una computadora), Create install command (Crear comando de instalación), o pídele a ChatGPT o Claude (conectado a FrelyMCP) que agregue una computadora. Pega el comando en el servidor. Se ve así: `curl -fsSL https://frely.cloud/start.sh | FRELY_INSTALL_TOKEN=fit_... sh`. El token funciona una sola vez, expira después de 15 minutos y no se guarda. En Linux también ejecuta `sudo loginctl enable-linger $USER` para que el servicio permanezca en línea después de que cierres la sesión de SSH.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
