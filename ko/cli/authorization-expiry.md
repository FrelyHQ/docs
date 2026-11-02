---
title: 기기 접근은 얼마나 유지되며, 어떻게 갱신하나요?
description: 기기 접근이 유지되는 기간과 갱신 방법을 안내합니다.
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 16
---

# 기기 접근은 얼마나 유지되며, 어떻게 갱신하나요?

기기 MCP 접근은 기본적으로 90일 동안 유지됩니다. 만료되기 전에 `frely link on --days 1..365`를 실행해 갱신하거나 다른 기간을 선택할 수 있습니다. 만료되면 요청과 대기 중인 작업이 중단되고(이미 완료된 쓰기 작업은 되돌려지지 않음) `frely link on`이 다시 승인을 요청합니다. URL은 절대 변경되지 않습니다. Frely 웹사이트의 My Devices에서 컴퓨터를 관리할 수 있습니다.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [Device MCP 문서](https://github.com/FrelyHQ/frely-cli/blob/main/docs/device-mcp.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
