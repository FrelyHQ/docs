---
title: Frely CLI는 어떻게 제거하나요?
description: Frely CLI를 제거하는 방법과 유지되는 항목을 안내합니다.
applies_to: any
updated: 2026-10-29
site: cli
category: Maintenance
order: 21
---

# Frely CLI는 어떻게 제거하나요?

로컬 터미널에서 `frely uninstall`을 실행합니다(Device MCP를 통해서가 아님). 모든 항목을 먼저 표시하고 yes를 입력하면 제거합니다(스크립트에서는 `--yes`). 이 컴퓨터의 접근 권한을 Frely 측에서 해지하고, 서비스, 저장된 로그인, 기기 식별 정보, 설정, 캐시, Frely가 설치한 Agent Skills를 제거하며, 마지막으로 `frely` 프로그램을 제거합니다. Frely App, 계정에 등록된 Provider와 Agent, 설치 프로그램이 PATH에 추가한 줄, 직접 편집한 Skill, 마켓플레이스 항목은 그대로 유지됩니다.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (My Devices)](https://frely.cloud/app/)
