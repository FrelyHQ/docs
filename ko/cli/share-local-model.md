---
title: 로컬 모델(Ollama, LM Studio, vLLM)은 어떻게 공유하나요?
description: 로컬 모델을 Frely Provider로 공유합니다.
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# 로컬 모델(Ollama, LM Studio, vLLM)은 어떻게 공유하나요?

`frely service share model ollama` 명령이나 `frely service share model openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"` 명령을 실행하세요. 이렇게 하면 루프백(loopback) OpenAI 호환 엔드포인트가 빈 개인 Provider 슬롯 하나를 사용하여 개인 Frely Provider로 게시됩니다. 빈 슬롯이 없거나 `--creator` 옵션을 사용하면 Creator 플랜에 집계되는 Creator Provider가 생성됩니다. Provider가 사용되는 동안에는 컴퓨터를 온라인 상태로 유지하고, 런타임이 사용량을 반환하는지 확인하세요. 설정이 중간에 중단되면 같은 명령을 다시 실행하세요. `frely provider list`를 실행하면 내 Provider 목록을 확인할 수 있습니다.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
