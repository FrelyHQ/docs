---
title: ¿Cómo comparto un modelo local (Ollama, LM Studio, vLLM)?
description: Comparte un modelo local como Proveedor de Frely.
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# ¿Cómo comparto un modelo local (Ollama, LM Studio, vLLM)?

Ejecuta `frely provider share ollama`, o `frely provider share openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"`. Esto publica un endpoint de loopback compatible con OpenAI como Proveedor personal de Frely, usando un espacio de Proveedor personal vacío. Si no hay ningún espacio vacío, o si usas `--creator`, crea un Proveedor Creator que se contabiliza en tu plan Creator. Mantén la computadora en línea mientras se use y asegúrate de que el runtime devuelva los datos de uso. Si la configuración se interrumpe a mitad de proceso, ejecuta el mismo comando de nuevo. `frely provider list` muestra tus Proveedores.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
