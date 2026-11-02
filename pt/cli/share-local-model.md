---
title: Como posso partilhar um modelo local (Ollama, LM Studio, vLLM)?
description: Partilhe um modelo local como Fornecedor Frely.
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# Como posso partilhar um modelo local (Ollama, LM Studio, vLLM)?

Execute `frely provider share ollama` ou `frely provider share openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"`. Isto publica um endpoint de loopback compatível com OpenAI como um Fornecedor Frely pessoal, utilizando uma vaga pessoal de Fornecedor vazia. Se não houver nenhuma vaga vazia, ou se usar `--creator`, é criado um Fornecedor Creator, contabilizado no seu plano Creator. Mantenha o computador ligado enquanto estiver a ser utilizado e certifique-se de que o runtime devolve os dados de utilização. Se a configuração parar a meio, execute novamente o mesmo comando. `frely provider list` mostra os seus Fornecedores.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
