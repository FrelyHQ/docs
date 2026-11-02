---
title: ¿A qué carpeta tiene acceso la IA?
description: Qué carpetas puede usar la IA y cómo cambiarlas.
applies_to: any
updated: 2026-11-02
site: cli
category: Getting started
order: 5
---

# ¿A qué carpeta tiene acceso la IA?

De forma predeterminada, la carpeta `~/Frely`; el instalador la crea. Las computadoras configuradas antes de este cambio conservan la carpeta que ya comparten. Establece `FRELY_WORKSPACE=/path` antes de instalar para compartir otra carpeta. Después usa `frely link workspace add <path>` para compartir más carpetas, `frely link workspace remove <path>` para dejar de compartir una, y `frely link workspace list` para verlas todas.

Cuando un cliente de IA necesita una carpeta fuera de las compartidas, te lo solicita, y tú autorizas esa carpeta desde la web, por tiempo limitado o de forma permanente. La opción permanente funciona para una sola carpeta, no para tu carpeta de inicio ni para las carpetas que están por encima de ella, y requiere tu llave de acceso o un código del autenticador. Las carpetas autorizadas desde la web se enumeran en la página del dispositivo, donde puedes eliminarlas en cualquier momento. Los archivos de credenciales y de inicio del shell dentro de una carpeta autorizada permanecen protegidos.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Documento de MCP del dispositivo](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md)
