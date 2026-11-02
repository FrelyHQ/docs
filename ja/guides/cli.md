---
title: Skill と CLI で Frely を使う
description: Frely CLI とその Skill をインストールして、AI エージェントがあなたの Frely アカウントを使い、ターミナルから自分のコンピューターを操作できるようにします。
applies_to: any
updated: 2026-11-02
order: 0
---

# Skill と CLI で Frely を使う

Frely CLI は、あなたの Frely アカウント用のコマンドラインです。その Skill は、シェルを持つ AI エージェント（Claude Code、Codex、pi など）に、このコマンドラインの使い方を教えます。サインイン、Frely アカウントの呼び出し、購入したもののインストール、自分のコンピューターでのコマンド実行などです。AI エージェントから Frely を使うには、この方法がおすすめです。AI アプリがコマンドを実行できない場合は、代わりに FrelyMCP のガイド（別の方法）をご利用ください。

## 始める前に
<!-- id: before -->

Frely アカウント（frely.cloud でサインイン）と、CLI をインストールするコンピューター上でシェルコマンドを実行できる AI エージェントが必要です。CLI は macOS、Linux、Windows で動作します。

## CLI をインストールする
<!-- id: install -->

お使いのシステムに合ったコマンドを実行してください。このコマンドがインストールするのは `frely` プログラムだけです。

```sh
curl -fsSL https://frely.cloud/install.sh | sh
```

Windows の場合は、PowerShell で次のコマンドを実行します。

```sh
curl.exe -fsSLo "$env:TEMP\frely-install.ps1" https://frely.cloud/install.ps1; powershell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\frely-install.ps1"
```

## サインインする
<!-- id: login -->

次のコマンドを実行してください。ブラウザーが開くので、そこでサインインまたはサインアップを行い、このコンピューターを承認できます。ブラウザーのないコンピューターでは、`frely login --email` を実行し、受信箱に届いたコードを入力してください。

```sh
frely login
```

## Skill をインストールする
<!-- id: skill -->

`frely` の Skill を AI エージェントにインストールします。`<host>` は `claude-code`、`codex`、`pi`、`chatgpt`、`generic` のいずれかに置き換えてください。その後、Skill が認識されるように、エージェントのセッションを再起動してください。

```sh
frely skill install --host <host>
```

## エージェントに依頼する
<!-- id: use -->

やりたいことを普通の言葉でエージェントに伝えます。たとえば「Frely のコンピューター一覧を見せて」「オフィスのコンピューターでテストを実行して」「Frely で買った Skill をインストールして」などです。エージェントがあなたの代わりに `frely` コマンドを実行します。初めてコンピューターを操作するとき、Frely が短いコードを使って Frely サイト上での承認を求めます。エージェント自身が自分のリクエストを承認することはできません。

## コンピューターを操作できるようにする
<!-- id: device -->

エージェントに別のコンピューターで作業させたい場合は、そのコンピューター上で次のコマンドを実行してください。サインイン、コンピューターの承認、バックグラウンドサービスの起動が行われます。ブラウザーのないサーバーについては、Frely アプリの My Devices で 1 回限りのインストールコマンドを作成してください。

```sh
frely link on
```

## エージェントが使うコマンド
<!-- id: commands -->

| コマンド | 説明 |
| --- | --- |
| `frely devices` | 自分のコンピューターと、オンラインかどうかを一覧表示します。 |
| `frely run <device> -- <command>` | コンピューター上でコマンドを実行します。 |
| `frely read <device>:<path>` | コンピューター上のファイルやフォルダーを読み取ります。 |
| `frely edit <device>:<path> --from <file>` | コンピューター上のファイルに書き込みます。 |
| `frely item install <username/name> --host <host>` | Frely から Skill、Prompt、Agent をインストールします。 |
| `frely api list` | エージェントが呼び出せるアカウントツールを一覧表示します。 |
| `frely doctor` | サインイン、インストール、接続を確認します。 |

## うまく動かないとき
<!-- id: help -->

エージェントが Frely を使わない場合は、エージェントのセッションを再起動し、`frely skill install` が完了しているか確認してください。`frely` が見つからない場合は、新しいターミナルを開いてもう一度実行してください。コンピューターがオフラインと表示される場合は、そのコンピューターで `frely link on` を実行してください。コマンドが承認を求めてきた場合は、表示されたリンクを開いて Frely サイト上で確認してください。その他のご質問は support@frely.cloud まで。
