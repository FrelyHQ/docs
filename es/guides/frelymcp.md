---
title: FrelyMCP
description: FrelyMCP da a Claude, ChatGPT y otros clientes MCP acceso a tus propias computadoras, herramientas en la nube y los modelos y agentes de IA de tu cuenta de Frely.
applies_to: any
updated: 2026-10-21
order: 3
---

# FrelyMCP

FrelyMCP es el servidor MCP de tu cuenta de Frely. Conéctalo una vez y tu app de IA podrá acceder a tus propias computadoras, a las herramientas en la nube que activaste y a tus modelos y agentes de IA. Inicias sesión con OAuth; no se pega ninguna API Key en la app.

## Qué hace
<!-- id: what -->

Local: enumera las computadoras vinculadas a tu cuenta, lee archivos en un workspace, edita archivos, ejecuta comandos y obtiene páginas web en ellas. Leer y escribir archivos locales es solo una parte. Nube: usa los servidores MCP en la nube que activaste para esta conexión, sin necesidad de dispositivo. Modelos y agentes: enumera los modelos y agentes que puedes usar, activa o desactiva uno para MCP y consúltalo desde tu app de IA. Puedes conectar tu propio agente y funciona como un modelo. El uso se factura a tu cuenta de Frely.

## Antes de empezar
<!-- id: before -->

Necesitas una cuenta de Frely (inicia sesión en frely.cloud). Para usar las herramientas del dispositivo, instala Frely CLI en la computadora y vincúlala. Los modelos, los agentes y las herramientas en la nube funcionan sin un dispositivo.

```sh
curl -fsSL https://frely.cloud/install.sh | sh
frely login
frely mcp start
```

## Conecta tu app de IA
<!-- id: connect -->

Usa esta dirección como URL del servidor MCP y elige OAuth. No agregues encabezados de autenticación.

```sh
https://mcp.frely.cloud/mcp
```

## Claude
<!-- id: claude -->

En Claude, abre Settings (Configuración), ve a Connectors (Conectores), elige Add custom connector (Agregar conector personalizado), escribe FrelyMCP como nombre y pega la dirección de arriba. Selecciona Connect, inicia sesión en Frely y aprueba el acceso. Para Claude Code ejecuta: claude mcp add --transport http frelymcp https://mcp.frely.cloud/mcp y luego /mcp para iniciar sesión.

## ChatGPT
<!-- id: chatgpt -->

En ChatGPT, abre Settings y ve a la sección de apps y conectores. Crea un conector nuevo, pega la dirección de arriba, elige OAuth e inicia sesión en Frely. Los conectores personalizados pueden requerir el modo de desarrollador, según tu plan de ChatGPT.

## Instalación con un archivo de configuración
<!-- id: config -->

Algunos agentes de IA, como WorkBuddy, agregan servidores MCP mediante un archivo de configuración en lugar de una pantalla de conector. Agrega esta entrada al objeto mcpServers en el archivo de configuración MCP del agente (conserva los servidores que ya estén ahí). Luego reinicia el agente y completa el inicio de sesión y la aprobación de Frely cuando lo pida. Si tu agente no acepta un campo url, usa su opción de servidor remoto o HTTP con la misma dirección.

```json
{
  "mcpServers": {
    "frely": {
      "url": "https://mcp.frely.cloud/mcp"
    }
  }
}
```

## Herramientas
<!-- id: tools -->

Las herramientas que tu app de IA puede llamar:

| Herramienta | Qué hace |
| --- | --- |
| `list_devices` | Muestra tus computadoras vinculadas, sus workspaces y si están en línea. Llámala primero. |
| `read` | Lee archivos y carpetas dentro de un workspace. |
| `edit_file` | Crea o modifica un archivo dentro de un workspace. |
| `process` | Ejecuta un comando en el dispositivo y devuelve su salida. |
| `web_fetch` | Obtiene una página web desde el dispositivo. |
| `request_permission / confirm_permission` | Te pide aprobar el acceso fuera del sandbox predeterminado, por ejemplo ~/.ssh. Apruebas en el sitio de Frely con un código. |
| `models_list / models_set / models_invoke` | Enumera tus modelos y agentes, activa o desactiva uno para MCP y lo consulta. Cada uno que actives también aparece como <model>__invoke. |
| `<mcp>__<tool>` | Herramientas de los servidores MCP en la nube que activaste para esta conexión. Se ejecutan en la nube y no necesitan dispositivo. |
| `local_mcp_list / local_mcp_call` | Accede a los servidores MCP que se ejecutan en un dispositivo, cuando el dispositivo expone alguno. |
| `frely_list / frely_call` | Administra tu cuenta de Frely: API Keys, créditos, planes, órdenes y artículos de Creator. Se ejecutan en la nube y no necesitan dispositivo. Una conexión nueva solo puede leer hasta que permitas más en el sitio de Frely; las acciones que mueven dinero o cambian credenciales requieren tu aprobación cada vez, y los pagos abren una página de pago. |
| `store` | Muestra el Frely Store (suscripciones, planes, Credit, extensiones, Skills, servicios) como una tarjeta, o como una tabla en apps sin tarjetas. Cada enlace Buy abre ese producto en el sitio de Frely, donde pagas. |

## Seguridad y aprobación
<!-- id: safety -->

Los comandos se ejecutan en un sandbox en tu computadora que bloquea carpetas de credenciales como ~/.ssh y ~/.aws, y las herramientas solo tocan los workspaces que registraste. Cuando una tarea necesita más, la app de IA debe pedirlo con request_permission. Tú decides en el sitio de Frely, eliges cuánto dura y puedes revocarlo más adelante. La app de IA no puede aprobar su propia solicitud.

## Tus datos
<!-- id: data -->

Las llamadas a las herramientas del dispositivo (read, edit_file, process, web_fetch y MCP local) se reenvían a tu propia computadora; FrelyMCP solo conserva los registros de inicio de sesión OAuth de estas. Las llamadas a modelos y agentes pasan por la gateway de Frely. Request Capture puede conservar su contenido de solicitud y respuesta durante un período limitado, y el proveedor de modelos que elijas recibe los datos de la solicitud que necesita para responder. Los detalles están en la Política de privacidad, secciones 4 y 6. Frely Credit no se puede transferir; las llamadas a modelos se miden únicamente contra tu propio Credit.

## Si algo no funciona
<!-- id: help -->

Si list_devices no muestra ningún dispositivo, ejecuta frely mcp start en la computadora y verifica que el CLI haya iniciado sesión en la misma cuenta de Frely. Si un dispositivo está fuera de línea, enciende la computadora y ejecuta el mismo comando. Otras preguntas: support@frely.cloud.
