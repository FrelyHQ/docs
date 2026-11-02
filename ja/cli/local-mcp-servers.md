---
title: リモートのAIに、自分のコンピュータ上で動いているMCPサーバーを使わせるにはどうすればよいですか？
description: 自分のコンピュータ上で動いているMCPサーバーを、リモートのAIに使わせることができます。
applies_to: any
updated: 2026-11-02
site: cli
category: Using your computer
order: 11
---

# リモートのAIに、自分のコンピュータ上で動いているMCPサーバーを使わせるにはどうすればよいですか？

Frely は、ループバックのみで待ち受けているサーバーを検出します。それらの一覧は `frely link local list` で表示できます。それ以外のサーバーは `frely link local add <name> --url http://127.0.0.1:<port>/mcp` で追加でき、stdio サーバーの場合は `frely link local add <name> -- <command> [args...]` を使用します。各サーバーは、Frely の接続ページで 1 つずつ有効にするまで、リモートクライアントからは見えない状態が続きます。有効にしたサーバーは、コマンドサンドボックスの外で、あなたのユーザーアカウントとして実行されます。

Related: [接続ページ](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
