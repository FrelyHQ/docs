---
title: 기기 서비스 없이 프로그램만 설치하려면 어떻게 해야 하나요?
description: 기기 서비스 없이 frely 프로그램을 설치합니다.
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 4
---

# 기기 서비스 없이 프로그램만 설치하려면 어떻게 해야 하나요?

`https://frely.cloud/install.sh`(macOS 및 Linux) 또는 `https://frely.cloud/install.ps1`(Windows)을 사용하세요. 이 설치 스크립트는 `frely`만 설치하므로 스크립트, Skill, Agent에 적합합니다. 또는 `npm install --global --ignore-scripts frely-cli@latest`(Node.js 22 이상)를 실행할 수도 있습니다. 설치 프로그램은 실행 파일의 SHA-256을 검사하며, 먼저 GitHub Releases에서 다운로드하고, 실패하면 npmmirror와 npmjs로 대체합니다.

Related: [install.sh](https://frely.cloud/install.sh) · [install.ps1](https://frely.cloud/install.ps1) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
