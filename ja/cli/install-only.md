---
title: デバイスサービスなしでプログラムのみをインストールするにはどうすればよいですか？
description: デバイスサービスなしで frely プログラムをインストールします。
applies_to: any
updated: 2026-10-29
site: cli
category: Getting started
order: 4
---

# デバイスサービスなしでプログラムのみをインストールするにはどうすればよいですか？

`https://frely.cloud/install.sh`(macOS および Linux)または `https://frely.cloud/install.ps1`(Windows)を使用してください。これらは `frely` のみをインストールするため、スクリプト、Skill、Agent に適しています。または `npm install --global --ignore-scripts frely-cli@latest`(Node.js 22 以降)を実行してください。インストーラーは実行ファイルの SHA-256 を確認したうえで、まず GitHub Releases からダウンロードし、その後 npmmirror と npmjs にフォールバックします。

Related: [install.sh](https://frely.cloud/install.sh) · [install.ps1](https://frely.cloud/install.ps1) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
