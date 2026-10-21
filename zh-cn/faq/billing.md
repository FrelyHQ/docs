---
title: 账单、Credit 与退款
description: Credit 充值、Creator 套餐、续费、取消与退款。
applies_to: any
updated: 2026-10-21
order: 2
---

# 账单、Credit 与退款

## Credit 是什么，能用来做什么？
<!-- id: credit -->

Credit 是预付余额，用于支付你自己账户上的模型用量。充值是一次性扣费。Credit 不可提现、变现，也不能转给其他人或其他账户。

Related: [服务条款](https://frely.cloud/terms/)

Console: [你的 Credit](https://frely.cloud/user/account/credits)

API tools: `credits.account`, `credit_products.list`, `credit_topups.list`

## Creator 套餐的价格是多少？
<!-- id: plans -->

Creator 为每月 $<!-- fact:creator.monthlyUsd -->8<!-- /fact -->，每个计费周期包含 $<!-- fact:creator.includedUsageUsd -->10<!-- /fact --> 的模型用量，最多可发布 <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> 个服务和 <!-- fact:creator.apiKeys -->10<!-- /fact --> 个 API Key。Creator Plus 为每月 $<!-- fact:creator_plus.monthlyUsd -->58<!-- /fact -->，包含 $<!-- fact:creator_plus.includedUsageUsd -->50<!-- /fact --> 的用量、最多 <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> 个已发布服务和 <!-- fact:creator_plus.apiKeys -->100<!-- /fact --> 个 API Key，官方模型享 <!-- fact:creator_plus.officialModelDiscountPercent -->10<!-- /fact -->% 优惠。以结账时显示的价格为准。

Related: [定价](https://frely.cloud/pricing/)

Console: [你的套餐](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## 使用现有模型需要 Creator 套餐吗？
<!-- id: need-plan -->

不需要。Creator 套餐用于创建和发布你自己的模型。现有模型按其各自的访问条件和使用费率提供。

Related: [定价](https://frely.cloud/pricing/)

## 续费是如何进行的？
<!-- id: renewal -->

Creator 和 Creator Plus 每月自动续费。结账时，你授权 Frely 通过 Waffo Pancake 在每个计费周期开始时，按当时显示的价格（加上适用税费）从已保存的支付方式扣款，直至你取消。如果套餐附带试用，结账页面会显示首次扣费的时间。

Related: [服务条款](https://frely.cloud/terms/)

Console: [你的套餐](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## 如何取消？
<!-- id: cancel -->

可随时在你的工作台中取消续费。后续扣费即停止，套餐在你已支付的周期结束前仍可使用。已扣费的周期不予退款，除非退款规则或适用法律另有规定。

Related: [服务条款](https://frely.cloud/terms/)

Console: [你的套餐](https://frely.cloud/user/account/plans)

API tools: `creator.subscription_cancel`

## 续费扣费失败了，会怎样？
<!-- id: failed-payment -->

续费扣费失败时，Frely 可以暂停或终止该套餐的权益。请更新支付方式并检查你的工作台；如果仍然失败，请发邮件联系支持。

Related: [联系支持](https://frely.cloud/support/)

Console: [你的套餐](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`, `creator.subscription_recover`

## 套餐价格变化了怎么办？
<!-- id: price-change -->

新价格从之后的计费周期开始适用，不会改变已扣费的周期。如果你不接受新价格，请在下一个周期开始前取消续费。

## 可以退款吗？
<!-- id: refund -->

是否可退款取决于购买前展示的商品条款。部分商品允许在退款期限前对未使用的额度退款。已使用的 Credit、已使用的功能单元、已完成的服务成果或已释放的权益不予退款，除非商品条款或法律要求。重复扣费、支付错误、履约错误或 Frely 服务故障可以支持退款审核。发邮件联系支持时请附上你的账户和购买信息。批准的退款通过支付服务方退回。

Related: [联系支持](https://frely.cloud/support/) · [服务条款](https://frely.cloud/terms/)

Console: [你的订单](https://frely.cloud/user/account/orders)

API tools: `service_orders.list`, `plan_purchases.get`, `credit_topups.get`

## 我的付款由谁处理？
<!-- id: payment-processor -->

Waffo Pancake 是托管结账的 Merchant of Record 和支付处理方，负责处理银行卡和支付方式数据。Frely 接收交易详情和履约状态，不需要你的完整卡号。

Related: [隐私政策](https://frely.cloud/privacy/)
