---
title: Como instalar um Agent, um Prompt ou um Skill da Frely?
description: Instale e execute um Agent, um Prompt ou um Skill da Frely a partir do terminal.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 13
---

# Como instalar um Agent, um Prompt ou um Skill da Frely?

Agent: `frely item install <username/name> --host claude-code --scope global` (anfitriões: chatgpt, codex, claude-code, pi, generic). Execute-o com `printf '%s' 'Your task' | frely agent run <username/name> --input-stdin --json`. Itens do marketplace: `frely item install <username/skill-name> --host claude-code`. Encontre o nome na página de perfil do Creator (`frely.cloud/@<username>`) ou na ligação de partilha que o Creator lhe enviou; os itens de Creators não constam da Store pública, que mostra apenas os produtos escolhidos pela Frely. A primeira chamada abre um navegador para a autorização, e uma parte paga só é instalada se a sua conta tiver um passe; caso contrário, o comando indica como comprar um. A Frely nunca sobrescreve uma pasta que não tenha instalado nem um ficheiro que tenha editado.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
