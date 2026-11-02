---
title: ¿Cómo instalo un Frely Agent, Prompt o Skill?
description: Instala y ejecuta un Frely Agent, Prompt o Skill desde la terminal.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 13
---

# ¿Cómo instalo un Frely Agent, Prompt o Skill?

Agent: `frely item install <username/name> --host claude-code --scope global` (hosts: chatgpt, codex, claude-code, pi, generic). Ejecútalo con `printf '%s' 'Your task' | frely agent run <username/name> --input-stdin --json`. Elementos de Marketplace: `frely item install <username/skill-name> --host claude-code`. Busca el nombre en la página de perfil del Creator (`frely.cloud/@<username>`) o en el enlace para compartir que te envió el Creator; los elementos de los Creators no aparecen en el Store público, que muestra únicamente los productos que Frely elige. La primera llamada abre un navegador para la autorización, y una parte de pago se instala solo si tu cuenta tiene un pase; de lo contrario, el comando indica cómo comprar uno. Frely nunca sobrescribe una carpeta que no haya instalado ni un archivo que hayas editado.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
