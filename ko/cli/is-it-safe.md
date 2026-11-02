---
title: AI가 내 컴퓨터를 사용해도 안전한가요?
description: 컴퓨터에서 접근, 샌드박스, 자격 증명이 어떻게 제한되는지 설명합니다.
applies_to: any
updated: 2026-11-02
site: cli
category: Security and limits
order: 17
---

# AI가 내 컴퓨터를 사용해도 안전한가요?

접근은 여러분이 공유한 폴더로 제한됩니다. 파일 도구는 symlink 탈출을 거부하며 읽기와 쓰기를 1 MiB로 제한합니다. 명령은 OS 샌드박스 안에서 여러분의 OS 사용자로 실행됩니다. 즉, 자격 증명 폴더는 읽을 수 없고, 쓰기는 작업 공간과 임시 디렉터리로 제한되며, 네트워크는 프록시를 통해 전달됩니다. 컴퓨터가 샌드박싱을 지원하지 않으면 명령은 샌드박스 없이 실행되는 대신 거부됩니다. MCP URL에는 비밀 정보가 없으며, CLI는 실행 키를 OS 자격 증명 저장소에 암호화하여 보관합니다. 언제든지 `frely link off`로 접근을 취소할 수 있으며, 이렇게 하면 모든 클라이언트의 접근이 취소되고 그 컴퓨터에서 `frely link on`을 실행하기 전까지 원격 제어가 잠깁니다.

Related: [샌드박스가 데이터를 보호하는 방식](https://frely.cloud/connect/sandbox/) · [자격 증명과 설치 경계](https://github.com/FrelyHQ/frely-cli/blob/main/docs/credential-storage.md) · [보안 정책](https://github.com/FrelyHQ/frely-cli/blob/main/SECURITY.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
