---
title: 기기와 Frely CLI
description: CLI 설치, 컴퓨터 연결, 정상 동작 유지 및 제거 방법.
applies_to: any
updated: 2026-10-21
order: 4
---

# 기기와 Frely CLI

## Frely CLI는 어떻게 설치하고 컴퓨터를 어떻게 연결하나요?
<!-- id: install -->

설치 스크립트를 실행하세요: curl -fsSL https://frely.cloud/install.sh | sh. 이 스크립트는 frely를 설치하고 frely mcp start를 실행합니다. 그러면 브라우저가 열려 로그인할 수 있고(새 계정은 같은 페이지에서 가입할 수 있습니다), 기기 승인 안내가 표시된 후 MCP URL이 출력됩니다. 업데이트하려면 언제든 다시 실행하면 됩니다.

Related: [FrelyMCP 가이드](https://frely.cloud/docs/frelymcp/)

## AI 앱에 기기가 표시되지 않습니다.
<!-- id: no-device -->

컴퓨터에서 frely mcp start를 실행하고, CLI가 AI 앱과 같은 Frely 계정으로 로그인되어 있는지 확인하세요.

Related: [FrelyMCP 가이드](https://frely.cloud/docs/frelymcp/)

## 기기가 오프라인으로 표시됩니다.
<!-- id: offline -->

컴퓨터를 켜고 인터넷에 연결한 다음 frely mcp start를 다시 실행하세요. frely doctor는 계정, 설치, 버전, MCP 및 서비스 상태를 표시하며, -v를 붙이면 자세한 내용을 확인할 수 있습니다.

Console: [내 기기](https://frely.cloud/user/device)

## 기기 접근 권한이 만료되었습니다.
<!-- id: expired -->

기기의 MCP 접근 권한은 기본적으로 90일 동안 유지됩니다. 다시 승인하려면 frely mcp start를 실행하세요(frely mcp start --days에 1부터 365까지의 숫자를 지정하면 미리 갱신됩니다). MCP URL은 변경되지 않습니다. Frely 웹사이트의 My Devices(내 기기)에서 컴퓨터를 관리할 수 있습니다.

Console: [내 기기](https://frely.cloud/user/device)

## AI 앱은 왜 일부 폴더를 읽을 권한을 요청하나요?
<!-- id: permissions -->

명령어는 ~/.ssh, ~/.aws 같은 자격 증명 폴더에 대한 접근을 차단하는 샌드박스에서 실행되며, 도구는 사용자가 등록한 작업 공간에만 접근합니다. 작업에 더 많은 권한이 필요하면 앱이 반드시 요청해야 하며, 사용자가 Frely 사이트에서 허용 여부와 유효 기간을 결정하고 나중에 철회할 수도 있습니다. AI 앱이 스스로 요청을 승인할 수는 없습니다.

Related: [FrelyMCP 가이드](https://frely.cloud/docs/frelymcp/) · [How the sandbox protects your data](https://frely.cloud/connect/sandbox/)

## 컴퓨터에서 Frely는 어떻게 제거하나요?
<!-- id: uninstall -->

로컬 터미널에서 frely uninstall을 실행하세요. 먼저 삭제될 항목 전체를 보여 주고, yes를 입력하면 삭제를 진행합니다. 이 컴퓨터의 접근 권한을 철회하고, 서비스, 저장된 로그인, 기기 식별 정보, 설정, 캐시를 제거한 후 마지막으로 frely 프로그램을 삭제합니다. 계정에 저장된 Providers와 Agents는 그대로 유지됩니다.
