---
title: ¿Cómo inicio o cierro sesión?
description: Inicia sesión, cierra sesión y detén el control remoto de la computadora.
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 15
---

# ¿Cómo inicio o cierro sesión?

`frely link on` inicia sesión cuando hace falta, así que no necesitas hacer un inicio de sesión aparte primero. Usa `frely login` para iniciar sesión de forma independiente (agrega `--no-browser` en una máquina sin navegador, o `--email <address>` y luego `--code <6-digit code>`), y `frely logout` para cerrar sesión; al cerrar sesión también se revoca la autorización de `frely api`. Para detener el control remoto de la computadora, usa `frely link stop` (pausa) o `frely link off` (revoca todos los clientes y desinstala el servicio). `frely link off` también bloquea el control remoto en esta computadora: la página web de Frely no puede volver a activarlo, y solo `frely link on` en esta computadora levanta el bloqueo.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (Mis dispositivos)](https://frely.cloud/app/)
