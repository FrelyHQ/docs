---
title: AI는 어떤 폴더에 접근할 수 있나요?
description: AI가 사용할 수 있는 폴더와 변경 방법을 안내합니다.
applies_to: any
updated: 2026-11-02
site: cli
category: Getting started
order: 5
---

# AI는 어떤 폴더에 접근할 수 있나요?

기본 폴더는 `~/Frely`이며, 설치 프로그램이 이 폴더를 생성합니다. 이 변경 이전에 설정된 컴퓨터는 기존에 공유하던 폴더를 계속 사용합니다. 다른 폴더를 공유하려면 설치 전에 `FRELY_WORKSPACE=/path`를 설정하세요. 설치 후에는 `frely link workspace add <path>`로 폴더를 추가로 공유하고, `frely link workspace remove <path>`로 공유를 중지하며, `frely link workspace list`로 전체 목록을 확인할 수 있습니다.

AI 클라이언트가 공유된 폴더 외부의 폴더가 필요하면 사용자에게 확인을 요청하며, 웹에서 해당 폴더를 제한된 기간 동안 또는 영구적으로 허용할 수 있습니다. 영구 허용은 개별 폴더에만 적용되며, 홈 폴더나 그 상위 폴더에는 적용되지 않고, 패스키 또는 인증 앱 코드가 필요합니다. 웹에서 허용한 폴더는 기기 페이지에 표시되며, 언제든지 그곳에서 제거할 수 있습니다. 허용된 폴더 안에 있는 자격 증명 및 셸 시작 파일은 계속 보호됩니다.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Device MCP 문서](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md)
