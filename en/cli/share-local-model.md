---
title: How do I share a local model (Ollama, LM Studio, vLLM)?
description: Share a local model as a Frely Provider.
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# How do I share a local model (Ollama, LM Studio, vLLM)?

Run `frely provider share ollama`, or `frely provider share openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"`. This publishes a loopback OpenAI-compatible endpoint as a personal Frely Provider using one empty personal Provider slot. With no empty slot, or with `--creator`, it creates a Creator Provider counted against your Creator plan. Keep the computer online while it is used and make sure the runtime returns usage. If setup stops halfway, run the same command again. `frely provider list` shows your Providers.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
