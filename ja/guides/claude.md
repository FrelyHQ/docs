---
title: ClaudeでFrelyを使う
description: FrelyをカスタムコネクターとしてClaudeに、MCPサーバーとしてClaude Codeに追加します。
applies_to: any
updated: 2026-10-21
order: 2
name: Claude
---

# ClaudeでFrelyを使う

一度接続するだけです。ClaudeがFrelyにサインインすると、あなたのモデルの一覧表示や、公開済みモデルの呼び出しができるようになります。

## 始める前に
<!-- id: before -->

- Frelyアカウント。frely.cloud でサインインしてください。
- Frelyワークスペースで有効になっているAPI Key。モデルの呼び出しは、これを通じてあなたのアカウントに課金されます。

## Claudeアプリ(ウェブとデスクトップ)
<!-- id: connector -->
<!-- badge: recommended -->

1. ClaudeでSettings(設定)を開き、Connectors(コネクター)に移動して、Add custom connector(カスタムコネクターを追加)を選択します。
2. 名前にFrelyと入力し、URLとして次のアドレスを貼り付けます：

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 認証ヘッダーは追加しないでください。ClaudeはOAuthを使用します。
4. Connect(接続)を選択し、Frelyにサインインして、アクセスを承認します。
   <!-- mock: consent -->
5. チャットでツールメニューを開き、Frelyをオンにして、Claudeにあなたのモデルを使うよう依頼します。例：「FrelyのGPT-800モデルでこの文章を確認して」。
   <!-- mock: chat -->

## Claude Code
<!-- id: claude-code -->

1. FrelyをMCPサーバーとして追加します：

   ```sh
   claude mcp add --transport http frely https://frely.cloud/mcp
   ```
2. Claude Codeで /mcp を実行し、frely を選択して、ブラウザーでFrelyにサインインします。

   ```sh
   /mcp
   ```
3. 代わりに1つのモデルをSkillとして追加するには、Frely CLIをインストールし、frely login を実行してから、モデルをインストールします：

   ```sh
   frely agent install <model-link> --host claude-code
   ```

## うまく動作しないときは
<!-- id: troubleshooting -->

| 問題 | 対処方法 |
| --- | --- |
| ClaudeにFrelyのツールが表示されない | チャットのツールメニューでFrelyをオンにするか、接続後に新しいチャットを開始してください。 |
| サインインに失敗する、またはアクセスが拒否される | API Keyを所有しているものと同じFrelyアカウントでサインインしてください。サインインをやり直すには、コネクターを削除して再度追加します。 |
| 呼び出し時にAPI Keyが必要だというメッセージが表示される | FrelyワークスペースでAPI Keyを作成または有効化してから、もう一度お試しください。 |
