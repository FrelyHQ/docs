---
title: モデルと API キーの利用
description: API キー、クライアント設定、使用量、リクエストが失敗したときの対処。
applies_to: any
updated: 2026-10-21
order: 3
---

# モデルと API キーの利用

## API キーを作成するには？
<!-- id: api-key -->

ワークスペースで API キーのページを開き、作成します。キーはモデル呼び出しを許可するもので、管理操作はできません。クライアントの保護された設定に保管してください。Git、スクリーンショット、チャットには決して置かないでください。キーを失効させると、それ以降の使用は止まります。

Related: [ガイド](https://frely.cloud/docs/)

Console: [あなたの API キー](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## Frely API のベース URL は？
<!-- id: base-url -->

https://api.frely.cloud です。必ず https を使います。平文の http でのリクエストは拒否されるため、http://api.frely.cloud を設定したクライアントは失敗します。同じアドレスがすべてのプロトコルに対応します。例：https://api.frely.cloud/v1/chat/completions、/v1/responses、/v1/messages、/v1/embeddings、および /v1/models のモデル一覧。クライアントによっては、/v1 で終わるベース URL（https://api.frely.cloud/v1）を入力して、エンドポイントのパスを自分で追加するものもあります。

Related: [Claude で Frely を使う](https://frely.cloud/docs/claude/) · [ChatGPT で Frely を使う](https://frely.cloud/docs/chatgpt/)

Console: [API テスト（ベース URL とそのまま使える curl コマンドを表示）](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## API リクエストを認証するには？
<!-- id: authentication -->

API キーを Bearer トークンとして送ります：Authorization: Bearer <your key>。ボディのあるリクエストには Content-Type: application/json を付けます。有効なキーのないリクエストは 401 になります。キーが許可するのはモデル呼び出しのみで、アカウント管理はできません。

Console: [あなたの API キー](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## エラーレスポンスはどのような形ですか？
<!-- id: errors -->

{"error":{"message","type","param","code"}} の形の JSON ボディです。type は HTTP ステータスに対応します：401 authentication_error、402 insufficient_quota、403 permission_error、404 not_found_error、408 と 504 timeout_error、429 rate_limit_error、その他の 4xx invalid_request_error、503 service_unavailable_error、その他の 5xx server_error。すべてのレスポンスに x-request-id ヘッダーが付きます。サポートに連絡するときはこれを残してください。再試行できる障害には、秒単位の Retry-After ヘッダーが付くことがあります。

Related: [サポートに連絡](https://frely.cloud/support/)

Console: [リクエスト履歴](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## AI アプリやクライアントには何を入力しますか？
<!-- id: client-settings -->

3 つの値です。選択したプロトコルの公開サービスアドレス（内部アドレスではない）、自分の API キー、アカウントから見える公開モデル名。正確な値はアカウントの案内に表示されます。

Related: [Claude で Frely を使う](https://frely.cloud/docs/claude/) · [ChatGPT で Frely を使う](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## Claude や ChatGPT に Frely を追加するには？
<!-- id: connector -->

Frely をコネクタとして追加し、MCP サーバーの URL に FrelyMCP のアドレスを入力し、認証は OAuth を選び、Frely にログインしてアクセスを許可します。手順ごとのガイドに各画面が示されています。

Related: [FrelyMCP ガイド](https://frely.cloud/docs/frelymcp/) · [Claude で Frely を使う](https://frely.cloud/docs/claude/) · [ChatGPT で Frely を使う](https://frely.cloud/docs/chatgpt/)

## モデルが一覧に表示されるのに呼び出せません。
<!-- id: no-access -->

一覧に表示されることは、呼び出しの許可を意味しません。プラン、残高、割り当て、サービスの規約を確認してください。Team に所属している場合は、権限のある管理者に尋ねてください。キーのローテーションで制限を回避することはできません。

API tools: `models.available`, `budget.get`, `credits.account`

## リクエストが失敗またはタイムアウトしました。
<!-- id: request-failed -->

時刻、プロトコル、モデル名、リクエスト ID を機密情報を除して記録し、リクエスト履歴を確認します。タイムアウトや切断は、使用量が発生していない証明にはなりません。再試行の前に使用量を確認してください。認証情報、リクエストボディ、生のエラーログを誰にも送らないでください。

Related: [サポートに連絡](https://frely.cloud/support/)

Console: [リクエスト履歴](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## モデルの出力を信頼できますか？
<!-- id: output-quality -->

モデルの出力には誤りが含まれることがあり、Frely は正確性を保証しません。安全性が重要な場面、法務、金融、医療、セキュリティ、本番環境で使う前に、必ず確認してください。

Related: [利用規約](https://frely.cloud/terms/)
