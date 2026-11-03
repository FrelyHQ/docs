---
title: How do I share a local model (Ollama, LM Studio, vLLM)?
description: Share a local model and get an AccessPoint for it.
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# How do I share a local model (Ollama, LM Studio, vLLM)?

Run `frely service share model ollama`, or `frely service share model openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"`. This publishes the endpoint's models and prints the AccessPoint made for each one: it is priced 0 and you can call it right away. Set a price and put it in a Plan in Frely to sell it. It uses one empty personal Provider slot; with no empty slot, or with `--creator`, it counts against your Creator plan. Keep the computer online while it is used and make sure the runtime returns usage. If setup stops halfway, run the same command again.

The endpoint can be on this computer or an IP address on your private network (for example a model gateway at `http://192.168.1.20:3000/v1`). Frely asks you to type `yes` in a terminal on this computer to confirm a network address, and only that address and port are ever reached. Add `--key-stdin` to give the endpoint's own key on standard input; it is kept in this computer's secure storage and never uploaded.

To use a model only from tasks on this computer, without sharing it, register it with `frely provider add` instead: it creates nothing in your Frely account and uses no Provider slot. `frely provider list` shows both kinds.

`frely provider share` was removed. Replace it with `frely service share model` in your scripts.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
