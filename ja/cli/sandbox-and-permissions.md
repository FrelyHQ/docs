---
title: サンドボックスのためにコマンドが失敗しました。どうすればよいですか？
description: サンドボックスがコマンドをブロックしたときの対処方法。
applies_to: any
updated: 2026-10-29
site: cli
category: Security and limits
order: 18
---

# サンドボックスのためにコマンドが失敗しました。どうすればよいですか？

Frely の接続ページでは、接続ごとにさらに多くの設定を開けられます：読み取り対象の資格情報フォルダー、書き込み用の追加フォルダー、またはサンドボックスなしでの時間制限付き実行です。Windows の場合や、bubblewrap、socat、ripgrep が揃っていない Linux の場合、コンピューターがサンドボックスを作成できないためコマンドは拒否されます。Linux ではこれらのツールをインストールしてください。`FRELY_SANDBOX=off` を設定すると、サンドボックスはそのデバイス上でのみオフになります。リスクを受け入れられる場合にのみ使用してください。

Related: [サンドボックスがデータを保護する仕組み](https://frely.cloud/connect/sandbox/) · [接続ページ](https://frely.cloud/user/device) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
