---
title: 샌드박스 때문에 명령이 실패했습니다. 어떻게 해야 하나요?
description: 샌드박스가 명령을 차단할 때 취해야 할 조치입니다.
applies_to: any
updated: 2026-10-29
site: cli
category: Security and limits
order: 18
---

# 샌드박스 때문에 명령이 실패했습니다. 어떻게 해야 하나요?

Frely 연결 페이지에서는 연결에 대해 더 많은 권한을 열어 줄 수 있습니다: 읽을 자격 증명 폴더, 쓸 수 있는 추가 폴더, 또는 샌드박스 없이 제한된 시간 동안 실행하는 것입니다. Windows나 bubblewrap, socat, ripgrep이 없는 Linux에서는 컴퓨터가 샌드박스를 만들 수 없어 명령이 거부됩니다. Linux에서는 이 도구들을 설치하세요. `FRELY_SANDBOX=off`는 샌드박스를 해당 기기에서만 끕니다. 위험을 감수하기로 결정한 경우에만 사용하세요.

Related: [샌드박스가 데이터를 보호하는 방식](https://frely.cloud/connect/sandbox/) · [연결 페이지](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
