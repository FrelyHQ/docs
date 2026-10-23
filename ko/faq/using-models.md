---
title: 모델 및 API 키 사용하기
description: API 키, 클라이언트 설정, 사용량, 요청이 실패했을 때의 대처 방법.
applies_to: any
updated: 2026-10-21
order: 3
---

# 모델 및 API 키 사용하기

## API 키는 어떻게 만드나요?
<!-- id: api-key -->

콘솔에서 API 키 페이지를 열어 생성하세요. 키는 모델 호출 권한만 부여하며, 관리 작업 권한은 부여하지 않습니다. 키는 클라이언트의 보호되는 설정에 보관하세요. Git, 스크린샷, 채팅에는 절대로 넣지 마세요. 키를 폐기하면 이후 사용이 중단됩니다.

Related: [가이드](https://frely.cloud/docs/)

Console: [내 API 키](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## Frely API 베이스 URL은 무엇인가요?
<!-- id: base-url -->

https://api.frely.cloud입니다. 항상 https를 사용하세요. 일반 http로 보낸 요청은 거부되므로 http://api.frely.cloud로 설정한 클라이언트는 실패합니다. 모든 프로토콜에 같은 주소가 사용됩니다. 예를 들어 https://api.frely.cloud/v1/chat/completions, /v1/responses, /v1/messages, /v1/embeddings 및 /v1/models의 모델 목록이 있습니다. 일부 클라이언트는 끝에 /v1이 붙은 베이스 URL(https://api.frely.cloud/v1)을 요구하며, 엔드포인트 경로는 클라이언트가 직접 추가합니다.

Related: [Claude에서 Frely 사용하기](https://frely.cloud/docs/claude/) · [ChatGPT에서 Frely 사용하기](https://frely.cloud/docs/chatgpt/)

Console: [API 테스트 (베이스 URL과 바로 쓸 수 있는 curl 명령 표시)](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## API 요청은 어떻게 인증하나요?
<!-- id: authentication -->

API 키를 베어러 토큰으로 전송하세요. Authorization: Bearer <your key>. 본문이 있는 요청에는 Content-Type: application/json을 추가하세요. 유효한 키가 없는 요청은 401을 받습니다. 키는 모델 호출 권한만 부여하며 계정 관리 권한은 부여하지 않습니다.

Console: [내 API 키](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## 오류 응답은 어떤 모습인가요?
<!-- id: errors -->

{"error":{"message","type","param","code"}} 형식의 JSON 본문입니다. type은 HTTP 상태를 따릅니다. 401 authentication_error, 402 insufficient_quota, 403 permission_error, 404 not_found_error, 408 또는 504 timeout_error, 429 rate_limit_error, 기타 4xx invalid_request_error, 503 service_unavailable_error, 기타 5xx server_error입니다. 모든 응답에는 x-request-id 헤더가 포함되며, 지원팀에 문의할 때는 이 값을 보관하세요. 재시도 가능한 장애에는 초 단위의 Retry-After 헤더가 포함될 수 있습니다.

Related: [지원팀에 문의하기](https://frely.cloud/support/)

Console: [요청 기록](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## AI 앱이나 클라이언트에는 무엇을 입력하나요?
<!-- id: client-settings -->

세 가지 값입니다. 선택한 프로토콜의 공개 서비스 주소(내부 주소가 아님), 본인의 API 키, 계정에서 볼 수 있는 공개 모델 이름. 정확한 값은 계정 안내에 표시됩니다.

Related: [Claude에서 Frely 사용하기](https://frely.cloud/docs/claude/) · [ChatGPT에서 Frely 사용하기](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## Claude나 ChatGPT에 Frely는 어떻게 추가하나요?
<!-- id: connector -->

Frely를 커넥터(connector)로 추가하고, MCP 서버 URL에 FrelyMCP 주소를 입력한 다음, OAuth를 선택하고 Frely에 로그인하여 접근을 승인하세요. 단계별 가이드에서 각 화면을 확인할 수 있습니다.

Related: [FrelyMCP 가이드](https://frely.cloud/docs/frelymcp/) · [Claude에서 Frely 사용하기](https://frely.cloud/docs/claude/) · [ChatGPT에서 Frely 사용하기](https://frely.cloud/docs/chatgpt/)

## 모델이 목록에는 보이지만 호출할 수 없습니다.
<!-- id: no-access -->

목록에 표시되는 것은 호출 권한을 의미하지 않습니다. 플랜, 잔액, 제공 한도와 서비스 약관을 확인하고, Team에 소속되어 있다면 권한 있는 관리자에게 문의하세요. 키를 교체해도 제한은 우회되지 않습니다.

API tools: `models.available`, `budget.get`, `credits.account`

## 요청이 실패했거나 시간이 초과되었습니다.
<!-- id: request-failed -->

시간, 프로토콜, 모델 이름, 요청 ID를 개인정보를 지운 메모로 남겨 두고 요청 기록을 확인하세요. 시간 초과나 연결 끊김이 곧 사용량이 없었다는 증거는 아니므로, 재시도하기 전에 사용량을 확인하세요. 인증 정보, 요청 본문, 원본 오류 덤프는 누구에게도 보내지 마세요.

Related: [지원팀에 문의하기](https://frely.cloud/support/)

Console: [요청 기록](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## 모델 출력을 신뢰해도 되나요?
<!-- id: output-quality -->

모델 출력에는 오류가 포함될 수 있으며, Frely는 정확성을 보장하지 않습니다. 안전이 중요한 환경이나 법률, 금융, 의료, 보안, 프로덕션 환경에서 사용하기 전에 반드시 검토하세요.

Related: [서비스 약관](https://frely.cloud/terms/)
