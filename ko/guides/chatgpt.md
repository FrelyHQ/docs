---
title: ChatGPT에서 Frely 사용하기
description: Frely를 커넥터로 ChatGPT에 추가한 다음, 채팅에서 내 Frely 모델을 호출하세요.
applies_to: any
updated: 2026-10-21
order: 1
name: ChatGPT
---

# ChatGPT에서 Frely 사용하기

한 번만 연결하면 됩니다. ChatGPT가 Frely에 로그인한 후 내 모델 목록을 조회하고 게시된 모델을 호출할 수 있습니다.

## 시작하기 전에
<!-- id: before -->

- Frely 계정. frely.cloud에서 로그인하세요.
- Frely 워크스페이스에서 활성화된 API key. 모델 호출 비용은 이 key를 통해 내 계정에 청구됩니다.

## Frely를 커넥터로 추가하기
<!-- id: connector -->
<!-- badge: recommended -->

1. ChatGPT에서 Settings(설정)를 열고 앱 및 커넥터 섹션으로 이동합니다. 새 커넥터를 만듭니다. ChatGPT 플랜에 따라 사용자 지정 커넥터에는 개발자 모드가 필요할 수 있습니다.
2. 이름에 Frely를 입력하고 다음 주소를 MCP 서버 URL로 붙여넣습니다:

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 인증 방식으로 OAuth를 선택합니다. API key나 Authorization 헤더는 추가하지 마세요.
4. 열리는 창에서 Frely에 로그인하고 접근을 승인합니다.
   <!-- mock: consent -->
5. 새 채팅에서 Frely 커넥터를 켜고 ChatGPT에 내 모델 사용을 요청합니다. 예: "내 Frely 모델 GPT-800으로 이 텍스트를 검토해 줘."
   <!-- mock: chat -->

## 설치 프롬프트 붙여넣기
<!-- id: prompt -->

이 방법은 Frely CLI를 설치하는 방식이므로, ChatGPT가 내 컴퓨터에서 명령어를 실행할 수 있어야 합니다.

1. Frely 워크스페이스에서 모델을 열고 Copy for ChatGPT를 선택합니다. 다른 사람이 공유한 모델이라면 그 사람이 보내준 설치 링크를 사용하세요.
2. 이 내용을 ChatGPT에 붙여넣습니다. ChatGPT가 Frely CLI를 설치하고 브라우저에서 Frely에 로그인한 뒤, 모델을 Skill로 추가합니다.
3. ChatGPT가 Skill을 다시 로드하라고 요청하면 다시 로드합니다. 그런 다음 모델을 이름으로 호출합니다.

## 명령줄 사용하기
<!-- id: cli -->

1. Frely CLI를 설치합니다:

   ```sh
   curl -fsSL https://frely.cloud/install.sh | sh
   ```
2. Frely에 로그인합니다:

   ```sh
   frely login
   ```
3. 모델을 ChatGPT Skill로 설치합니다. 설치 안내에 있는 모델 링크를 사용합니다:

   ```sh
   frely agent install <model-link> --host chatgpt
   ```

## 문제가 발생하면
<!-- id: troubleshooting -->

| 문제 | 해결 방법 |
| --- | --- |
| ChatGPT에 Frely 도구가 표시되지 않음 | 채팅에서 Frely 커넥터를 켜거나, 커넥터를 추가한 후 새 채팅을 시작합니다. |
| 로그인에 실패하거나 접근이 거부됨 | API key를 소유한 것과 동일한 Frely 계정으로 로그인합니다. 로그인을 다시 시작하려면 커넥터를 제거한 후 다시 추가합니다. |
| 호출 시 API key가 필요하다는 안내가 표시됨 | Frely 워크스페이스에서 API key를 만들거나 활성화한 후 다시 시도합니다. |
