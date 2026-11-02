---
title: 如何登入或登出？
description: 登入、登出及停止對電腦的遙距控制。
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 15
---

# 如何登入或登出？

`frely link on` 會在需要時登入，因此你無須預先另行登入。如需單獨登入，可使用 `frely login`（在沒有瀏覽器的電腦上可加上 `--no-browser`，或先輸入 `--email <address>` 再輸入 `--code <6-digit code>`）；登出則使用 `frely logout`，登出同時會撤銷 `frely api` 的授權。如要停止對電腦的遙距控制，可使用 `frely link stop`（暫停）或 `frely link off`（撤銷所有用戶端並解除安裝服務）。`frely link off` 亦會在這部電腦上鎖定遙距控制：Frely 網頁將無法再次開啟此功能，只有在這部電腦上執行 `frely link on` 才能解除鎖定。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App（My Devices，我的裝置）](https://frely.cloud/app/)
