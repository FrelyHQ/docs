---
title: ¿Cuánto dura el acceso al dispositivo y cómo lo renuevo?
description: Cuánto dura el acceso al dispositivo y cómo renovarlo.
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 16
---

# ¿Cuánto dura el acceso al dispositivo y cómo lo renuevo?

El acceso MCP al dispositivo dura 90 días por defecto. Ejecuta `frely link on --days 1..365` para renovarlo antes de que expire o elige otra duración. Cuando expira, las solicitudes y el trabajo en cola se detienen (las escrituras ya completadas no se deshacen) y `frely link on` vuelve a pedir aprobación. La URL nunca cambia. Administra tus computadoras en el sitio web de Frely, en la sección My Devices (Mis dispositivos).

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [Documento de MCP de dispositivo](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
