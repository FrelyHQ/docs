---
title: Frely에서 만들고 판매하기
description: 크리에이터가 게시할 수 있는 항목, 구매자가 받는 결과물, 그리고 작업물의 프라이버시가 처리되는 방식을 안내합니다.
applies_to: any
updated: 2026-10-21
order: 5
---

# Frely에서 만들고 판매하기

## 무엇을 게시할 수 있나요?
<!-- id: what-sell -->

게시할 권리를 보유한 프롬프트, Skill, Agent 또는 워크플로입니다. 해당 항목의 작업, 입력, 출력, 제한을 정의하세요. 판매되는 것은 기능에 대한 접근 권한이며, 핵심 프롬프트, 코드, 워크플로는 구매자에게 전달되지 않습니다.

Related: [요금제](https://frely.cloud/pricing/) · [보안 및 데이터](https://frely.cloud/security/)

## 호스팅 Agent와 다운로드 설치 항목의 차이는 무엇인가요?
<!-- id: hosted-vs-install -->

호스팅 Agent는 Frely에서 실행되고 구매자는 Frely를 통해 사용하기 때문에 비공개 콘텐츠는 본인에게 그대로 남습니다. 다운로드 설치 방식의 프롬프트나 Skill은 파일을 구매자의 기기에 직접 전달하며, 무료로 공개된 부분은 설치하는 모든 사람에게 보이고 Frely는 이미 설치된 사본을 회수할 수 없습니다. 비공개로 유지해야 하는 콘텐츠는 유료 Creator 플랜에서 호스팅 Agent로 게시해야 합니다.

Related: [서비스 약관](https://frely.cloud/terms/)

API tools: `skills.list`, `agents.list`

## 몇 개의 서비스를 게시할 수 있나요?
<!-- id: plan-limits -->

Creator는 <!-- fact:creator.publishedModelLimit -->3<!-- /fact -->개까지, Creator Plus는 <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact -->개까지 게시할 수 있습니다.

Related: [요금제](https://frely.cloud/pricing/)

API tools: `creator.subscription`

## 게시 또는 상품 등록 항목이 없습니다.
<!-- id: cannot-publish -->

로그인만으로는 게시 권한이 부여되지 않습니다. 플랜이 활성 상태인지, 그리고 게시 자격 요건과 판매 조건을 충족하는지 확인하세요.

Related: [서비스 약관](https://frely.cloud/terms/)

## 판매 수익은 이익 또는 출금 가능한 잔액과 같은가요?
<!-- id: revenue -->

아니요. 크리에이터는 모델 및 서비스 운영 비용을 고려해야 하며, 수익이 자동으로 이익이나 출금 가능한 잔액이 되는 것은 아닙니다. 정산은 서비스 약관을 따릅니다.

Related: [서비스 약관](https://frely.cloud/terms/)

## 어떤 권리가 필요한가요?
<!-- id: rights -->

게시하는 파일과 콘텐츠를 배포할 권리를 보유해야 하며, 필요한 경우 원 출처를 표기해야 합니다. 타인의 권리를 침해하는 콘텐츠는 허용되지 않습니다.

Related: [서비스 약관](https://frely.cloud/terms/)
