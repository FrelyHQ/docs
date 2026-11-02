---
title: 내 MCP URL이란 무엇이며, 변경되나요?
description: FrelyMCP 주소와 이를 출력하는 방법.
applies_to: any
updated: 2026-11-02
site: cli
category: Connecting AI clients
order: 8
---

# 내 MCP URL이란 무엇이며, 변경되나요?

FrelyMCP 주소는 계정에 등록된 모든 컴퓨터에서 https://mcp.frely.cloud/mcp로 동일합니다. 이 주소는 절대 변경되지 않으며 비밀 정보를 포함하지 않습니다. OAuth 토큰은 클라이언트가 보관합니다. URL을 출력하려면 `frely link on`을 실행하고, URL, 워크스페이스, 인증 만료 시각 및 서비스 상태를 표시하려면 `frely link status`를 실행하세요(스크립트에서는 `--json`을 추가하세요).

Related: [FrelyMCP 엔드포인트](https://mcp.frely.cloud/mcp) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
