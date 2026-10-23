---
title: Usar Frely en Claude
description: Agrega Frely a Claude como conector personalizado, o a Claude Code como servidor MCP.
applies_to: any
updated: 2026-10-21
order: 2
name: Claude
---

# Usar Frely en Claude

Conéctate una sola vez. Claude inicia sesión en Frely y luego puede listar tus modelos y llamar a los modelos publicados.

## Antes de empezar
<!-- id: before -->

- Una cuenta de Frely. Inicia sesión en frely.cloud.
- Una API key habilitada en tu espacio de trabajo de Frely. Las llamadas a modelos se facturan a tu cuenta a través de ella.

## App de Claude (web y escritorio)
<!-- id: connector -->
<!-- badge: recommended -->

1. En Claude, abre Settings (Configuración), ve a Connectors (Conectores) y elige Add custom connector (Agregar conector personalizado).
2. Escribe Frely como nombre y pega esta dirección como URL:

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. No agregues encabezados de autenticación. Claude usa OAuth.
4. Elige Connect, inicia sesión en Frely y aprueba el acceso.
   <!-- mock: consent -->
5. En un chat, abre el menú de herramientas, activa Frely y pídele a Claude que use tu modelo. Por ejemplo: "Usa mi modelo GPT-800 de Frely para revisar este texto."
   <!-- mock: chat -->

## Claude Code
<!-- id: claude-code -->

1. Agrega Frely como servidor MCP:

   ```sh
   claude mcp add --transport http frely https://frely.cloud/mcp
   ```
2. Ejecuta /mcp en Claude Code, elige frely e inicia sesión en Frely en tu navegador.

   ```sh
   /mcp
   ```
3. Para agregar un modelo como Skill en su lugar, instala el Frely CLI, ejecuta frely login e instala el modelo:

   ```sh
   frely agent install <model-link> --host claude-code
   ```

## Si algo no funciona
<!-- id: troubleshooting -->

| Problema | Qué hacer |
| --- | --- |
| Claude no muestra las herramientas de Frely | Activa Frely en el menú de herramientas del chat, o inicia un nuevo chat después de conectar. |
| El inicio de sesión falla o se deniega el acceso | Inicia sesión con la misma cuenta de Frely a la que pertenece la API key. Elimina el conector y agrégalo de nuevo para reiniciar el inicio de sesión. |
| Una llamada indica que se requiere una API key | Crea o habilita una API key en tu espacio de trabajo de Frely y vuelve a intentarlo. |
