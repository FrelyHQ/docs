---
title: Usar Frely con Skill y CLI
description: Instala el Frely CLI y su Skill para que tu agente de IA pueda usar tu cuenta de Frely y controlar tus propias computadoras desde una terminal.
applies_to: any
updated: 2026-11-02
order: 0
---

# Usar Frely con Skill y CLI

El Frely CLI es la línea de comandos de tu cuenta de Frely. Su Skill le enseña a un agente de IA que tenga una shell (Claude Code, Codex, pi y similares) a usar esa línea de comandos: iniciar sesión, llamar a tu cuenta de Frely, instalar lo que compraste y ejecutar comandos en tus propias computadoras. Esta es la forma recomendada de usar Frely desde un agente de IA. Si tu aplicación de IA no puede ejecutar comandos, usa en su lugar la guía de FrelyMCP (la alternativa).

## Antes de empezar
<!-- id: before -->

Necesitas una cuenta de Frely (inicia sesión en frely.cloud) y un agente de IA que pueda ejecutar comandos de shell en la computadora donde instales el CLI. El CLI funciona en macOS, Linux y Windows.

## Instalar el CLI
<!-- id: install -->

Ejecuta el comando de tu sistema. Solo instala el programa `frely`.

```sh
curl -fsSL https://frely.cloud/install.sh | sh
```

En Windows, ejecuta esto en PowerShell:

```sh
curl.exe -fsSLo "$env:TEMP\frely-install.ps1" https://frely.cloud/install.ps1; powershell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\frely-install.ps1"
```

## Iniciar sesión
<!-- id: login -->

Ejecuta el comando de abajo. Abre tu navegador para que puedas iniciar sesión o registrarte y aprobar esta computadora. En una computadora sin navegador, ejecuta `frely login --email` e ingresa el código enviado a tu bandeja de entrada.

```sh
frely login
```

## Instalar la Skill
<!-- id: skill -->

Instala la Skill de `frely` en tu agente de IA. Reemplaza `<host>` por `claude-code`, `codex`, `pi`, `chatgpt` o `generic`. Luego reinicia la sesión del agente para que encuentre la Skill.

```sh
frely skill install --host <host>
```

## Pedirle cosas a tu agente
<!-- id: use -->

Dile a tu agente lo que quieres con palabras simples, por ejemplo: "Lista mis computadoras de Frely", "Ejecuta las pruebas en mi computadora de la oficina" o "Instala la Skill que compré en Frely". El agente ejecuta los comandos de `frely` por ti. La primera vez que controle una computadora, Frely te pedirá que apruebes en el sitio de Frely con un código corto. El agente no puede aprobar su propia solicitud.

## Hacer controlable una computadora
<!-- id: device -->

Para que tu agente pueda trabajar en otra computadora, ejecuta esto en esa computadora. Inicia sesión, aprueba la computadora e inicia el servicio en segundo plano. Para un servidor sin navegador, crea un comando de instalación de un solo uso en la Frely App, en My Devices (Mis dispositivos).

```sh
frely link on
```

## Comandos que usa tu agente
<!-- id: commands -->

| Comando | Qué hace |
| --- | --- |
| `frely devices` | Muestra tus computadoras y si están en línea. |
| `frely run <device> -- <command>` | Ejecuta un comando en una computadora. |
| `frely read <device>:<path>` | Lee un archivo o una carpeta en una computadora. |
| `frely edit <device>:<path> --from <file>` | Escribe un archivo en una computadora. |
| `frely item install <username/name> --host <host>` | Instala una Skill, un prompt o un Agent desde Frely. |
| `frely api list` | Muestra las herramientas de la cuenta que tu agente puede llamar. |
| `frely doctor` | Verifica el inicio de sesión, la instalación y la conexión. |

## Si algo no funciona
<!-- id: help -->

Si el agente no usa Frely, reinicia la sesión del agente y verifica que `frely skill install` haya terminado. Si no se encuentra `frely`, abre una terminal nueva y ejecútalo de nuevo. Si una computadora aparece como desconectada, ejecuta `frely link on` en ella. Si un comando pide aprobación, abre el enlace que muestra y confirma en el sitio de Frely. Otras preguntas: support@frely.cloud.
