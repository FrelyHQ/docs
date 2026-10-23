---
title: 빌링, Credit 및 환불
description: Credit 충전, Creator 플랜, 갱신, 취소 및 환불.
applies_to: any
updated: 2026-10-21
order: 2
---

# 빌링, Credit 및 환불

## Credit은 무엇이고 어떻게 사용할 수 있나요?
<!-- id: credit -->

Credit은 본인 계정에서 모델 사용 비용으로 지불되는 선불 잔액입니다. 충전(top-up)은 일회성 결제입니다. Credit은 출금, 현금화 또는 다른 사람이나 계정으로의 이전이 불가능합니다.

Related: [서비스 약관](https://frely.cloud/terms/)

Console: [내 Credit](https://frely.cloud/user/account/credits)

API tools: `credits.account`, `credit_products.list`, `credit_topups.list`

## Creator 플랜은 얼마인가요?
<!-- id: plans -->

Creator는 월 $<!-- fact:creator.monthlyUsd -->8<!-- /fact -->이며, 결제 기간마다 $<!-- fact:creator.includedUsageUsd -->10<!-- /fact -->의 모델 사용량과 최대 <!-- fact:creator.publishedModelLimit -->3<!-- /fact -->개의 게시된 서비스, <!-- fact:creator.apiKeys -->10<!-- /fact -->개의 API Key가 포함됩니다. Creator Plus는 월 $<!-- fact:creator_plus.monthlyUsd -->58<!-- /fact -->이며, $<!-- fact:creator_plus.includedUsageUsd -->50<!-- /fact -->의 사용량과 최대 <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact -->개의 게시된 서비스, <!-- fact:creator_plus.apiKeys -->100<!-- /fact -->개의 API Key가 포함되고 공식 모델은 <!-- fact:creator_plus.officialModelDiscountPercent -->10<!-- /fact -->% 할인됩니다. 실제 적용되는 가격은 결제 시점에 표시되는 가격입니다.

Related: [요금 안내](https://frely.cloud/pricing/)

Console: [내 플랜](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## 기존 모델을 사용하려면 Creator 플랜이 필요한가요?
<!-- id: need-plan -->

아니요. Creator 플랜은 자신만의 모델을 만들고 게시하기 위한 플랜입니다. 기존 모델은 각 모델의 접근 조건과 사용 요율에 따라 이용할 수 있습니다.

Related: [요금 안내](https://frely.cloud/pricing/)

## 갱신은 어떻게 이루어지나요?
<!-- id: renewal -->

Creator와 Creator Plus는 매달 자동으로 갱신됩니다. 결제 시점에 취소할 때까지 각 결제 기간이 시작될 때 그 시점에 표시된 가격에 해당 세금을 더한 금액을 저장된 결제 수단으로 청구하도록 Waffo Pancake를 통해 Frely에 승인하게 됩니다. 플랜이 체험으로 시작되는 경우 결제 화면에 첫 청구가 이루어지는 시점이 표시됩니다.

Related: [서비스 약관](https://frely.cloud/terms/)

Console: [내 플랜](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## 어떻게 취소하나요?
<!-- id: cancel -->

워크스페이스에서 언제든지 갱신을 취소할 수 있습니다. 이후 청구는 중단되며, 이미 결제한 기간이 끝날 때까지 플랜을 계속 이용할 수 있습니다. 이미 청구된 기간은 환불 규정이나 관련 법령에 근거가 있는 경우가 아니면 환불되지 않습니다.

Related: [서비스 약관](https://frely.cloud/terms/)

Console: [내 플랜](https://frely.cloud/user/account/plans)

API tools: `creator.subscription_cancel`

## 갱신 결제에 실패했습니다. 어떻게 되나요?
<!-- id: failed-payment -->

갱신 결제에 실패하면 Frely는 플랜 권한을 일시 중단하거나 종료할 수 있습니다. 결제 수단을 업데이트하고 워크스페이스를 확인해 주세요. 그래도 실패하면 지원팀에 이메일로 문의해 주세요.

Related: [지원팀 문의](https://frely.cloud/support/)

Console: [내 플랜](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`, `creator.subscription_recover`

## 플랜 가격이 바뀌면 어떻게 되나요?
<!-- id: price-change -->

새로운 가격은 이후 결제 기간부터 적용되며 이미 청구된 기간의 가격은 절대 변경되지 않습니다. 새 가격을 원하지 않는다면 다음 기간이 시작되기 전에 갱신을 취소하세요.

## 환불받을 수 있나요?
<!-- id: refund -->

환불 가능 여부는 구매 전에 표시되는 제품 약관에 포함되어 있습니다. 일부 제품은 환불 기한 전에 사용하지 않은 지급 권한(grant)에 대해 환불을 허용합니다. 사용된 Credit, 사용된 기능 단위(capability unit), 완료된 서비스 결과 또는 이미 제공된 권한은 제품 약관이나 법률에서 요구하는 경우가 아니면 환불되지 않습니다. 중복 청구, 결제 오류, 이행 오류 또는 Frely 서비스 장애가 있는 경우 환불 검토 대상이 될 수 있습니다. 계정 정보와 구매 내역을 함께 지원팀에 이메일로 보내 주세요. 승인된 환불은 결제 대행사를 통해 처리됩니다.

Related: [지원팀 문의](https://frely.cloud/support/) · [서비스 약관](https://frely.cloud/terms/)

Console: [내 주문](https://frely.cloud/user/account/orders)

API tools: `service_orders.list`, `plan_purchases.get`, `credit_topups.get`

## 결제는 누가 처리하나요?
<!-- id: payment-processor -->

Waffo Pancake는 호스팅 결제의 Merchant of Record(법적 판매자)이자 결제 처리 기관입니다. 카드 및 결제 수단 데이터를 처리합니다. Frely는 거래 세부 정보와 이행 상태를 전달받으며 전체 카드 번호는 필요로 하지 않습니다.

Related: [개인정보 처리방침](https://frely.cloud/privacy/)
