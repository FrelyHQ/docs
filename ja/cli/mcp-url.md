---
title: 自分のMCP URLは何ですか？変わりますか？
description: FrelyMCPのアドレスと、その表示方法。
applies_to: any
updated: 2026-11-02
site: cli
category: Connecting AI clients
order: 8
---

# 自分のMCP URLは何ですか？変わりますか？

FrelyMCPのアドレスは、お使いのアカウントのすべてのコンピューターで共通の https://mcp.frely.cloud/mcp です。このアドレスが変わることはなく、秘密情報も含まれていません。OAuthトークンはクライアント側が保持します。URLを表示するには `frely link on` を実行してください。また、`frely link status`(スクリプトで使う場合は `--json` を追加)を実行すると、URL、ワークスペース、認証の有効期限、サービスの状態が表示されます。

Related: [FrelyMCPエンドポイント](https://mcp.frely.cloud/mcp) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
