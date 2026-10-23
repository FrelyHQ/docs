---
title: モデルとAPIキーの使い方
description: APIキー、クライアント設定、利用状況、リクエストが失敗したときの対処法。
applies_to: any
updated: 2026-10-21
order: 3
---

# モデルとAPIキーの使い方

## APIキーを作成するにはどうすればよいですか？
<!-- id: api-key -->

コンソールのAPIキーページを開いて作成してください。キーはモデル呼び出しを許可するものであり、管理操作を許可するものではありません。クライアントの保護された設定に保管してください。Git、スクリーンショット、チャットには決して記載しないでください。キーを取り消すと、その後の使用は停止されます。

Related: [ガイド](https://frely.cloud/docs/)

Console: [あなたのAPIキー](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## Frely APIのベースURLとは何ですか？
<!-- id: base-url -->

https://api.frely.cloud です。必ず https を使用してください。平文の http によるリクエストは拒否されるため、http://api.frely.cloud と設定したクライアントは失敗します。同じアドレスがすべてのプロトコルに対応しています。たとえば https://api.frely.cloud/v1/chat/completions、/v1/responses、/v1/messages、/v1/embeddings、および /v1/models のモデル一覧です。クライアントによっては、末尾に /v1 を付けたベース URL（https://api.frely.cloud/v1）を入力し、エンドポイントのパスを自分で追加するものがあります。

Related: [ClaudeでFrelyを使う](https://frely.cloud/docs/claude/) · [ChatGPTでFrelyを使う](https://frely.cloud/docs/chatgpt/)

Console: [APIテスト（ベースURLとすぐに使えるcurlコマンドを表示）](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## APIリクエストの認証はどう行えばよいですか？
<!-- id: authentication -->

APIキーをベアラートークンとして送信してください：Authorization: Bearer <your key>。ボディのあるリクエストには Content-Type: application/json を追加してください。有効なキーのないリクエストは 401 を返します。キーが許可するのはモデル呼び出しのみで、アカウント管理ではありません。

Console: [あなたのAPIキー](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## エラーレスポンスはどのような形式ですか？
<!-- id: errors -->

{"error":{"message","type","param","code"}} という形式のJSONボディです。type はHTTPステータスに対応します：401 は authentication_error、402 は insufficient_quota、403 は permission_error、404 は not_found_error、408 と 504 は timeout_error、429 は rate_limit_error、その他の 4xx は invalid_request_error、503 は service_unavailable_error、その他の 5xx は server_error です。すべてのレスポンスには x-request-id ヘッダーが付いています。サポートに問い合わせるときはこれを控えておいてください。再試行可能な失敗には、秒単位の Retry-After ヘッダーが含まれる場合があります。

Related: [サポートに問い合わせる](https://frely.cloud/support/)

Console: [リクエスト履歴](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## AIアプリやクライアントには何を入力すればよいですか？
<!-- id: client-settings -->

3つの値です。選択したプロトコル用の公開サービスアドレス（内部アドレスではありません）、あなた自身のAPIキー、そしてアカウントから見える公開モデル名。正確な値はアカウントの案内に表示されます。

Related: [ClaudeでFrelyを使う](https://frely.cloud/docs/claude/) · [ChatGPTでFrelyを使う](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## ClaudeやChatGPTにFrelyを追加するにはどうすればよいですか？
<!-- id: connector -->

Frely をコネクタ（connector）として追加し、FrelyMCP のアドレスをMCPサーバーURLとして指定し、OAuth を選択して、Frely にサインインしてアクセスを承認してください。手順ガイドに各画面が表示されています。

Related: [FrelyMCPガイド](https://frely.cloud/docs/frelymcp/) · [ClaudeでFrelyを使う](https://frely.cloud/docs/claude/) · [ChatGPTでFrelyを使う](https://frely.cloud/docs/chatgpt/)

## モデルが一覧に表示されるのに呼び出せません。
<!-- id: no-access -->

一覧に表示されていることが、呼び出しの許可を意味するわけではありません。ご自身のプラン、残高、利用枠、サービスの規約を確認し、Team に所属している場合は権限のある管理者に尋ねてください。キーをローテーションしても制限は回避できません。

API tools: `models.available`, `budget.get`, `credits.account`

## リクエストが失敗するか、タイムアウトします。
<!-- id: request-failed -->

時刻、プロトコル、モデル名、リクエストIDを、機密情報を除いた形でメモしておき、リクエスト履歴を確認してください。タイムアウトや接続の切断は、何も使用されていなかったことの証明にはならないため、再試行の前に利用状況を確認してください。認証情報、リクエストボディ、生のエラーダンプは誰にも送信しないでください。

Related: [サポートに問い合わせる](https://frely.cloud/support/)

Console: [リクエスト履歴](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## モデルの出力を信頼できますか？
<!-- id: output-quality -->

モデルの出力には誤りが含まれることがあり、Frely は正確性を保証しません。安全が重要な場面、法務、金融、医療、セキュリティ、本番環境で使用する前に、必ず内容を確認してください。

Related: [利用規約](https://frely.cloud/terms/)
