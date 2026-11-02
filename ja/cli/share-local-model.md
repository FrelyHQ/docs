---
title: ローカルモデル（Ollama、LM Studio、vLLM）を共有するにはどうすればよいですか？
description: ローカルモデルを Frely Provider として共有します。
applies_to: any
updated: 2026-10-29
site: cli
category: Using your computer
order: 12
---

# ローカルモデル（Ollama、LM Studio、vLLM）を共有するにはどうすればよいですか？

`frely provider share ollama` を実行するか、`frely provider share openai-compatible --url http://127.0.0.1:8080/v1 --models model-a,model-b --name "Local GPU"` を実行してください。このコマンドは、ループバックの OpenAI 互換エンドポイントを、空きの個人用 Provider スロットを 1 つ使用して、個人用 Frely Provider として公開します。空きスロットがない場合や、`--creator` を指定した場合には、Creator プランの枠にカウントされる Creator Provider が作成されます。使用中はコンピューターをオンラインのままにし、ランタイムが使用状況を返すようにしてください。セットアップが途中で停止した場合は、同じコマンドをもう一度実行してください。`frely provider list` で自分の Provider を確認できます。

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
