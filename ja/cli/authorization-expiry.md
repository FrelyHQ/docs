---
title: デバイスへのアクセスはどのくらい有効か、更新方法は？
description: デバイスアクセスの有効期間と更新方法。
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 16
---

# デバイスへのアクセスはどのくらい有効で、更新するには？

デバイス MCP へのアクセスは、デフォルトで 90 日間有効です。有効期限が切れる前に `frely link on --days 1..365` を実行して更新するか、別の期間を指定してください。期限が切れると、リクエストとキューに入った処理は停止します(完了済みの書き込みが取り消されることはありません)。`frely link on` を実行すると、再度承認を求められます。URL が変わることはありません。お使いのコンピューターは、Frely ウェブサイトの My Devices で管理できます。

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [Device MCP ドキュメント](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
