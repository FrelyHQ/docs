---
title: Dispositivos y la Frely CLI
description: Instalar la CLI, vincular una computadora, mantenerla funcionando y eliminarla.
applies_to: any
updated: 2026-10-21
order: 4
---

# Dispositivos y la Frely CLI

## ¿Cómo instalo la Frely CLI y vinculo mi computadora?
<!-- id: install -->

Ejecuta el script de instalación: curl -fsSL https://frely.cloud/install.sh | sh. Este instala frely y ejecuta frely mcp start, que abre el navegador para iniciar sesión (las cuentas nuevas pueden registrarse en la misma página), te pide aprobar el dispositivo y muestra tu URL de MCP. Ejecútalo de nuevo en cualquier momento para actualizar.

Related: [Guía de FrelyMCP](https://frely.cloud/docs/frelymcp/)

## Mi app de IA no muestra ningún dispositivo.
<!-- id: no-device -->

Ejecuta frely mcp start en la computadora y asegúrate de que la CLI haya iniciado sesión en la misma cuenta de Frely que tu app de IA.

Related: [Guía de FrelyMCP](https://frely.cloud/docs/frelymcp/)

## Un dispositivo aparece como desconectado.
<!-- id: offline -->

Enciende la computadora, conéctala a internet y ejecuta frely mcp start de nuevo. frely doctor muestra el estado de la cuenta, la instalación, la versión, MCP y el servicio; agrega -v para más detalles.

Console: [Mis dispositivos](https://frely.cloud/user/device)

## El acceso del dispositivo expiró.
<!-- id: expired -->

El acceso MCP del dispositivo dura 90 días por defecto. Ejecuta frely mcp start para aprobar de nuevo (frely mcp start --days con un número del 1 al 365 renueva antes de tiempo). La URL de MCP no cambia. Puedes administrar tus computadoras en Mis dispositivos en el sitio web de Frely.

Console: [Mis dispositivos](https://frely.cloud/user/device)

## ¿Por qué la app de IA pide permiso para leer algunas carpetas?
<!-- id: permissions -->

Los comandos se ejecutan en un sandbox que bloquea carpetas de credenciales como ~/.ssh y ~/.aws, y las herramientas solo tocan los espacios de trabajo que registraste. Cuando una tarea necesita más, la app debe pedirlo, tú decides en el sitio de Frely y por cuánto tiempo, y puedes revocarlo más tarde. La app de IA no puede aprobar su propia solicitud.

Related: [Guía de FrelyMCP](https://frely.cloud/docs/frelymcp/) · [How the sandbox protects your data](https://frely.cloud/connect/sandbox/)

## ¿Cómo elimino Frely de mi computadora?
<!-- id: uninstall -->

Ejecuta frely uninstall en una terminal local. Primero lista todo y luego lo elimina después de que escribes yes. Revoca el acceso de esta computadora, elimina el servicio, el inicio de sesión guardado, la identidad del dispositivo, la configuración y las cachés, y finalmente el programa frely. Conserva tus Proveedores y tus Agents en tu cuenta.
