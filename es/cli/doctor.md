---
title: Algo no funciona. ¿Cómo lo diagnostico?
description: Diagnostica problemas de inicio de sesión, instalación y del servicio con frely doctor.
applies_to: any
updated: 2026-11-02
site: cli
category: Maintenance
order: 19
---

# Algo no funciona. ¿Cómo lo diagnostico?

Ejecuta `frely doctor` para verificar el inicio de sesión, la instalación, la versión más reciente, MCP y el estado del servicio. Agrega `-v` para ver las rutas de configuración, el vencimiento de la autorización, el último heartbeat y los errores depurados. Si el dispositivo aparece sin conexión, ejecuta `frely link on`, que se puede volver a ejecutar sin riesgo. Si el problema persiste, pregunta en Discord o abre un informe en GitHub con la salida de `frely doctor -v`.

Related: [Documento de mantenimiento del servicio](https://github.com/FrelyHQ/frely-cli/blob/main/docs/service-maintenance.md) · [Discord](https://discord.gg/hugMuSveb) · [Informes de GitHub](https://github.com/FrelyHQ/frely-cli/issues)
