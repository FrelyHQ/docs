---
title: ターミナルや AI から Frely アカウント(API Key、Credit、プラン、注文)を管理するにはどうすればよいですか？
description: frely api を使って API Key、Credit、プラン、注文を管理します。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# ターミナルや AI から Frely アカウント(API Key、Credit、プラン、注文)を管理するにはどうすればよいですか？

操作の一覧を表示するには `frely api list` を、1 つの操作の詳細を確認するには `frely api describe <name>` を、操作を実行するには `frely api call <name> --json '{...}'` を使用します。例： `frely api call agents.list`、`frely api call usage.summary`。FrelyMCP に接続された AI クライアントは、`frely_list` と `frely_call` のツールを通じて同じ操作を利用できます。最初の `frely api` コマンドを実行すると、別途 OAuth 認証のためのブラウザーが開きます。操作は https://frely.cloud/mcp で提供されています。

Related: [frely api ドキュメント](https://github.com/FrelyHQ/frely-cli/blob/main/docs/api.md) · [Frely アカウント API エンドポイント](https://frely.cloud/mcp) · [Frely App (My Devices)](https://frely.cloud/app/)
