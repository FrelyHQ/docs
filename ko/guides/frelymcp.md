---
title: FrelyMCP
description: FrelyMCP는 Claude, ChatGPT 등 MCP 클라이언트에 내 컴퓨터, 클라우드 도구, 그리고 Frely 계정의 모델과 AI 에이전트에 대한 접근을 제공합니다.
applies_to: any
updated: 2026-10-21
order: 3
---

# FrelyMCP

FrelyMCP는 Frely 계정을 위한 MCP 서버입니다. 한 번만 연결해 두면 AI 앱에서 내 컴퓨터, 켜 둔 클라우드 도구, 그리고 내 모델과 AI 에이전트에 접근할 수 있습니다. OAuth로 로그인하며 API 키를 앱에 붙여넣을 필요가 없습니다.

## 주요 기능
<!-- id: what -->

로컬: 계정에 연결된 컴퓨터를 목록으로 보고, 워크스페이스의 파일을 읽고, 파일을 편집하고, 명령을 실행하고, 웹 페이지를 가져올 수 있습니다. 로컬 파일 읽기와 쓰기는 그중 일부일 뿐입니다. 클라우드: 이 연결을 위해 켜 둔 클라우드 MCP 서버를 기기 없이 사용할 수 있습니다. 모델과 에이전트: 사용할 수 있는 모델과 에이전트를 목록으로 확인하고, MCP에서 켜거나 끄고, AI 앱 안에서 바로 질문할 수 있습니다. 내 에이전트를 직접 연결할 수도 있으며, 모델처럼 동작합니다. 사용량은 Frely 계정에 청구됩니다.

## 시작하기 전에
<!-- id: before -->

Frely 계정이 필요합니다(frely.cloud에서 로그인하세요). 기기 도구를 사용하려면 컴퓨터에 Frely CLI를 설치하고 연결하세요. 모델, 에이전트, 클라우드 도구는 기기 없이도 동작합니다.

```sh
curl -fsSL https://frely.cloud/install.sh | sh
frely login
frely mcp start
```

## AI 앱 연결하기
<!-- id: connect -->

이 주소를 MCP 서버 URL로 사용하고 OAuth를 선택하세요. 인증 헤더는 추가하지 마세요.

```sh
https://mcp.frely.cloud/mcp
```

## Claude
<!-- id: claude -->

Claude에서 Settings(설정)를 열고 Connectors(커넥터)로 이동한 다음 Add custom connector(사용자 지정 커넥터 추가)를 선택하고, 이름에 FrelyMCP를 입력한 뒤 위 주소를 붙여넣으세요. Connect(연결)를 선택하고 Frely에 로그인하여 접근을 승인하세요. Claude Code에서는 claude mcp add --transport http frelymcp https://mcp.frely.cloud/mcp를 실행한 다음 /mcp로 로그인하세요.

## ChatGPT
<!-- id: chatgpt -->

ChatGPT에서 Settings를 열고 앱 및 커넥터 섹션으로 이동하세요. 새 커넥터를 만들고 위 주소를 붙여넣은 다음 OAuth를 선택하고 Frely에 로그인하세요. ChatGPT 요금제에 따라 사용자 지정 커넥터에는 개발자 모드가 필요할 수 있습니다.

## 설정 파일로 설치하기
<!-- id: config -->

WorkBuddy 같은 일부 AI 에이전트는 커넥터 화면 대신 설정 파일을 통해 MCP 서버를 추가합니다. 에이전트의 MCP 설정 파일에서 mcpServers 객체에 이 항목을 추가하세요(기존에 있는 서버는 그대로 두세요). 그런 다음 에이전트를 다시 시작하고, 요청하면 Frely 로그인과 승인을 완료하세요. 에이전트가 url 필드를 받아들이지 않는다면, 같은 주소로 에이전트의 원격 또는 HTTP 서버 옵션을 사용하세요.

```json
{
  "mcpServers": {
    "frely": {
      "url": "https://mcp.frely.cloud/mcp"
    }
  }
}
```

## 도구
<!-- id: tools -->

AI 앱에서 호출할 수 있는 도구는 다음과 같습니다:

| 도구 | 설명 |
| --- | --- |
| `list_devices` | 연결된 컴퓨터와 각 컴퓨터의 워크스페이스, 온라인 여부를 보여 줍니다. 가장 먼저 호출하세요. |
| `read` | 워크스페이스 안의 파일과 폴더를 읽습니다. |
| `edit_file` | 워크스페이스 안에서 파일을 만들거나 변경합니다. |
| `process` | 기기에서 명령을 실행하고 그 결과를 반환합니다. |
| `web_fetch` | 기기에서 웹 페이지를 가져옵니다. |
| `request_permission / confirm_permission` | 기본 샌드박스 밖의 접근(예: ~/.ssh)에 대한 승인을 요청합니다. Frely 사이트에서 코드로 승인합니다. |
| `models_list / models_set / models_invoke` | 모델과 에이전트를 목록으로 보여 주고, MCP에서 켜거나 끄고, 질문을 보냅니다. 켠 항목은 각각 <model>__invoke로도 나타납니다. |
| `<mcp>__<tool>` | 이 연결을 위해 켠 클라우드 MCP 서버의 도구입니다. 클라우드에서 실행되며 기기가 필요 없습니다. |
| `local_mcp_list / local_mcp_call` | 기기가 노출하는 경우, 기기에서 실행 중인 MCP 서버에 접근합니다. |
| `frely_list / frely_call` | Frely 계정을 관리합니다: API 키, Credit, 요금제, 주문 및 Creator 항목. 클라우드에서 실행되며 기기가 필요 없습니다. 새 연결은 Frely 사이트에서 더 많은 권한을 허용하기 전까지 읽기만 할 수 있습니다. 돈이 오가거나 자격 증명을 변경하는 작업은 매번 승인이 필요하며, 결제 시에는 결제 페이지가 열립니다. |
| `store` | Frely Store(구독, 요금제, Credit, 확장 기능, Skills, 서비스)를 카드 형태로 보여 주고, 카드를 지원하지 않는 앱에서는 표로 보여 줍니다. 각 Buy 링크는 Frely 사이트에서 해당 상품을 열며, 결제는 그곳에서 진행합니다. |

## 보안 및 승인
<!-- id: safety -->

명령은 컴퓨터의 샌드박스에서 실행되며, 이 샌드박스는 ~/.ssh, ~/.aws 같은 자격 증명 폴더를 차단합니다. 또한 도구는 등록한 워크스페이스에만 접근합니다. 작업에 그 이상의 권한이 필요하면 AI 앱은 request_permission으로 요청해야 합니다. 승인 여부는 Frely 사이트에서 결정하고, 유효 기간을 정할 수 있으며, 나중에 철회할 수도 있습니다. AI 앱은 자신의 요청을 스스로 승인할 수 없습니다.

## 내 데이터
<!-- id: data -->

기기 도구 호출(read, edit_file, process, web_fetch 및 로컬 MCP)은 내 컴퓨터로 전달되며, FrelyMCP는 이에 대한 OAuth 로그인 기록만 보관합니다. 모델과 에이전트에 대한 호출은 Frely 게이트웨이를 거칩니다. Request Capture(요청 캡처)는 요청과 응답 내용을 일정 기간 보관할 수 있으며, 선택한 모델 제공자는 응답에 필요한 요청 데이터를 전달받습니다. 자세한 내용은 개인정보 처리방침의 4조와 6조에 나와 있습니다. Frely Credit은 양도할 수 없으며, 모델 호출 사용량은 내 Credit으로만 집계됩니다.

## 문제가 발생하면
<!-- id: help -->

list_devices에 기기가 나타나지 않으면 컴퓨터에서 frely mcp start를 실행하고, CLI가 같은 Frely 계정으로 로그인되어 있는지 확인하세요. 기기가 오프라인이면 컴퓨터를 켜고 같은 명령을 실행하세요. 그 외 문의: support@frely.cloud.
