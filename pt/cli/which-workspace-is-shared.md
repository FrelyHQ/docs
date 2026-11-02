---
title: A que pasta tem acesso a IA?
description: Que pastas a IA pode utilizar e como as alterar.
applies_to: any
updated: 2026-11-02
site: cli
category: Getting started
order: 5
---

# A que pasta tem acesso a IA?

Por predefinição, a pasta `~/Frely`; o instalador cria-a. Os computadores configurados antes desta alteração mantêm a pasta que já partilham. Defina `FRELY_WORKSPACE=/path` antes de instalar para partilhar outra pasta. Depois, utilize `frely link workspace add <path>` para partilhar mais pastas, `frely link workspace remove <path>` para deixar de partilhar uma, e `frely link workspace list` para vê-las todas.

Quando um cliente de IA precisa de uma pasta fora das partilhadas, pergunta-lhe, e é na web que autoriza essa pasta, por tempo limitado ou de forma permanente. A autorização permanente funciona para uma pasta, não para a sua pasta pessoal nem para as pastas acima dela, e exige a sua chave de acesso ou código de autenticação. As pastas autorizadas na web estão listadas na página do dispositivo, onde as pode remover a qualquer momento. Os ficheiros de credenciais e de arranque da shell dentro de uma pasta autorizada continuam protegidos.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Documento MCP do dispositivo](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md)
