---
title: 如何分享本機模型（Ollama、LM Studio、vLLM）？
description: 將本機模型分享為 Frely 提供者。
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# 如何分享本機模型（Ollama、LM Studio、vLLM）？

執行 `frely service share model ollama`，或執行 `frely service share model openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"`。這會使用一個空閒的個人提供者名額，將回環 OpenAI 相容端點發佈為個人 Frely 提供者。如沒有空閒名額，或加上 `--creator`，則會建立 Creator 提供者，並計入你的 Creator 計劃。使用期間請保持電腦連線，並確保執行環境會回傳用量。如設定中途停止，請再次執行相同指令。`frely provider list` 會顯示你的提供者。

Related: [Frely App（My Devices，我的裝置）](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
