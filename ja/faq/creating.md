---
title: Frelyでの作成と販売
description: クリエイターが公開できるもの、購入者が受け取るもの、そしてあなたの作品のプライバシーがどのように扱われるかについて説明します。
applies_to: any
updated: 2026-10-21
order: 5
---

# Frelyでの作成と販売

## 何を公開できますか？
<!-- id: what-sell -->

公開する権利を持つプロンプト、Skill、Agent、またはワークフローです。タスク、入力、出力、制限を定義します。販売するのはその能力へのアクセスであり、あなたの中核となるプロンプト、コード、ワークフローは購入者に渡されません。

Related: [料金](https://frely.cloud/pricing/) · [セキュリティとデータ](https://frely.cloud/security/)

## ホスト型Agentとダウンロード・インストール型アイテムの違いは何ですか？
<!-- id: hosted-vs-install -->

ホスト型AgentはFrely上で動作し、購入者はFrelyを通じて利用するため、あなたの非公開コンテンツはあなたのもとに残ります。ダウンロード・インストール型のプロンプトやSkillは、そのファイルを購入者自身のデバイスに配信します。無料部分はインストールした人全員に見え、Frelyはすでにインストールされたコピーを回収できません。非公開のままにすべきコンテンツは、有料のCreatorプランでホスト型Agentとして公開してください。

Related: [利用規約](https://frely.cloud/terms/)

API tools: `skills.list`, `agents.list`

## いくつのサービスを公開できますか？
<!-- id: plan-limits -->

Creatorでは最大 <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> 件、Creator Plusでは最大 <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> 件まで公開できます。

Related: [料金](https://frely.cloud/pricing/)

API tools: `creator.subscription`

## 公開や製品の入口が表示されません。
<!-- id: cannot-publish -->

サインインするだけでは公開は許可されません。プランが有効であること、および公開資格と商用利用の条件を満たしていることを確認してください。

Related: [利用規約](https://frely.cloud/terms/)

## 売上収益は利益や出金可能な残高と同じですか？
<!-- id: revenue -->

いいえ。Creatorはモデルやサービスの実行コストを負担する必要があり、売上が自動的に利益や出金可能な残高になるわけではありません。精算はサービスの規約に従います。

Related: [利用規約](https://frely.cloud/terms/)

## どのような権利が必要ですか？
<!-- id: rights -->

公開するファイルやコンテンツを配布する権利を保有し、必要に応じて出典を明示する必要があります。他人の権利を侵害するコンテンツは許可されません。

Related: [利用規約](https://frely.cloud/terms/)
