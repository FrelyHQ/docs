---
title: Qué hace un runtime de sandbox cuando la IA ejecuta comandos en tu computadora
description: Una explicación sencilla del runtime de sandbox de código abierto de Anthropic (srt): cómo limita archivos y red a nivel del sistema operativo, dónde se queda corto, y cómo Frely CLI lo usa para mantener tus credenciales lejos de los comandos que ejecuta una IA.
date: 2026-10-28
draft: false
applies_to: any
updated: 2026-10-28
---

Permitir que una IA ejecute comandos de shell en tu computadora es útil. Puede instalar dependencias, ejecutar pruebas, leer registros y arreglar la compilación. También significa que un programa que no escribiste, guiado por texto que no revisaste, se ejecuta con tu cuenta de usuario.

Por defecto, esa cuenta puede leer tus llaves SSH, tus credenciales de la nube, tus tokens de registros de paquetes y tu perfil del navegador. Un comando no necesita ser malicioso para causar daño. Una inyección de prompt oculta en una página web o en un comentario de un issue puede ser suficiente para que un comando de apariencia completamente normal lea un secreto y lo envíe a otra parte.

Preguntar "¿estás seguro?" antes de cada comando no resuelve esto. Las personas aprueban cosas que no pueden leer por completo. Una mejor respuesta es hacer que lo peligroso sea imposible por defecto, y permitir que una persona abra una puerta estrecha cuando de verdad se necesita. Para eso sirve un sandbox.

## Qué es srt

`srt` es el runtime de sandbox de código abierto de Anthropic (`@anthropic-ai/sandbox-runtime`). Fue creado para Claude Code, y puede usarse como herramienta de línea de comandos o como biblioteca. Envuelve cualquier proceso, y todo lo que ese proceso inicie, en límites de archivos y de red aplicados por el sistema operativo. No hay imagen de contenedor ni máquina virtual.

Su propio README lo describe como una vista previa de investigación en beta, así que trátalo como un bloque de construcción sólido y no como una garantía terminada.

### Cómo limita los archivos

Las reglas de archivos son simples de enunciar:

- **Las lecturas están permitidas en todas partes por defecto.** Tú listas los lugares que se deben ocultar con `denyRead`, por ejemplo tus carpetas de credenciales.
- **Las escrituras están denegadas en todas partes por defecto.** Listas los lugares donde un comando puede escribir con `allowWrite`, normalmente la carpeta del proyecto y un directorio temporal. `denyWrite` prevalece sobre `allowWrite`, así que puedes excluir un archivo protegido de una carpeta permitida.

El lado de las lecturas es una lista de denegación, no una lista de permitidos. Eso es práctico, porque las herramientas necesitan leer muchos archivos del sistema, pero también significa que el sandbox solo oculta lo que alguien pensó en listar.

### Cómo limita la red

Por defecto, no se permite ningún acceso a la red. Un comando solo puede llegar a la red a través de proxies que se ejecutan fuera del sandbox, y esos proxies deciden qué dominios están permitidos.

- **macOS:** el comando se ejecuta bajo un perfil de Seatbelt generado (`sandbox-exec`) que solo permite comunicarse con un puerto local de proxy.
- **Linux:** el comando se ejecuta bajo bubblewrap con su namespace de red eliminado, así que la única salida es a través de proxies a los que se llega mediante sockets de Unix montados dentro del sandbox.

HTTP y HTTPS pasan por un proxy HTTP. El resto del tráfico TCP pasa por un proxy SOCKS5. Ambos aplican las listas de dominios permitidos y denegados. Los sockets de Unix están bloqueados por defecto.

### Por qué este es un buen enfoque

Los límites viven en el sistema operativo, no en el buen comportamiento de la IA ni en una lista de nombres de comandos. Un comando puede ser reescrito, envuelto en un script u ofuscado. Aun así no puede leer una carpeta que el sandbox oculta ni escribir fuera de las carpetas que se le asignaron. Las mismas reglas aplican a cada proceso hijo.

## Lo que srt no hace

Un sandbox no es un escudo mágico. Los límites honestos importan, porque deciden en qué puedes confiarle.

- **Es tan estricto como su configuración.** Si la lista de permitidos de la red está abierta, todo lo que el comando pueda leer puede enviarse hacia afuera. Si un secreto no está en la lista de denegación, el sandbox no lo oculta.
- **Software en beta.** El proyecto lo dice por sí mismo, y sus opciones pueden cambiar.
- **Diferencias entre plataformas.** Soporta macOS y Linux. En Linux necesita bubblewrap, socat y ripgrep. El soporte de Windows está en alpha en srt, y Frely CLI no ejecuta comandos en sandbox en Windows.
- **Algunas opciones lo debilitan a propósito.** Permitir sockets de Unix, sandboxes anidados o Apple Events abre cada uno una forma de sortear el aislamiento. El README advierte sobre ellos.
- **Limita el árbol de procesos de un solo comando.** No te protege de una persona que le da su contraseña a la IA, ni de un archivo que tú mismo copies fuera del sandbox.

## Cómo usa Frely CLI srt

Frely CLI te permite controlar una computadora desde tu IA: la IA pide, la CLI ejecuta comandos en tu dispositivo. Cada comando que Frely CLI ejecuta para un cliente de IA remoto pasa primero por srt. Esto es lo que se ve en la práctica, según el código fuente de la CLI.

### Lo predeterminado

- **Escrituras:** un comando puede escribir dentro de la carpeta del workspace y del directorio temporal del sistema. Nada más.
- **Las carpetas de credenciales están ocultas.** La CLI deniega las lecturas de las llaves SSH, la configuración de AWS, Google Cloud, Kubernetes y GitHub CLI, las llaves de GnuPG, las credenciales guardadas de git y los archivos de tokens de registros de paquetes (`.npmrc`, `.pypirc`, credenciales de Cargo). Las credenciales del propio dispositivo de Frely nunca pueden ser abiertas por ninguna aprobación.
- **Los lugares sensibles permanecen protegidos contra escritura.** Los archivos de inicio del shell como `.zshrc` y `.bashrc`, los LaunchAgents de macOS y las carpetas de credenciales están protegidos contra escrituras. Un permiso amplio como "escribir bajo mi carpeta de usuario" no los incluye. Abrir uno de ellos requiere nombrar esa ruta exacta.
- **`.git/hooks` permanece bloqueado.** Los hooks ejecutan programas fuera del sandbox, así que ninguna aprobación los abre.
- **Falla cerrado.** Si el sandbox no puede iniciarse en un dispositivo (una plataforma no soportada o una dependencia faltante), el comando se rechaza con un mensaje que explica por qué. Nunca se ejecuta en silencio sin el sandbox.

### Pedir más, de forma acotada

Cuando un comando necesita algo que el sandbox oculta, la IA no puede simplemente tomarlo. Lo pide, y el dueño del dispositivo aprueba en el sitio web de Frely, con una passkey o un código de autenticador, no tocando un botón en el chat. La solicitud menciona el motivo y el comando exacto. La aprobación puede ser tan acotada como un grupo de credenciales (por ejemplo SSH, pero no AWS), una carpeta de caché o un directorio específico.

Si nada acotado encaja, el dueño puede aprobar ejecutar un comando sin el sandbox. Esa es la última opción, no la predeterminada, y los mensajes de rechazo de la CLI empujan a la IA a pedir primero la opción más acotada.

### Git sin entregar las llaves

srt bloquea las escrituras al `.git/config` de un repositorio, porque una configuración de git puede hacer que git ejecute programas más adelante, fuera del sandbox. Eso también bloquea comandos cotidianos como `git push -u` y `git remote add`.

Frely CLI permite esas escrituras para comandos ordinarios, y luego verifica. Toma una copia de cada `.git/config` en el workspace antes del comando, compara después de que termina, y elimina cualquier configuración que se haya agregado y que haría que git ejecute un programa, como un fsmonitor, un credential helper, un paginador personalizado o un alias de shell. El resultado le dice a la IA qué se eliminó. Los procesos que el comando dejó corriendo en segundo plano se detienen.

### Redes desde dentro del sandbox

Como srt solo enruta tráfico HTTP, HTTPS y SOCKS, herramientas como `ssh` necesitan ayuda. La CLI enruta `ssh`, `scp` y `sftp` a través del proxy del sandbox. Para clientes de bases de datos y otras herramientas de TCP crudo, un `frely tunnel` integrado abre un puerto local dentro del sandbox. Si te conectas a internet a través de un proxy local (Clash, por ejemplo), `frely sandbox proxy` permite que el sandbox lo use. Frely solo lee tu configuración de proxy; no la cambia.

### Lo que el uso de srt por Frely CLI no cubre

Preferimos que conozcas los límites:

- **La red saliente está abierta por defecto.** La CLI no restringe qué dominios puede alcanzar un comando, para que npm, pip, git y curl sigan funcionando. Esto significa que las reglas de archivos son lo que protege tus datos: un secreto que el sandbox puede leer también puede enviarse hacia afuera. La protección viene de mantener las credenciales fuera de alcance, no de bloquear la red.
- **La mayor parte de tu carpeta de usuario es legible.** La lista de denegación cubre ubicaciones de credenciales bien conocidas, no todo lo privado. Los archivos que guardes en otros lugares (un archivo `.env` en otro proyecto, notas, documentos) pueden ser leídos por un comando que se ejecute en el sandbox.
- **El acceso aprobado es acceso real.** Si apruebas el acceso a las llaves SSH, el comando puede leer las llaves. Aprueba solo lo que entiendes, y prefiere la opción más acotada.
- **La protección de `.git/config` es una verificación después del hecho.** Deshace las configuraciones peligrosas después de que el comando termina. Revisa las configuraciones conocidas de git que ejecutan programas, y anota un límite propio: un proceso que se escapa de la limpieza entre comandos se detecta en la siguiente verificación, no al instante.
- **Confina comandos, no personas.** El sandbox limita lo que un comando puede tocar. No te impide aprobar algo poco prudente, y no reemplaza una pantalla bloqueada ni un inicio de sesión de cuenta robusto.
- **srt es una vista previa de investigación en beta,** y Frely CLI hereda ese estatus.

## La versión corta

Una IA que puede ejecutar comandos es tan segura como los muros alrededor de esos comandos. srt construye los muros a nivel del sistema operativo: no escribir en ningún lugar excepto el proyecto, ocultar las carpetas de credenciales y enviar el tráfico de red a través de un guardián. Frely CLI mantiene esos muros en pie por defecto, hace de abrirlos un paso deliberado, acotado y aprobado por humanos, y te dice con claridad lo que no cubre.
