---
title: 帳單、Credit 與退款
description: Credit 儲值、Creator 計劃、續訂、取消與退款。
applies_to: any
updated: 2026-10-21
order: 2
---

# 帳單、Credit 與退款

## 甚麼是 Credit？我可以用它做甚麼？
<!-- id: credit -->

Credit 是預付餘額，用於支付你自己帳戶上的模型用量。儲值屬一次性收費。Credit 不可提取、兌現，亦不可轉移給其他人或其他帳戶。

Related: [服務條款](https://frely.cloud/terms/)

Console: [你的 Credit](https://frely.cloud/user/account/credits)

API tools: `credits.account`, `credit_products.list`, `credit_topups.list`

## Creator 計劃收費是多少？
<!-- id: plans -->

Creator 每月收費 $<!-- fact:creator.monthlyUsd -->8<!-- /fact -->，每個計費週期包含 $<!-- fact:creator.includedUsageUsd -->10<!-- /fact --> 的模型用量，最多 <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> 項已發佈服務及 <!-- fact:creator.apiKeys -->10<!-- /fact --> 個 API Key。Creator Plus 每月收費 $<!-- fact:creator_plus.monthlyUsd -->58<!-- /fact -->，包含 $<!-- fact:creator_plus.includedUsageUsd -->50<!-- /fact --> 的用量，最多 <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> 項已發佈服務及 <!-- fact:creator_plus.apiKeys -->100<!-- /fact --> 個 API Key，官方模型更可享 <!-- fact:creator_plus.officialModelDiscountPercent -->10<!-- /fact -->% 折扣。以結帳時顯示的價格為準。

Related: [定價](https://frely.cloud/pricing/)

Console: [你的計劃](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## 使用現有模型是否需要 Creator 計劃？
<!-- id: need-plan -->

不需要。Creator 計劃是用於建立及發佈你自己的模型。現有模型會按其各自的存取條件及用量費率提供。

Related: [定價](https://frely.cloud/pricing/)

## 續訂如何運作？
<!-- id: renewal -->

Creator 及 Creator Plus 每月自動續訂。結帳時，你授權 Frely 透過 Waffo Pancake，在每個計費週期開始時，按當時顯示的價格另加適用稅項，向已儲存的付款方式收款，直至你取消為止。如果計劃以試用開始，結帳時會顯示首次收款的時間。

Related: [服務條款](https://frely.cloud/terms/)

Console: [你的計劃](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## 如何取消？
<!-- id: cancel -->

你可隨時從工作區取消續訂。日後的收費會停止，而計劃會保持可用，直至你已付費的週期結束。已收費的週期不會退款，除非退款規則或適用法律另有規定。

Related: [服務條款](https://frely.cloud/terms/)

Console: [你的計劃](https://frely.cloud/user/account/plans)

API tools: `creator.subscription_cancel`

## 續訂付款失敗，會發生甚麼事？
<!-- id: failed-payment -->

當續訂付款失敗時，Frely 可暫停或終止該計劃的權益。請更新付款方式並檢查你的工作區；如果仍然失敗，請電郵聯絡支援團隊。

Related: [聯絡支援](https://frely.cloud/support/)

Console: [你的計劃](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`, `creator.subscription_recover`

## 如果計劃價格有變怎麼辦？
<!-- id: price-change -->

新價格會由其後的計費週期起生效，且絕不會更改已收費的週期。如果你不想採用新價格，請在下一週期開始前取消續訂。

## 我可以獲得退款嗎？
<!-- id: refund -->

退款資格屬購買前所顯示產品條款的一部分。某些產品允許在退款期限前，就未使用的授權額度退款。已使用的 Credit、已使用的功能單位、已完成的服務結果或已發放的權益均不獲退款，除非產品條款或法律另有要求。重複扣款、付款錯誤、履行錯誤或 Frely 服務故障，均可成為退款審核的依據。請電郵聯絡支援團隊，並提供你的帳戶及購買資料。已批准的退款會經付款服務供應商發放。

Related: [聯絡支援](https://frely.cloud/support/) · [服務條款](https://frely.cloud/terms/)

Console: [你的訂單](https://frely.cloud/user/account/orders)

API tools: `service_orders.list`, `plan_purchases.get`, `credit_topups.get`

## 我的付款由誰人處理？
<!-- id: payment-processor -->

Waffo Pancake 是託管結帳的 Merchant of Record(記錄商戶)及付款處理商。它負責處理卡及付款方式資料。Frely 會接收交易詳情及履行狀態，且不需要你的完整卡號。

Related: [私隱政策](https://frely.cloud/privacy/)
