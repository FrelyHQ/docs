---
title: デバイスと Frely CLI
description: CLI のインストール、コンピューターの連携、動作の維持、削除について。
applies_to: any
updated: 2026-10-21
order: 4
---

# デバイスと Frely CLI

## Frely CLI をインストールしてコンピューターを連携するにはどうすればよいですか？
<!-- id: install -->

インストールスクリプトを実行します：curl -fsSL https://frely.cloud/install.sh | sh。これにより frely がインストールされ、frely mcp start が実行されます。サインインのためにブラウザーが開き(新しいアカウントは同じページで登録できます)、デバイスの承認を求めた後、MCP URL が表示されます。更新するときは、いつでももう一度実行してください。

Related: [FrelyMCP ガイド](https://frely.cloud/docs/frelymcp/)

## AI アプリにデバイスが表示されません。
<!-- id: no-device -->

コンピューター上で frely mcp start を実行し、CLI が AI アプリと同じ Frely アカウントにサインインしていることを確認してください。

Related: [FrelyMCP ガイド](https://frely.cloud/docs/frelymcp/)

## デバイスがオフラインと表示されます。
<!-- id: offline -->

コンピューターの電源を入れ、インターネットに接続して、frely mcp start をもう一度実行してください。frely doctor では、アカウント、インストール、バージョン、MCP、サービスの状態を確認できます。詳細を表示するには -v を付けて実行してください。

Console: [My Devices(マイデバイス)](https://frely.cloud/user/device)

## デバイスのアクセスの有効期限が切れています。
<!-- id: expired -->

デバイスの MCP アクセスはデフォルトで 90 日間有効です。frely mcp start を実行して再度承認してください(frely mcp start --days に 1 から 365 までの数値を付けると、期限を前もって更新できます)。MCP URL は変わりません。ご自身のコンピューターは、Frely ウェブサイトの My Devices で管理できます。

Console: [My Devices](https://frely.cloud/user/device)

## AI アプリが一部のフォルダーの読み取り許可を求めるのはなぜですか？
<!-- id: permissions -->

コマンドはサンドボックス内で実行されます。サンドボックスは ~/.ssh や ~/.aws などの認証情報フォルダーへのアクセスをブロックし、ツールが触れるのは登録済みのワークスペースだけです。タスクにそれ以上のアクセスが必要な場合は、アプリが必ず確認を求めます。許可するかどうかとその有効期間は Frely サイト上で自分で判断でき、後で取り消すこともできます。AI アプリが自分の要求を自分で承認することはできません。

Related: [FrelyMCP ガイド](https://frely.cloud/docs/frelymcp/)

## コンピューターから Frely を削除するにはどうすればよいですか？
<!-- id: uninstall -->

ローカルのターミナルで frely uninstall を実行します。まず削除対象がすべて一覧表示され、yes と入力すると削除が実行されます。このコンピューターのアクセスを取り消し、サービス、保存済みのログイン情報、デバイス ID、設定、キャッシュ、そして最後に frely プログラムを削除します。アカウント内のプロバイダーと Agent は保持されます。
