---
title: 터미널이나 AI에서 Frely 계정(API Key, Credit, 플랜, 주문)을 어떻게 관리하나요?
description: frely api로 API Key, Credit, 플랜, 주문을 관리합니다.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# 터미널이나 AI에서 Frely 계정(API Key, Credit, 플랜, 주문)을 어떻게 관리하나요?

`frely api list`를 사용하면 작업 목록을 볼 수 있고, `frely api describe <name>`으로 개별 작업을 살펴볼 수 있으며, `frely api call <name> --json '{...}'`으로 작업을 실행할 수 있습니다. 예: `frely api call agents.list`, `frely api call usage.summary`. FrelyMCP에 연결된 AI 클라이언트는 `frely_list` 및 `frely_call` 도구를 통해 동일한 작업에 접근합니다. 처음 `frely api` 명령을 실행하면 별도의 OAuth 인증을 위해 브라우저가 열립니다. 이 작업들은 https://frely.cloud/mcp에서 제공됩니다.

Related: [frely api 문서](https://github.com/FrelyHQ/frely-cli/blob/main/docs/api.md) · [Frely 계정 API 엔드포인트](https://frely.cloud/mcp) · [Frely App(내 기기)](https://frely.cloud/app/)
