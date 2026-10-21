---
title: ChatGPT で Frely を使う
description: Frely を ChatGPT のコネクタとして追加し、チャットから Frely のモデルを呼び出します。
applies_to: any
updated: 2026-10-21
order: 1
name: ChatGPT
---

# ChatGPT で Frely を使う

接続は一度だけ。ChatGPT が Frely にログインすると、あなたのモデルの一覧表示と、公開済みモデルの呼び出しができます。

## 始める前に
<!-- id: before -->

- Frely アカウント。frely.cloud でログインします。
- Frely ワークスペースで有効な API キー。モデルの呼び出しはこのキーを通じてアカウントに課金されます。

## Frely をコネクタとして追加
<!-- id: connector -->
<!-- badge: おすすめ -->

1. ChatGPT で設定を開き、アプリとコネクタの項目に進みます。新しいコネクタを作成します。ChatGPT のプランによっては、カスタムコネクタに開発者モードが必要です。
2. 名前に Frely と入力し、MCP サーバーの URL に次のアドレスを貼り付けます：

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 認証方式は OAuth を選びます。API キーや認証ヘッダーは追加しません。
4. 開いたウィンドウで Frely にログインし、アクセスを許可します。
   <!-- mock: consent -->
5. 新しいチャットで Frely コネクタをオンにし、モデルを使うよう ChatGPT に頼みます。例：「Frely のモデル GPT-800 でこの文章をチェックして」
   <!-- mock: chat -->

## インストール用プロンプトを貼り付ける
<!-- id: prompt -->

この方法は Frely CLI をインストールするため、ChatGPT があなたのコンピューターでコマンドを実行できる必要があります。

1. Frely ワークスペースでモデルを開き、「Copy for ChatGPT」を選びます。共有されたモデルは、送られてきたインストール用リンクを使います。
2. ChatGPT に貼り付けます。ChatGPT が Frely CLI をインストールし、ブラウザで Frely にログインし、モデルを Skill として追加します。
3. Skill の再読み込みを求められたら再読み込みし、モデルを名前で呼び出します。

## コマンドラインを使う
<!-- id: cli -->

1. Frely CLI をインストールします：

   ```sh
   curl -fsSL https://frely.cloud/install.sh | sh
   ```
2. Frely にログインします：

   ```sh
   frely login
   ```
3. モデルを ChatGPT の Skill としてインストールします。モデルのリンクはインストール手順から取得します：

   ```sh
   frely agent install <model-link> --host chatgpt
   ```

## うまくいかないとき
<!-- id: troubleshooting -->

| 問題 | 対処 |
| --- | --- |
| ChatGPT に Frely のツールが表示されない | チャットで Frely コネクタをオンにするか、追加後に新しいチャットを始めます。 |
| ログインに失敗する、またはアクセスが拒否される | API キーを持つ同じ Frely アカウントでログインします。コネクタを削除して追加し直すと、ログインをやり直せます。 |
| 呼び出しで API キーが必要と表示される | Frely ワークスペースで API キーを作成または有効にしてから、もう一度試します。 |
