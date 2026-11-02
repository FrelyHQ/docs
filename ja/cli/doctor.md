---
title: 動作しない場合の診断方法は？
description: frely doctor を使ってサインイン、インストール、サービスの問題を診断します。
applies_to: any
updated: 2026-11-02
site: cli
category: Maintenance
order: 19
---

# 動作しない場合、どうやって診断すればよいですか？

`frely doctor` を実行すると、サインイン、インストール状況、最新バージョン、MCP、サービスの状態を確認できます。`-v` を付けると、設定ファイルのパス、認証の有効期限、最後のハートビート、機密情報を除いたエラー情報も表示されます。デバイスがオフラインと表示される場合は `frely link on` を実行してください。このコマンドは再実行しても安全です。それでも問題が解決しない場合は、Discord で質問するか、`frely doctor -v` の出力を添えて GitHub issue を作成してください。

Related: [サービス メンテナンス ドキュメント](https://github.com/FrelyHQ/frely-cli/blob/main/docs/service-maintenance.md) · [Discord](https://discord.gg/hugMuSveb) · [GitHub の issue](https://github.com/FrelyHQ/frely-cli/issues)
