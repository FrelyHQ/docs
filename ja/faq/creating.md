---
title: Frely での作成と販売
description: Frely のクリエイター向け回答：公開・販売できるもの、購入者が受け取るもの、作品のプライバシーの扱いについて。
applies_to: any
updated: 2026-10-26
order: 5
---

# Frely での作成と販売

## 何を公開できますか？
<!-- id: what-sell -->

公開する権利を持つ Prompt、Skill、Agent またはワークフローです。そのタスク、入力、出力、制限を定義します。販売するのはその機能へのアクセスであり、核となるプロンプト、コード、ワークフローそのものは購入者に渡りません。

Related: [料金](https://frely.cloud/pricing/) · [セキュリティとデータ](https://frely.cloud/security/)

## 公開したアイテムはどこに表示されますか？
<!-- id: where-listed -->

新しい Skill、MCP、Agent は、プロフィールページ（`frely.cloud/@<username>`）とライブラリに表示されます。公開の Store には Frely が選んだ商品のみが掲載されるため、Frely が掲載しない限り、あなたのアイテムはそこには表示されません。他の人は、プロフィールページ、共有リンク、またはあなたが発行したパスを通じてアイテムにアクセスできます。アイテムの Visibility（公開設定）を開くと、非公開のままにするか、プロフィールページに表示するか、選択した Teams（チーム）に表示するかを設定できます。

Related: [料金](https://frely.cloud/pricing/)

## ホスト型 Agent とダウンロード・インストール型アイテムの違いは何ですか？
<!-- id: hosted-vs-install -->

ホスト型 Agent は Frely 上で動作し、購入者は Frely を通じて利用するため、非公開のコンテンツはあなたの手元に留まります。ダウンロード・インストール型の Prompt や Skill は、そのファイルを購入者自身のデバイスに配布します。無料部分はインストールしたすべての人に見え、すでにインストールされたコピーを Frely が回収することはできません。非公開のままにすべきコンテンツは、有料の Creator プランでホスト型 Agent として公開してください。

Related: [利用規約](https://frely.cloud/terms/)

API tools: `skills.list`, `agents.list`

## いくつのサービスを公開できますか？
<!-- id: plan-limits -->

Creator では <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> まで、Creator Plus では <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> まで公開できます。

Related: [料金](https://frely.cloud/pricing/)

API tools: `creator.subscription`

## 公開や商品の登録項目が表示されません。
<!-- id: cannot-publish -->

サインインするだけでは公開はできません。プランが有効であること、および公開の適格条件と商用利用の規約を満たしていることをご確認ください。

Related: [利用規約](https://frely.cloud/terms/)

## 売上は利益や引き出し可能な残高と同じですか？
<!-- id: revenue -->

いいえ。クリエイターはモデルやサービスの実行コストを負担する必要があり、売上は自動的に利益や引き出し可能な残高になるわけではありません。精算はサービスの規約に従います。

Related: [利用規約](https://frely.cloud/terms/)

## どのような権利が必要ですか？
<!-- id: rights -->

公開するファイルやコンテンツを配布する権利を持っている必要があり、必要に応じて出典を明示してください。他人の権利を侵害するコンテンツは許可されません。

Related: [利用規約](https://frely.cloud/terms/)
