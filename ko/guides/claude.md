---
title: Claude에서 Frely 사용하기
description: Frely를 Claude에 커스텀 커넥터로 추가하거나, Claude Code에는 MCP 서버로 추가합니다.
applies_to: any
updated: 2026-10-21
order: 2
name: Claude
---

# Claude에서 Frely 사용하기

한 번만 연결하면 됩니다. Claude가 Frely에 로그인하면 내 모델 목록을 조회하고 공개된 모델을 호출할 수 있습니다.

## 시작하기 전에
<!-- id: before -->

- Frely 계정. frely.cloud에서 로그인하세요.
- Frely 워크스페이스에서 활성화된 API Key. 모델 호출 요금은 이 키를 통해 내 계정에 청구됩니다.

## Claude 앱(웹 및 데스크톱)
<!-- id: connector -->
<!-- badge: recommended -->

1. Claude에서 Settings(설정)를 열고 Connectors(커넥터)로 이동한 다음 Add custom connector(커스텀 커넥터 추가)를 선택하세요.
2. 이름은 Frely로 입력하고 다음 주소를 URL로 붙여넣으세요:

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. 인증 헤더는 추가하지 마세요. Claude는 OAuth를 사용합니다.
4. Connect를 선택하고 Frely에 로그인한 다음 접근을 승인하세요.
   <!-- mock: consent -->
5. 채팅에서 도구 메뉴를 열고 Frely를 켠 다음, Claude에게 내 모델 사용을 요청하세요. 예: "내 Frely 모델 GPT-800으로 이 텍스트를 검토해 주세요."
   <!-- mock: chat -->

## Claude Code
<!-- id: claude-code -->

1. Frely를 MCP 서버로 추가하세요:

   ```sh
   claude mcp add --transport http frely https://frely.cloud/mcp
   ```
2. Claude Code에서 /mcp를 실행하고 frely를 선택한 다음, 브라우저에서 Frely에 로그인하세요.

   ```sh
   /mcp
   ```
3. 대신 모델 하나를 Skill로 추가하려면 Frely CLI를 설치하고, frely login을 실행한 다음 모델을 설치하세요:

   ```sh
   frely agent install <model-link> --host claude-code
   ```

## 문제가 발생하면
<!-- id: troubleshooting -->

| 문제 | 해결 방법 |
| --- | --- |
| Claude에 Frely 도구가 표시되지 않음 | 채팅 도구 메뉴에서 Frely를 켜거나, 연결 후 새 채팅을 시작하세요. |
| 로그인에 실패하거나 접근이 거부됨 | API Key를 소유한 동일한 Frely 계정으로 로그인하세요. 로그인을 다시 시작하려면 커넥터를 제거한 후 다시 추가하세요. |
| 호출 시 API Key가 필요하다는 안내가 표시됨 | Frely 워크스페이스에서 API Key를 생성하거나 활성화한 다음 다시 시도하세요. |
