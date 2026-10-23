---
title: Uso de modelos y claves de API
description: Claves de API, configuración del cliente, uso y qué hacer cuando una solicitud falla.
applies_to: any
updated: 2026-10-21
order: 3
---

# Uso de modelos y claves de API

## ¿Cómo creo una clave de API?
<!-- id: api-key -->

Abre la página de claves de API en tu consola y crea una. Una clave autoriza llamadas a modelos, no acciones de administración. Guárdala en la configuración protegida de tu cliente. Nunca la coloques en Git, capturas de pantalla ni chats. Revocar una clave detiene su uso posterior.

Related: [Guías](https://frely.cloud/docs/)

Console: [Tus claves de API](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## ¿Cuál es la URL base de la API de Frely?
<!-- id: base-url -->

https://api.frely.cloud. Usa siempre https: las solicitudes por http sin cifrar se rechazan, así que un cliente configurado con http://api.frely.cloud fallará. La misma dirección sirve para todos los protocolos, por ejemplo https://api.frely.cloud/v1/chat/completions, /v1/responses, /v1/messages, /v1/embeddings y la lista de modelos en /v1/models. Algunos clientes esperan que la URL base lleve /v1 al final (https://api.frely.cloud/v1) y agregan la ruta del endpoint por su cuenta.

Related: [Usa Frely en Claude](https://frely.cloud/docs/claude/) · [Usa Frely en ChatGPT](https://frely.cloud/docs/chatgpt/)

Console: [Prueba de API (muestra la URL base y un comando curl listo)](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## ¿Cómo autentico las solicitudes a la API?
<!-- id: authentication -->

Envía tu clave de API como token bearer: Authorization: Bearer <tu clave>. Agrega Content-Type: application/json a las solicitudes con cuerpo. Una solicitud sin una clave válida recibe un 401. Una clave autoriza solo llamadas a modelos, no la administración de la cuenta.

Console: [Tus claves de API](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## ¿Qué aspecto tiene una respuesta de error?
<!-- id: errors -->

Un cuerpo JSON con la forma {"error":{"message","type","param","code"}}. El tipo sigue el estado HTTP: 401 authentication_error, 402 insufficient_quota, 403 permission_error, 404 not_found_error, 408 o 504 timeout_error, 429 rate_limit_error, otros 4xx invalid_request_error, 503 service_unavailable_error, otros 5xx server_error. Cada respuesta incluye un encabezado x-request-id; consérvalo al contactar a soporte. Una falla reintentable puede incluir un encabezado Retry-After en segundos.

Related: [Contacta a soporte](https://frely.cloud/support/)

Console: [Historial de solicitudes](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## ¿Qué coloco en mi app de IA o cliente?
<!-- id: client-settings -->

Tres valores: la dirección pública del servicio para el protocolo que elegiste (no una dirección interna), tu propia clave de API y un nombre de modelo público que tu cuenta pueda ver. Las instrucciones de tu cuenta muestran los valores exactos.

Related: [Usa Frely en Claude](https://frely.cloud/docs/claude/) · [Usa Frely en ChatGPT](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## ¿Cómo agrego Frely a Claude o ChatGPT?
<!-- id: connector -->

Agrega Frely como connector (conector), usa la dirección de FrelyMCP como URL del servidor MCP, elige OAuth, inicia sesión en Frely y aprueba el acceso. Las guías paso a paso muestran cada pantalla.

Related: [Guía de FrelyMCP](https://frely.cloud/docs/frelymcp/) · [Usa Frely en Claude](https://frely.cloud/docs/claude/) · [Usa Frely en ChatGPT](https://frely.cloud/docs/chatgpt/)

## Un modelo aparece en la lista, pero no puedo llamarlo.
<!-- id: no-access -->

Estar en la lista no es permiso para llamarlo. Verifica tu plan, saldo, asignación y los términos del servicio, y consulta a un administrador autorizado si estás en un Team. Rotar claves no sirve para evitar una restricción.

API tools: `models.available`, `budget.get`, `credits.account`

## Mi solicitud falló o se agotó el tiempo de espera.
<!-- id: request-failed -->

Guarda una nota sin información sensible con la hora, el protocolo, el nombre del modelo y el ID de la solicitud, y consulta tu historial de solicitudes. Un timeout o una conexión interrumpida no demuestran que no se haya usado nada, así que verifica el uso antes de reintentar. No envíes credenciales, cuerpos de solicitud ni volcados de error sin procesar a nadie.

Related: [Contacta a soporte](https://frely.cloud/support/)

Console: [Historial de solicitudes](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## ¿Puedo confiar en la salida de un modelo?
<!-- id: output-quality -->

La salida de un modelo puede contener errores y Frely no garantiza su exactitud. Revísala antes de usarla en entornos críticos para la seguridad, legales, financieros, médicos, de seguridad o de producción.

Related: [Términos del servicio](https://frely.cloud/terms/)
