---
title: 브라우저가 없는 서버에는 어떻게 설치하나요?
description: 일회용 설치 명령어를 사용하여 브라우저가 없는 서버에 설치합니다.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 3
---

# 브라우저가 없는 서버에는 어떻게 설치하나요?

Frely App에서 My Devices(내 기기), Add a computer(컴퓨터 추가), Create install command(설치 명령어 만들기)로 이동하여 일회용 설치 명령어를 만들거나, FrelyMCP에 연결된 ChatGPT 또는 Claude에게 컴퓨터 추가를 요청하세요. 서버에서 명령어를 붙여넣습니다. 명령어는 `curl -fsSL https://frely.cloud/start.sh | FRELY_INSTALL_TOKEN=fit_... sh`와 같은 형태입니다. 토큰은 한 번만 사용할 수 있고 15분 후 만료되며 저장되지 않습니다. Linux에서는 SSH에서 로그아웃한 후에도 서비스가 온라인 상태를 유지하도록 `sudo loginctl enable-linger $USER`도 함께 실행하세요.

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
