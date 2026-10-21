---
title: Claude で Frely を使う
description: Frely を Claude のカスタムコネクタとして、または Claude Code の MCP サーバーとして追加します。
applies_to: any
updated: 2026-10-21
order: 2
name: Claude
---

# Claude で Frely を使う

接続は一度だけ。Claude が Frely にログインすると、あなたのモデルの一覧表示と、公開済みモデルの呼び出しができます。

## 始める前に
<!-- id: before -->

- Frely アカウント。frely.cloud でログインします。
- Frely ワークスペースで有効な API キー。モデルの呼び出しはこのキーを通じてアカウントに課金されます。

## Claude アプリ（Web 版とデスクトップ版）
<!-- id: connector -->
<!-- badge: おすすめ -->

1. Claude で設定を開き、「コネクタ」から「カスタムコネクタを追加」を選びます。
2. 名前に Frely と入力し、URL に次のアドレスを貼り付けます：

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 認証ヘッダーは追加しません。Claude は OAuth を使います。
4. 「接続」を選び、Frely にログインしてアクセスを許可します。
   <!-- mock: consent -->
5. チャットでツールメニューを開き、Frely をオンにして、モデルを使うよう Claude に頼みます。例：「Frely のモデル GPT-800 でこの文章をチェックして」
   <!-- mock: chat -->

## Claude Code
<!-- id: claude-code -->

1. Frely を MCP サーバーとして追加します：

   ```sh
   claude mcp add --transport http frely https://frely.cloud/mcp
   ```
2. Claude Code で /mcp を実行し、frely を選んでブラウザで Frely にログインします。

   ```sh
   /mcp
   ```
3. モデルを 1 つだけ Skill として追加する場合は、Frely CLI をインストールして frely login を実行し、モデルをインストールします：

   ```sh
   frely agent install <model-link> --host claude-code
   ```

## うまくいかないとき
<!-- id: troubleshooting -->

| 問題 | 対処 |
| --- | --- |
| Claude に Frely のツールが表示されない | チャットのツールメニューで Frely をオンにするか、接続後に新しいチャットを始めます。 |
| ログインに失敗する、またはアクセスが拒否される | API キーを持つ同じ Frely アカウントでログインします。コネクタを削除して追加し直すと、ログインをやり直せます。 |
| 呼び出しで API キーが必要と表示される | Frely ワークスペースで API キーを作成または有効にしてから、もう一度試します。 |
