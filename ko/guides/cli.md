---
title: Skill과 CLI로 Frely 사용하기
description: Frely CLI와 그 Skill을 설치하여 AI 에이전트가 Frely 계정을 사용하고 터미널에서 내 컴퓨터를 제어할 수 있도록 하세요.
applies_to: any
updated: 2026-11-02
order: 0
---

# Skill과 CLI로 Frely 사용하기

Frely CLI는 Frely 계정을 위한 명령줄 도구입니다. CLI의 Skill은 셸을 사용할 수 있는 AI 에이전트(Claude Code, Codex, pi 등)에게 이 명령줄 사용법을 가르쳐 줍니다. 즉, 로그인하고, Frely 계정을 호출하고, 구매한 항목을 설치하고, 내 컴퓨터에서 명령을 실행하는 방법입니다. AI 에이전트에서 Frely를 사용할 때는 이 방법을 권장합니다. AI 앱이 명령을 실행할 수 없다면 대안인 FrelyMCP 가이드를 대신 사용하세요.

## 시작하기 전에
<!-- id: before -->

Frely 계정(frely.cloud에서 로그인)과, CLI를 설치하는 컴퓨터에서 셸 명령을 실행할 수 있는 AI 에이전트가 필요합니다. CLI는 macOS, Linux, Windows에서 실행됩니다.

## CLI 설치하기
<!-- id: install -->

자신의 시스템에 맞는 명령을 실행하세요. 이 명령은 `frely` 프로그램만 설치합니다.

```sh
curl -fsSL https://frely.cloud/install.sh | sh
```

Windows에서는 PowerShell에서 다음 명령을 실행하세요:

```sh
curl.exe -fsSLo "$env:TEMP\frely-install.ps1" https://frely.cloud/install.ps1; powershell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\frely-install.ps1"
```

## 로그인하기
<!-- id: login -->

아래 명령을 실행하세요. 브라우저가 열리므로 로그인하거나 회원가입한 뒤 이 컴퓨터를 승인할 수 있습니다. 브라우저가 없는 컴퓨터에서는 `frely login --email`을 실행한 뒤 받은편지함으로 전송된 코드를 입력하세요.

```sh
frely login
```

## Skill 설치하기
<!-- id: skill -->

`frely` Skill을 AI 에이전트에 설치하세요. `<host>`는 `claude-code`, `codex`, `pi`, `chatgpt` 또는 `generic`으로 바꿔 입력하세요. 설치 후에는 에이전트가 Skill을 인식하도록 에이전트 세션을 다시 시작하세요.

```sh
frely skill install --host <host>
```

## 에이전트에게 요청하기
<!-- id: use -->

에이전트에게 원하는 것을 자연스러운 문장으로 말하세요. 예를 들어 "내 Frely 컴퓨터 목록 보여 줘", "내 회사 컴퓨터에서 테스트 실행해 줘", 또는 "Frely에서 구매한 Skill 설치해 줘"처럼 말하면 됩니다. 에이전트가 대신 `frely` 명령을 실행합니다. 에이전트가 컴퓨터를 처음 제어할 때는 Frely가 짧은 코드로 Frely 사이트에서 승인하도록 요청합니다. 에이전트는 스스로의 요청을 승인할 수 없습니다.

## 컴퓨터를 제어 가능하게 만들기
<!-- id: device -->

에이전트가 다른 컴퓨터에서 작업하게 하려면 해당 컴퓨터에서 이 명령을 실행하세요. 이 명령은 로그인하고 컴퓨터를 승인한 뒤 백그라운드 서비스를 시작합니다. 브라우저가 없는 서버라면 Frely 앱의 My Devices(내 기기)에서 일회용 설치 명령을 만드세요.

```sh
frely link on
```

## 에이전트가 사용하는 명령
<!-- id: commands -->

| 명령 | 설명 |
| --- | --- |
| `frely devices` | 내 컴퓨터와 온라인 여부를 표시합니다. |
| `frely run <device> -- <command>` | 컴퓨터에서 명령을 실행합니다. |
| `frely read <device>:<path>` | 컴퓨터의 파일이나 폴더를 읽습니다. |
| `frely edit <device>:<path> --from <file>` | 컴퓨터에 파일을 작성합니다. |
| `frely item install <username/name> --host <host>` | Frely에서 Skill, Prompt 또는 Agent를 설치합니다. |
| `frely api list` | 에이전트가 호출할 수 있는 계정 도구를 표시합니다. |
| `frely doctor` | 로그인, 설치, 연결 상태를 점검합니다. |

## 문제가 발생하면
<!-- id: help -->

에이전트가 Frely를 사용하지 않는다면 에이전트 세션을 다시 시작하고 `frely skill install`이 완료되었는지 확인하세요. `frely`를 찾을 수 없다면 새 터미널을 열고 다시 실행하세요. 컴퓨터가 오프라인으로 표시되면 그 컴퓨터에서 `frely link on`을 실행하세요. 명령이 승인을 요청하면 출력된 링크를 열어 Frely 사이트에서 확인하세요. 그 외 문의: support@frely.cloud.
