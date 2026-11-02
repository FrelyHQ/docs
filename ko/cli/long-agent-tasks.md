---
title: Frely Agent가 오래 걸리면 어떻게 되나요?
description: 오래 걸리는 Agent 실행이 작업 ID를 반환하는 방식과 기다리는 방법, 취소하는 방법, 진행 상태 줄을 끄는 방법을 안내합니다.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# Frely Agent가 오래 걸리면 어떻게 되나요?

`frely agent run`은 실행 기록을 컴퓨터에 저장하고 백그라운드 워커가 Agent를 기다리기 때문에, 명령이 도중에 끊기더라도 오래 걸리는 작업은 그대로 유지됩니다. 작업은 Frely에서 계속 실행되며 상태를 조회하는 데는 비용이 들지 않습니다. 명령이 답변보다 먼저 끝났다면 `frely agent result --last --wait`(또는 `frely agent result <runId> --wait`)를 실행하세요. 실행이 진행되는 동안 `frely agent result <runId>`를 실행하면 Agent가 기록해 둔 경우 가장 최신 진행 상태 줄이 표시됩니다. `frely agent cancel <runId>`로 실행을 중단하면 Frely에서도 작업이 중단되고 이미 실행된 부분은 과금됩니다. Agent의 Creator가 설정한 가격은 작업이 완료되었을 때, 취소했을 때, 또는 Agent가 이미 출력을 전달했을 때 과금되며, 출력 없이 실패한 작업에는 과금되지 않습니다. 진행 상태 줄을 숨기려면 `frely agent run`에 `--no-progress-summary`를 추가하거나 AI가 읽는 `AGENTS.md` 또는 `CLAUDE.md` 파일에 `When calling Frely Agents, pass --no-progress-summary.`를 작성하세요.

Related: [Frely Agent, 프롬프트 또는 Skill 설치하기](./install-agents-and-items.md)
