---
title: AI はどのフォルダーにアクセスできますか？
description: AI が利用できるフォルダーと、その変更方法。
applies_to: any
updated: 2026-11-02
site: cli
category: Getting started
order: 5
---

# AI はどのフォルダーにアクセスできますか？

デフォルトでは `~/Frely` フォルダーで、インストーラーが作成します。この変更より前にセットアップされたコンピューターでは、すでに共有しているフォルダーがそのまま使われます。別のフォルダーを共有するには、インストール前に `FRELY_WORKSPACE=/path` を設定してください。インストール後は、`frely link workspace add <path>` でフォルダーを追加で共有、`frely link workspace remove <path>` で共有を停止、`frely link workspace list` ですべての一覧を確認できます。

AI クライアントが共有フォルダー以外のフォルダーを必要とする場合は、ユーザーに確認が届き、Web 上でそのフォルダーを期間限定または永久に許可できます。永久の許可は 1 つのフォルダーに対してのみ有効で、ホームフォルダーやその上位のフォルダーには使えず、パスキーまたは認証アプリのコードが必要です。Web 上で許可したフォルダーはデバイスページに一覧表示され、いつでもそこから削除できます。許可したフォルダー内の認証情報ファイルやシェルの起動ファイルは、引き続き保護されます。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [デバイス MCP ドキュメント](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md)
