---
title: Frely CLI をアンインストールするにはどうすればよいですか？
description: Frely CLI を削除する方法と、削除後に残るものについて説明します。
applies_to: any
updated: 2026-10-29
site: cli
category: Maintenance
order: 21
---

# Frely CLI をアンインストールするにはどうすればよいですか？

ローカルのターミナルで `frely uninstall` を実行します(Device MCP 経由では実行しないでください)。まず削除対象をすべて一覧表示し、yes と入力すると削除が実行されます(スクリプトで実行する場合は `--yes` を指定します)。Frely 側でこのコンピューターのアクセス権を取り消し、サービス、保存されたログイン情報、デバイス ID、設定、キャッシュ、Frely がインストールした Agent Skills を削除し、最後に `frely` プログラムを削除します。Frely App、アカウント内の Providers と Agents、インストーラーが追加した PATH の行、編集した Skills、マーケットプレイスのアイテムは残ります。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (My Devices)](https://frely.cloud/app/)
