---
title: 如何分享本地模型（Ollama、LM Studio、vLLM）？
description: 将本地模型分享为 Frely 提供商。
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# 如何分享本地模型（Ollama、LM Studio、vLLM）？

运行 `frely service share model ollama`，或运行 `frely service share model openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"`。该命令会使用一个空余的个人提供商槽位，将本机回环（loopback）的 OpenAI 兼容端点发布为个人 Frely 提供商。如果没有空余槽位，或使用了 `--creator`，则会创建一个 Creator 提供商，并计入你的 Creator 套餐。在使用期间请保持计算机在线，并确保运行时（runtime）会返回用量信息。如果设置在中途停止，请重新运行同一命令。`frely provider list` 会显示你的提供商。

Related: [Frely App（我的设备）](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
