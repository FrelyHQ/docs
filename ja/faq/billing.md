---
title: 請求、Credit、返金
description: Credit のチャージ、Creator プラン、更新、キャンセル、返金について。
applies_to: any
updated: 2026-10-21
order: 2
---

# 請求、Credit、返金

## Credit とは何ですか？何に使えますか？
<!-- id: credit -->

Credit は、ご自身のアカウントでのモデル利用の支払いに充てられる前払い残高です。チャージは 1 回限りのお支払いです。Credit は引き出しや現金化、他の人や他のアカウントへの譲渡はできません。

Related: [利用規約](https://frely.cloud/terms/)

Console: [あなたの Credit](https://frely.cloud/user/account/credits)

API tools: `credits.account`, `credit_products.list`, `credit_topups.list`

## Creator プランの料金はいくらですか？
<!-- id: plans -->

Creator は月額 $<!-- fact:creator.monthlyUsd -->8<!-- /fact --> で、1 請求期間あたり $<!-- fact:creator.includedUsageUsd -->10<!-- /fact --> 分のモデル利用が含まれ、公開サービスは最大 <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> 件、API Key は <!-- fact:creator.apiKeys -->10<!-- /fact --> 本まで作成できます。Creator Plus は月額 $<!-- fact:creator_plus.monthlyUsd -->58<!-- /fact --> で、$<!-- fact:creator_plus.includedUsageUsd -->50<!-- /fact --> 分の利用が含まれ、公開サービスは最大 <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> 件、API Key は <!-- fact:creator_plus.apiKeys -->100<!-- /fact --> 本まで作成でき、さらに公式モデルが <!-- fact:creator_plus.officialModelDiscountPercent -->10<!-- /fact -->% 割引になります。適用されるのは、チェックアウト時に表示される価格です。

Related: [料金](https://frely.cloud/pricing/)

Console: [あなたのプラン](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## 既存のモデルを使うのに Creator プランは必要ですか？
<!-- id: need-plan -->

いいえ。Creator プランは、ご自身のモデルを作成・公開するためのものです。既存のモデルは、それぞれのアクセス条件と利用料金のもとでご利用いただけます。

Related: [料金](https://frely.cloud/pricing/)

## 更新はどのように行われますか？
<!-- id: renewal -->

Creator および Creator Plus は毎月自動的に更新されます。チェックアウト時に、キャンセルされるまで、Frely が Waffo Pancake を通じて、各請求期間の開始時に保存済みのお支払い方法へ、その時点で表示される価格(適用される税金を含む)を請求することに同意していただきます。プランがトライアル付きで始まる場合、チェックアウト画面に最初の請求の時期が表示されます。

Related: [利用規約](https://frely.cloud/terms/)

Console: [あなたのプラン](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## キャンセルはどうすればよいですか？
<!-- id: cancel -->

更新のキャンセルは、ワークスペースからいつでも行えます。以降の請求は停止し、すでにお支払いいただいた期間の終了までプランは引き続きご利用いただけます。すでに請求済みの期間については、返金規定または適用される法令に別段の定めがある場合を除き、返金されません。

Related: [利用規約](https://frely.cloud/terms/)

Console: [あなたのプラン](https://frely.cloud/user/account/plans)

API tools: `creator.subscription_cancel`

## 更新の支払いに失敗しました。どうなりますか？
<!-- id: failed-payment -->

更新のお支払いが失敗した場合、Frely はプランの提供内容を一時停止または終了することがあります。お支払い方法を更新のうえワークスペースをご確認ください。それでも失敗する場合は、サポートまでメールでご連絡ください。

Related: [サポートへの問い合わせ](https://frely.cloud/support/)

Console: [あなたのプラン](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`, `creator.subscription_recover`

## プランの価格が変わった場合は？
<!-- id: price-change -->

新しい価格は以降の請求期間から適用され、すでに請求済みの期間の価格が変更されることはありません。新しい価格をご希望でない場合は、次の請求期間が始まる前に更新をキャンセルしてください。

## 返金は可能ですか？
<!-- id: refund -->

返金の可否は、購入前に表示される製品規約の一部として定められています。一部の製品では、返金期限までであれば未使用の付与分の返金が認められています。使用済みの Credit、使用済みのケイパビリティユニット、完了したサービスの成果物、付与済みの権利は、製品規約または法律で求められる場合を除き、返金の対象になりません。二重請求、支払いエラー、提供エラー、Frely のサービス障害などがあった場合は、返金審査の対象となることがあります。アカウントと該当の購入内容を添えて、サポートまでメールでご連絡ください。承認された返金は、決済プロバイダーを通じて処理されます。

Related: [サポートへの問い合わせ](https://frely.cloud/support/) · [利用規約](https://frely.cloud/terms/)

Console: [あなたの注文](https://frely.cloud/user/account/orders)

API tools: `service_orders.list`, `plan_purchases.get`, `credit_topups.get`

## 支払いは誰が処理しますか？
<!-- id: payment-processor -->

Waffo Pancake は、ホスト型チェックアウトにおける Merchant of Record(販売主体)であり、決済処理者です。カードおよびお支払い方法に関するデータは Waffo Pancake が取り扱います。Frely が受け取るのは取引の詳細と提供状況のみで、お客様のカード番号の全体を必要とすることはありません。

Related: [プライバシーポリシー](https://frely.cloud/privacy/)
