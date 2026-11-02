---
title: 내 컴퓨터에서 실행 중인 MCP 서버를 원격 AI가 사용하게 하려면 어떻게 해야 하나요?
description: 내 컴퓨터에서 실행 중인 MCP 서버를 원격 AI가 사용하도록 허용합니다.
applies_to: any
updated: 2026-11-02
site: cli
category: Using your computer
order: 11
---

# 내 컴퓨터에서 실행 중인 MCP 서버를 원격 AI가 사용하게 하려면 어떻게 해야 하나요?

Frely는 루프백(loopback)에서만 수신 대기하는 서버를 찾아내며, `frely link local list` 명령으로 이를 확인할 수 있습니다. 다른 서버는 `frely link local add <name> --url http://127.0.0.1:<port>/mcp` 명령으로 추가하고, stdio 서버라면 `frely link local add <name> -- <command> [args...]` 명령을 사용하세요. 각 서버는 Frely 연결 페이지에서 하나씩 직접 켜기 전까지는 원격 클라이언트에 노출되지 않습니다. 활성화된 서버는 명령 샌드박스 밖에서 사용자 계정으로 실행됩니다.

Related: [연결 페이지](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
