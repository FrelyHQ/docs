---
title: Как предоставить общий доступ к локальной модели (Ollama, LM Studio, vLLM)?
description: Поделитесь локальной моделью как Frely Provider.
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# Как предоставить общий доступ к локальной модели (Ollama, LM Studio, vLLM)?

Выполните `frely provider share ollama` или `frely provider share openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"`. Эта команда публикует loopback-эндпоинт, совместимый с OpenAI, как личный Frely Provider, задействуя один свободный личный слот Provider. Если свободного слота нет или указан флаг `--creator`, будет создан Creator Provider, учитываемый в рамках вашего плана Creator. Пока Provider используется, держите компьютер онлайн и убедитесь, что среда выполнения возвращает данные об использовании. Если настройка прервалась на середине, запустите ту же команду ещё раз. `frely provider list` показывает список ваших Providers.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
