---
title: Frely での作成と販売
description: クリエイターが公開できるもの、購入者が受け取るもの、そしてあなたの作品のプライバシーの扱い。
applies_to: any
updated: 2026-10-21
order: 5
---

# Frely での作成と販売

## 何を公開できますか？
<!-- id: what-sell -->

公開する権利を持っている Prompt、Skill、Agent、またはワークフローです。タスク、入力、出力、制限を定義します。販売するのはその機能へのアクセスであり、核心となるプロンプト、コード、ワークフローは購入者に渡りません。

Related: [料金](https://frely.cloud/pricing/) · [セキュリティとデータ](https://frely.cloud/security/)

## ホスト型 Agent とダウンロード・インストール型の商品の違いは？
<!-- id: hosted-vs-install -->

ホスト型 Agent は Frely 上で動き、購入者は Frely を通じて使うため、あなたの非公開コンテンツはあなたの手元に残ります。ダウンロード・インストール型の Prompt や Skill は、ファイルを購入者自身のデバイスに届けます。無料部分はインストールした全員に見え、Frely はインストール済みのコピーを取り消せません。非公開を保つ必要があるコンテンツは、有料の Creator プランでホスト型 Agent として公開してください。

Related: [利用規約](https://frely.cloud/terms/)

API tools: `skills.list`, `agents.list`

## 公開できるサービスの数は？
<!-- id: plan-limits -->

Creator は最大 <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> 件、Creator Plus は最大 <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> 件です。

Related: [料金](https://frely.cloud/pricing/)

API tools: `creator.subscription`

## 公開や商品の入口が表示されません。
<!-- id: cannot-publish -->

ログインだけでは公開はできません。プランが有効であること、公開資格と商用の規約を満たしていることを確認してください。

Related: [利用規約](https://frely.cloud/terms/)

## 売上は利益や引き出し可能な残高と同じですか？
<!-- id: revenue -->

いいえ。クリエイターはモデルとサービスの実行コストを考慮する必要があり、売上は自動的に利益になるわけでも、引き出せる残高になるわけでもありません。精算はサービスの規約に従います。

Related: [利用規約](https://frely.cloud/terms/)

## どの権利が必要ですか？
<!-- id: rights -->

公開するファイルとコンテンツを頒布する権利を持ち、必要に応じて出典を明示してください。他人の権利を侵害するコンテンツは認められません。

Related: [利用規約](https://frely.cloud/terms/)
