---
title: Claude Code 또는 Codex는 어떻게 연결하나요?
description: 명령 한 줄로 Claude Code 또는 Codex를 FrelyMCP에 연결하세요.
applies_to: any
updated: 2026-10-29
site: cli
category: Connecting AI clients
order: 7
---

# Claude Code 또는 Codex는 어떻게 연결하나요?

Claude Code: `claude mcp add --transport http frelymcp "https://mcp.frely.cloud/mcp"` 명령을 실행한 뒤 Claude Code에서 `/mcp`를 열어 권한을 승인하세요. Codex: `codex mcp add frelymcp --url "https://mcp.frely.cloud/mcp"` 명령을 실행하면 됩니다. 두 방식 모두 OAuth를 사용하므로, 요청이 표시되면 Frely에 로그인하고 클라이언트를 승인하면 됩니다. OAuth를 사용하는 원격 HTTP MCP를 지원하는 다른 모든 MCP 클라이언트도 동일한 URL을 사용할 수 있습니다.

Related: [FrelyMCP 엔드포인트](https://mcp.frely.cloud/mcp) · [설치 페이지](https://cli.frely.cloud/#install) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
