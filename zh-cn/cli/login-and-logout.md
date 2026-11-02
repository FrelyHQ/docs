---
title: 如何登录或退出登录？
description: 登录、退出登录以及停止对计算机的远程控制。
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 15
---

# 如何登录或退出登录？

`frely link on` 会在需要时自动登录，因此你无需先单独登录。如需单独登录，可使用 `frely login`（在没有浏览器的机器上可加 `--no-browser`，或先用 `--email <address>` 再用 `--code <6-digit code>`）；退出登录可使用 `frely logout`，退出登录的同时会撤销 `frely api` 的授权。要停止对计算机的远程控制，可使用 `frely link stop`（暂停）或 `frely link off`（撤销所有客户端并卸载服务）。`frely link off` 还会在这台计算机上锁定远程控制：Frely 网页无法将其重新开启，只有在这台计算机上运行 `frely link on` 才能解除锁定。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App（My Devices，我的设备）](https://frely.cloud/app/)
