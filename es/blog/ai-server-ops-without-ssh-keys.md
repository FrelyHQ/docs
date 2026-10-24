---
title: Deja que la IA te ayude a administrar tus servidores sin entregar tus claves SSH
description: Darle a un asistente de IA acceso ssh desde tu computadora expone cada clave de ~/.ssh. Conectar el propio servidor a tu cuenta de IA deja las claves fuera de la ecuación y hace que cada permiso se pueda revocar.
date: 2026-10-23
draft: false
applies_to: any
updated: 2026-10-23
---

Cada vez más personas dejan que un asistente de IA lea registros, edite configuraciones y reinicie servicios. La forma obvia es ejecutar una IA que pueda ejecutar comandos en tu propia computadora y dejar que se conecte por `ssh` al servidor.

Eso funciona. Pero vale la pena detenerse en un detalle: **para dejar que la IA ejecute `ssh`, le entregas toda tu carpeta `~/.ssh`.**

## Pasar por tu computadora: entregas más de lo que crees

Para que la IA ejecute `ssh prod` en tu computadora, tiene que leer la configuración y las claves privadas de `~/.ssh`. La mayoría de los controles de permisos solo pueden decidir si una carpeta es legible. No pueden decir "solo este servidor". Eso significa:

- Puede leer **todas** las claves privadas, no solo la de este servidor.
- Mientras sus comandos puedan llegar a la red, una clave puede salir de tu computadora. Una clave filtrada sigue siendo válida. Quitarle el acceso a la IA después no la recupera; tienes que eliminar la clave pública de cada servidor.
- Una vez que `ssh` inicia sesión, lo que la IA puede hacer en el servidor depende de la cuenta detrás de esa clave. Si es root, la IA tiene root.

El registro del servidor solo muestra "tu computadora inició sesión con tu clave". No puede distinguir tus comandos de los de la IA.

## Al revés: dejar que el servidor se conecte hacia afuera

En lugar de darle a la IA una clave para abrir la puerta del servidor, instala un programa pequeño en el servidor. El servidor se conecta hacia afuera a tu cuenta de IA, y tú decides qué puede hacer la IA allí.

Con Frely se ve así:

1. En el sitio web de Frely, abre **Mis dispositivos → Agregar una computadora** y crea un comando de instalación de un solo uso. Pégalo en el servidor. El token funciona una vez, caduca a los 15 minutos y no se guarda en el servidor.
2. El servidor se conecta hacia afuera a Frely. **No abres ningún puerto.**
3. Conecta FrelyMCP en ChatGPT, Claude o Codex, y la IA podrá leer archivos y ejecutar comandos en ese servidor.

Lo que esto cambia:

- **Ninguna clave de larga duración llega a la IA.** El servidor tiene su propia identidad de dispositivo, y los comandos que ejecuta la IA no pueden leerla.
- **Los comandos se ejecutan en un sandbox por defecto.** Solo pueden escribir en la carpeta que elijas y en la carpeta temporal, y las carpetas de credenciales como `~/.ssh` y `~/.aws` permanecen ilegibles. Cuando el servidor no puede ejecutar el sandbox, los comandos se rechazan en lugar de ejecutarse sin protección.
- **Más acceso requiere tu aprobación.** La IA lo pide, y tú decides en el sitio web de Frely, con una passkey o un código de autenticador, si permitirlo y por cuánto tiempo: un comando, 12 horas o hasta que termine la autorización del dispositivo. La IA no puede aprobar su propia solicitud.
- **Revoca en cualquier momento, con efecto inmediato.** Cada llamada vuelve a verificar la autorización, de modo que el comando siguiente a tu revocación se rechaza.

## Cuatro hábitos que lo hacen más seguro

En el servidor, el límite es "el usuario del sistema con el que se ejecuta Frely, más el sandbox". Estas decisiones determinan qué tan fuerte es:

1. **Instala con un usuario dedicado, no como root.** Por ejemplo, crea `frely-ops` y dale acceso solo a la carpeta de tu aplicación. El sandbox limita la escritura, no lo que el usuario puede leer, así que cuanto más limitados sean los derechos del usuario, mejor. Para leer los registros del sistema sin root, agrega el usuario a los grupos `adm` y `systemd-journal`.
2. **Verifica que el sandbox funcione.** En Linux, instala `bubblewrap`, `socat` y `ripgrep`; `frely doctor` te dice si el sandbox está disponible. Los sistemas más antiguos, como CentOS 7, no pueden ejecutarlo; allí, aprueba "ejecutar sin el sandbox" por un tiempo limitado en lugar de dejarlo abierto.
3. **Comparte solo la carpeta que necesitas.** Configura `FRELY_WORKSPACE=/srv/myapp` en lugar de compartir toda la carpeta personal, y mantén corta la autorización del dispositivo.
4. **Conoce lo que significa el grupo docker.** Un usuario del grupo `docker` puede leer `docker logs` directamente, lo cual es práctico, pero esa pertenencia es tan poderosa como root.

## Cuando ssh sigue siendo aceptable

Si la IA solo lee registros y ejecuta unos pocos comandos de solo lectura, pasar por tu computadora puede ser aceptable, siempre que:

- crees una clave separada para este servidor y la restrinjas en el `authorized_keys` del servidor con `from=` y `restrict`, iniciando sesión como un usuario limitado;
- no haya otras claves poderosas en el mismo `~/.ssh`;
- permitas el acceso solo para la tarea en cuestión, no por días.

## En resumen

Cuando la IA administra tus servidores, importa menos qué tan lista es que qué tiene en sus manos. **En lugar de entregarle tus claves a la IA, deja que el servidor se conecte hacia afuera y aprueba lo que puede hacer.**

[Comienza con el Frely CLI](https://cli.frely.cloud/)
