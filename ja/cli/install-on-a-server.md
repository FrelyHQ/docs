---
title: ブラウザのないサーバーにインストールするにはどうすればよいですか？
description: ワンタイムインストールコマンドを使用して、ブラウザのないサーバーにインストールします。
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 3
---

# ブラウザのないサーバーにインストールするにはどうすればよいですか？

Frely AppのMy Devices（マイデバイス）→ Add a computer（コンピュータを追加）→ Create install command（インストールコマンドを作成）でワンタイムインストールコマンドを作成するか、ChatGPTやClaude（FrelyMCPに接続されたもの）にコンピュータの追加を依頼してください。そのコマンドをサーバー上で貼り付けます。コマンドは `curl -fsSL https://frely.cloud/start.sh | FRELY_INSTALL_TOKEN=fit_... sh` のような形式です。トークンは1回だけ使用でき、15分で期限切れになり、保存されません。Linuxでは、SSHからログアウトした後もサービスがオンラインのままになるよう、`sudo loginctl enable-linger $USER` も実行してください。

Related: [Frely App（My Devices）](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
