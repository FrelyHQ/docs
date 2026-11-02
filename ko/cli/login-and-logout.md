---
title: 로그인하거나 로그아웃하려면 어떻게 하나요?
description: 로그인, 로그아웃 및 컴퓨터 원격 제어를 중지하는 방법.
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 15
---

# 로그인하거나 로그아웃하려면 어떻게 하나요?

`frely link on`은 필요할 때 자동으로 로그인하므로, 별도로 먼저 로그인할 필요가 없습니다. 단독으로 로그인하려면 `frely login`을 사용하고(브라우저가 없는 기기에서는 `--no-browser`를 추가하거나, `--email <address>`를 입력한 뒤 `--code <6-digit code>`를 입력하세요), 로그아웃하려면 `frely logout`을 사용하세요. 로그아웃하면 `frely api` 권한 부여도 함께 취소됩니다. 컴퓨터의 원격 제어를 중지하려면 `frely link stop`(일시 중지) 또는 `frely link off`(모든 클라이언트의 권한을 취소하고 서비스를 제거)를 사용하세요. `frely link off`를 실행하면 이 컴퓨터에서 원격 제어가 잠깁니다. 즉, Frely 웹 페이지에서는 다시 켤 수 없으며, 이 컴퓨터에서 직접 `frely link on`을 실행해야만 잠금이 해제됩니다.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (My Devices)](https://frely.cloud/app/)
