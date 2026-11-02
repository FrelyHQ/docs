---
title: 如何安装 Frely Agent、提示词或 Skill？
description: 从终端安装并运行 Frely Agent、提示词或 Skill。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 13
---

# 如何安装 Frely Agent、提示词或 Skill？

Agent：`frely item install <username/name> --host claude-code --scope global`（主机：chatgpt、codex、claude-code、pi、generic）。使用 `printf '%s' 'Your task' | frely agent run <username/name> --input-stdin --json` 来运行它。市场条目：`frely item install <username/skill-name> --host claude-code`。你可以在 Creator 个人主页（`frely.cloud/@<username>`）或 Creator 发给你的分享链接中找到名称；Creator 的条目不会列在公开的 Store 中，Store 只展示 Frely 精选的产品。首次调用会打开浏览器进行授权；付费条目只有在你的账户持有通行证时才会安装，否则命令会提示如何购买。Frely 绝不会覆盖它未安装过的文件夹，也不会覆盖你编辑过的文件。

Related: [Frely App（My Devices，我的设备）](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
