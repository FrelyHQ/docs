---
title: 請求、Credit、返金
description: Credit のチャージ、Creator プラン、更新、キャンセル、返金。
applies_to: any
updated: 2026-10-21
order: 2
---

# 請求、Credit、返金

## Credit とは何ですか？何に使えますか？
<!-- id: credit -->

Credit は、自分のアカウントでのモデル利用に充てられる前払い残高です。チャージは一回限りの課金です。Credit は引き出し、換金、他の人やアカウントへの譲渡はできません。

Related: [利用規約](https://frely.cloud/terms/)

Console: [あなたの Credit](https://frely.cloud/user/account/credits)

API tools: `credits.account`, `credit_products.list`, `credit_topups.list`

## Creator プランの料金はいくらですか？
<!-- id: plans -->

Creator は月額 $<!-- fact:creator.monthlyUsd -->8<!-- /fact --> で、1 課金期間あたり $<!-- fact:creator.includedUsageUsd -->10<!-- /fact --> 分のモデル利用が含まれ、公開できるサービスは最大 <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> 件、API キーは最大 <!-- fact:creator.apiKeys -->10<!-- /fact --> 本です。Creator Plus は月額 $<!-- fact:creator_plus.monthlyUsd -->58<!-- /fact --> で、$<!-- fact:creator_plus.includedUsageUsd -->50<!-- /fact --> 分の利用、公開できるサービス最大 <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> 件、API キー最大 <!-- fact:creator_plus.apiKeys -->100<!-- /fact --> 本が含まれ、公式モデルは <!-- fact:creator_plus.officialModelDiscountPercent -->10<!-- /fact -->% 割引になります。適用されるのはチェックアウト時に表示される価格です。

Related: [料金](https://frely.cloud/pricing/)

Console: [あなたのプラン](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## 既存のモデルを使うのに Creator プランは必要ですか？
<!-- id: need-plan -->

必要ありません。Creator プランは、自分のモデルを作成・公開するためのものです。既存のモデルは、それぞれのアクセス条件と利用料金で利用できます。

Related: [料金](https://frely.cloud/pricing/)

## 更新はどのように行われますか？
<!-- id: renewal -->

Creator と Creator Plus は毎月自動更新されます。チェックアウト時に、キャンセルするまでの間、各課金期間の開始時にその時点で表示されている価格（適用される税を含む）で保存された支払い方法に課金することを、Waffo Pancake を通じて Frely に許可します。プランにトライアルが付いている場合、初回課金の時期はチェックアウトに表示されます。

Related: [利用規約](https://frely.cloud/terms/)

Console: [あなたのプラン](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## キャンセルするには？
<!-- id: cancel -->

ワークスペースからいつでも更新をキャンセルできます。以降の課金は止まり、プランは支払い済みの期間の終わりまで使えます。すでに課金された期間は、返金規定や適用法令がある場合を除き、返金されません。

Related: [利用規約](https://frely.cloud/terms/)

Console: [あなたのプラン](https://frely.cloud/user/account/plans)

API tools: `creator.subscription_cancel`

## 更新の支払いに失敗しました。どうなりますか？
<!-- id: failed-payment -->

更新の支払いが失敗すると、Frely はプランの権利を停止または終了できます。支払い方法を更新してワークスペースを確認してください。それでも失敗する場合は、サポートにメールしてください。

Related: [サポートに連絡](https://frely.cloud/support/)

Console: [あなたのプラン](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`, `creator.subscription_recover`

## プランの価格が変わった場合は？
<!-- id: price-change -->

新しい価格は次回以降の課金期間から適用され、すでに課金された期間は変更されません。新しい価格を望まない場合は、次の期間が始まる前に更新をキャンセルしてください。

## 返金はできますか？
<!-- id: refund -->

返金の可否は、購入前に表示される商品の規約に定められています。一部の商品では、返金期限前であれば未使用の付与分について返金を受けられます。使用済みの Credit、使用済みの機能ユニット、完成済みのサービス成果物、解放済みの権利は、商品の規約や法律で求められない限り返金されません。二重課金、支払いエラー、履行エラー、Frely のサービス障害は返金審査の対象になり得ます。アカウントと購入内容を添えてサポートにメールしてください。承認された返金は決済代行会社を通じて処理されます。

Related: [サポートに連絡](https://frely.cloud/support/) · [利用規約](https://frely.cloud/terms/)

Console: [あなたの注文](https://frely.cloud/user/account/orders)

API tools: `service_orders.list`, `plan_purchases.get`, `credit_topups.get`

## 支払いは誰が処理しますか？
<!-- id: payment-processor -->

ホスト型チェックアウトの Merchant of Record および決済処理は Waffo Pancake が担い、カードおよび支払い方法のデータを扱います。Frely は取引内容と履行状況を受け取るだけで、カード番号の全文は必要としません。

Related: [プライバシーポリシー](https://frely.cloud/privacy/)
