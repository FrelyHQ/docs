---
title: ChatGPT で Frely を使う
description: Frely を ChatGPT にコネクターとして追加し、チャットから Frely のモデルを呼び出します。
applies_to: any
updated: 2026-10-21
order: 1
name: ChatGPT
---

# ChatGPT で Frely を使う

一度接続するだけで、ChatGPT が Frely にサインインし、あなたのモデルの一覧表示や公開済みモデルの呼び出しができるようになります。

## 始める前に
<!-- id: before -->

- Frely アカウント。frely.cloud からサインインします。
- Frely ワークスペースで有効になっている API Key。モデルの呼び出しは、これを通じてあなたのアカウントに請求されます。

## Frely をコネクターとして追加する
<!-- id: connector -->
<!-- badge: recommended -->

1. ChatGPT で Settings（設定）を開き、アプリとコネクターのセクションに移動します。新しいコネクターを作成します。ご利用の ChatGPT プランによっては、カスタムコネクターに developer mode（開発者モード）が必要な場合があります。
2. 名前に Frely と入力し、次のアドレスを MCP サーバー URL として貼り付けます：

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 認証方式には OAuth を選択します。API Key や認証ヘッダーは追加しないでください。
4. 開いたウィンドウで Frely にサインインし、アクセスを承認します。
   <!-- mock: consent -->
5. 新しいチャットで Frely コネクターをオンにし、ChatGPT にあなたのモデルを使うよう依頼します。たとえば：「Frely のモデル GPT-800 を使ってこの文章をレビューして」
   <!-- mock: chat -->

## インストールプロンプトを貼り付ける
<!-- id: prompt -->

この方法では Frely CLI をインストールするため、ChatGPT があなたのコンピューター上でコマンドを実行できる必要があります。

1. Frely ワークスペースでモデルを開き、Copy for ChatGPT を選択します。他の人に共有されたモデルの場合は、相手から送られてきたインストールリンクを使用してください。
2. ChatGPT に貼り付けます。ChatGPT が Frely CLI をインストールし、ブラウザーで Frely へのサインインを行い、モデルを Skill として追加します。
3. Skill の再読み込みを求められたら、再読み込みしてください。その後、モデルを名前で呼び出せます。

## コマンドラインを使う
<!-- id: cli -->

1. Frely CLI をインストールします：

   ```sh
   curl -fsSL https://frely.cloud/install.sh | sh
   ```
2. Frely にサインインします：

   ```sh
   frely login
   ```
3. モデルを ChatGPT の Skill としてインストールします。モデルのインストール手順に記載されているモデルリンクを使用します：

   ```sh
   frely agent install <model-link> --host chatgpt
   ```

## うまく動作しないときは
<!-- id: troubleshooting -->

| 問題 | 対処法 |
| --- | --- |
| ChatGPT に Frely のツールが表示されない | チャットで Frely コネクターをオンにするか、追加した後に新しいチャットを開始してください。 |
| サインインに失敗する、またはアクセスが拒否される | API Key を所有している Frely アカウントと同じアカウントでサインインしてください。コネクターを削除してもう一度追加すると、サインインをやり直せます。 |
| 呼び出し時に API Key が必要と表示される | Frely ワークスペースで API Key を作成または有効化してから、もう一度お試しください。 |
