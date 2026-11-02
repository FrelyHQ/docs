---
title: サインイン・サインアウトの方法は？
description: サインイン、サインアウト、およびパソコンのリモート操作の停止方法。
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 15
---

# サインイン・サインアウトの方法は？

`frely link on` は必要なときにサインインを行うため、最初に別途ログインする必要はありません。サインインだけを行うには `frely login` を使用してください(ブラウザーのないマシンでは `--no-browser` を追加するか、`--email <address>` を指定した後に `--code <6-digit code>` を指定します)。サインアウトには `frely logout` を使用します。サインアウトすると、`frely api` の認可も取り消されます。パソコンのリモート操作を停止するには、`frely link stop`(一時停止)または `frely link off`(すべてのクライアントを取り消し、サービスをアンインストール)を使用してください。`frely link off` を実行すると、このパソコンのリモート操作もロックされます。Frely のウェブページからは再度オンにすることができず、ロックを解除できるのはこのパソコン上での `frely link on` のみです。

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (My Devices)](https://frely.cloud/app/)
