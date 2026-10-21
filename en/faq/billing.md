---
title: Billing, Credit and refunds
description: Credit top-ups, Creator plans, renewal, cancellation and refunds.
applies_to: any
updated: 2026-10-21
order: 2
---

# Billing, Credit and refunds

## What is Credit and what can I do with it?
<!-- id: credit -->

Credit is prepaid balance that pays for model usage on your own account. A top-up is a one-time charge. Credit cannot be withdrawn, cashed out, or transferred to another person or account.

Related: [Terms of Service](https://frely.cloud/terms/)

Console: [Your Credit](https://frely.cloud/user/account/credits)

API tools: `credits.account`, `credit_products.list`, `credit_topups.list`

## What do the Creator plans cost?
<!-- id: plans -->

Creator is $<!-- fact:creator.monthlyUsd -->8<!-- /fact --> a month and includes $<!-- fact:creator.includedUsageUsd -->10<!-- /fact --> of model usage per billing period, up to <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> published services and <!-- fact:creator.apiKeys -->10<!-- /fact --> API keys. Creator Plus is $<!-- fact:creator_plus.monthlyUsd -->58<!-- /fact --> a month and includes $<!-- fact:creator_plus.includedUsageUsd -->50<!-- /fact --> of usage, up to <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> published services and <!-- fact:creator_plus.apiKeys -->100<!-- /fact --> API keys, with <!-- fact:creator_plus.officialModelDiscountPercent -->10<!-- /fact -->% off official models. The price at checkout is the one that applies.

Related: [Pricing](https://frely.cloud/pricing/)

Console: [Your plans](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## Do I need a Creator plan to use existing models?
<!-- id: need-plan -->

No. A Creator plan is for creating and publishing your own models. Existing models are available under their own access conditions and usage rates.

Related: [Pricing](https://frely.cloud/pricing/)

## How does renewal work?
<!-- id: renewal -->

Creator and Creator Plus renew automatically each month. At checkout you authorize Frely, through Waffo Pancake, to charge the saved payment method at the start of each billing period at the price shown then, plus applicable taxes, until you cancel. If a plan starts with a trial, checkout shows when the first charge occurs.

Related: [Terms of Service](https://frely.cloud/terms/)

Console: [Your plans](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## How do I cancel?
<!-- id: cancel -->

Cancel renewal at any time from your workspace. Future charges stop, and the plan stays available until the end of the period you already paid for. A period that has already been charged is not refunded unless the refund rules or applicable law say so.

Related: [Terms of Service](https://frely.cloud/terms/)

Console: [Your plans](https://frely.cloud/user/account/plans)

API tools: `creator.subscription_cancel`

## A renewal payment failed. What happens?
<!-- id: failed-payment -->

Frely can suspend or end the plan's entitlements when a renewal payment fails. Update the payment method and check your workspace; if it still fails, email support.

Related: [Contact support](https://frely.cloud/support/)

Console: [Your plans](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`, `creator.subscription_recover`

## What if a plan price changes?
<!-- id: price-change -->

A new price applies from a later billing period and never changes a period already charged. If you do not want the new price, cancel renewal before the next period begins.

## Can I get a refund?
<!-- id: refund -->

Refund eligibility is part of the product terms shown before purchase. Some products allow a refund for an unused grant before the refund deadline. Used credit, a used capability unit, a completed service result or a released entitlement is not refundable unless the product terms or the law require it. A duplicate charge, payment error, fulfillment error or Frely service failure can support a refund review. Email support with your account and the purchase. An approved refund goes through the payment provider.

Related: [Contact support](https://frely.cloud/support/) · [Terms of Service](https://frely.cloud/terms/)

Console: [Your orders](https://frely.cloud/user/account/orders)

API tools: `service_orders.list`, `plan_purchases.get`, `credit_topups.get`

## Who processes my payment?
<!-- id: payment-processor -->

Waffo Pancake is the Merchant of Record and payment processor for hosted checkout. It handles card and payment-method data. Frely receives transaction details and fulfillment status, and does not need your full card number.

Related: [Privacy Policy](https://frely.cloud/privacy/)
