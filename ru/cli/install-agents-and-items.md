---
title: Как установить Frely Agent, промпт или Skill?
description: Установка и запуск Frely Agent, промпта или Skill из терминала.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 13
---

# Как установить Frely Agent, промпт или Skill?

Agent: `frely item install <username/name> --host claude-code --scope global` (хосты: chatgpt, codex, claude-code, pi, generic). Запустите его командой `printf '%s' 'Your task' | frely agent run <username/name> --input-stdin --json`. Элементы из маркетплейса: `frely item install <username/skill-name> --host claude-code`. Имя можно найти на странице профиля Creator (`frely.cloud/@<username>`) или в ссылке, которой Creator поделился с вами; элементы Creator не отображаются в публичном Store — там представлены только продукты, отобранные Frely. При первом вызове открывается браузер для авторизации, а платная часть устанавливается только в том случае, если на вашем аккаунте есть пропуск; иначе команда подскажет, как его приобрести. Frely никогда не перезаписывает папки, которые не устанавливала сама, и файлы, которые вы редактировали.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
