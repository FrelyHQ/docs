---
title: デバイスと Frely CLI
description: CLI のインストール、コンピューターの関連付け、動作の維持、そして削除。
applies_to: any
updated: 2026-10-21
order: 4
---

# デバイスと Frely CLI

## Frely CLI をインストールしてコンピューターを関連付けるには？
<!-- id: install -->

インストールスクリプトを実行します：curl -fsSL https://frely.cloud/install.sh | sh。frely がインストールされ、frely mcp start が実行されます。ブラウザが開いてログインを求められ（新規アカウントは同じページで登録できます）、デバイスの承認を経て、MCP URL が表示されます。更新するときは、いつでも再実行できます。

Related: [FrelyMCP ガイド](https://frely.cloud/docs/frelymcp/)

## AI アプリにデバイスが表示されません。
<!-- id: no-device -->

そのコンピューターで frely mcp start を実行し、CLI が AI アプリと同じ Frely アカウントでログインしていることを確認します。

Related: [FrelyMCP ガイド](https://frely.cloud/docs/frelymcp/)

## デバイスがオフラインと表示されます。
<!-- id: offline -->

コンピューターの電源を入れ、インターネットに接続して、frely mcp start をもう一度実行します。frely doctor はアカウント、インストール、バージョン、MCP、サービスの状態を表示します。詳細は -v を付けます。

Console: [マイデバイス](https://frely.cloud/user/device)

## デバイスのアクセスが期限切れになりました。
<!-- id: expired -->

デバイスの MCP アクセスはデフォルトで 90 日間です。frely mcp start を実行して再度承認してください（frely mcp start --days に 1 から 365 の数値を付けると、前倒しで更新できます）。MCP URL は変わりません。コンピューターの管理は、Frely ウェブサイトの「マイデバイス」で行えます。

Console: [マイデバイス](https://frely.cloud/user/device)

## AI アプリが一部のフォルダーの読み取り権限を求めるのはなぜですか？
<!-- id: permissions -->

コマンドはサンドボックス内で実行されます。サンドボックスは ~/.ssh や ~/.aws などの認証情報フォルダーをブロックし、ツールは登録されたワークスペースしか扱いません。タスクにそれ以上の権限が必要なときは、AI アプリが申請し、Frely ウェブサイトであなたが許可と有効期間を決めます。後からいつでも取り消せます。AI アプリが自分の申請を承認することはありません。

Related: [FrelyMCP ガイド](https://frely.cloud/docs/frelymcp/)

## コンピューターから Frely を削除するには？
<!-- id: uninstall -->

ローカルのターミナルで frely uninstall を実行します。まずすべての一覧を表示し、yes と入力すると削除します。このコンピューターのアクセスを取り消し、サービス、保存されたログイン、デバイス ID、設定、キャッシュを削除し、最後に frely プログラムを削除します。Provider と Agent はあなたのアカウントに残ります。
