---
title: Usa Frely en ChatGPT
description: Agrega Frely a ChatGPT como conector y luego llama a tus modelos de Frely desde un chat.
applies_to: any
updated: 2026-10-21
order: 1
name: ChatGPT
---

# Usa Frely en ChatGPT

Conecta una sola vez. ChatGPT inicia sesión en Frely y luego puede listar tus modelos y llamar a los modelos publicados.

## Antes de empezar
<!-- id: before -->

- Una cuenta de Frely. Inicia sesión en frely.cloud.
- Una API key habilitada en tu espacio de trabajo de Frely. Las llamadas a modelos se facturan a tu cuenta a través de ella.

## Agrega Frely como conector
<!-- id: connector -->
<!-- badge: recommended -->

1. En ChatGPT, abre Settings (Configuración) y ve a la sección de apps y conectores. Crea un nuevo conector. Los conectores personalizados pueden requerir el modo de desarrollador, según tu plan de ChatGPT.
2. Escribe Frely como nombre y pega esta dirección como la URL del servidor MCP:

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. Elige OAuth para la autenticación. No agregues una API key ni un encabezado de autorización.
4. Inicia sesión en Frely en la ventana que se abre y aprueba el acceso.
   <!-- mock: consent -->
5. En un chat nuevo, activa el conector de Frely y pide a ChatGPT que use tu modelo. Por ejemplo: "Usa mi modelo de Frely GPT-800 para revisar este texto".
   <!-- mock: chat -->

## Pega el prompt de instalación
<!-- id: prompt -->

Esta vía instala la Frely CLI, por lo que ChatGPT necesita ejecutar comandos en tu computadora.

1. En tu espacio de trabajo de Frely, abre el modelo y elige Copiar para ChatGPT. Para un modelo que alguien compartió contigo, usa el enlace de instalación que te envió.
2. Pégalo en ChatGPT. ChatGPT instala la Frely CLI, inicia tu sesión en Frely en tu navegador y agrega el modelo como un Skill.
3. Si ChatGPT te pide recargar el Skill, recárgalo. Luego llama al modelo por su nombre.

## Usa la línea de comandos
<!-- id: cli -->

1. Instala la Frely CLI:

   ```sh
   curl -fsSL https://frely.cloud/install.sh | sh
   ```
2. Inicia sesión en Frely:

   ```sh
   frely login
   ```
3. Instala el modelo como un Skill de ChatGPT. Usa el enlace del modelo de sus instrucciones de instalación:

   ```sh
   frely agent install <model-link> --host chatgpt
   ```

## Si algo no funciona
<!-- id: troubleshooting -->

| Problema | Qué hacer |
| --- | --- |
| ChatGPT no muestra las herramientas de Frely | Activa el conector de Frely en el chat, o inicia un chat nuevo después de agregarlo. |
| El inicio de sesión falla o se niega el acceso | Inicia sesión con la misma cuenta de Frely a la que pertenece la API key. Elimina el conector y agrégalo de nuevo para reiniciar el inicio de sesión. |
| Una llamada indica que se requiere una API key | Crea o habilita una API key en tu espacio de trabajo de Frely y vuelve a intentarlo. |
