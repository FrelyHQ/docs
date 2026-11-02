---
title: Frely Agent, 프롬프트 또는 Skill은 어떻게 설치하나요?
description: 터미널에서 Frely Agent, 프롬프트 또는 Skill을 설치하고 실행하는 방법입니다.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 13
---

# Frely Agent, 프롬프트 또는 Skill은 어떻게 설치하나요?

Agent: `frely item install <username/name> --host claude-code --scope global` (호스트: chatgpt, codex, claude-code, pi, generic). `printf '%s' 'Your task' | frely agent run <username/name> --input-stdin --json` 명령으로 실행합니다. 마켓플레이스 항목: `frely item install <username/skill-name> --host claude-code`. 이름은 Creator 프로필 페이지(`frely.cloud/@<username>`)나 Creator가 보내준 공유 링크에서 확인할 수 있으며, Creator 항목은 공개 Store에는 등록되어 있지 않고 Store에는 Frely가 직접 선정한 제품만 표시됩니다. 처음 호출하면 브라우저가 열려 인증 절차가 진행되고, 유료 부분은 계정에 패스가 있을 때에만 설치되며, 그렇지 않으면 명령이 구매 방법을 안내합니다. Frely는 자신이 설치하지 않은 폴더나 사용자가 편집한 파일을 절대 덮어쓰지 않습니다.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
