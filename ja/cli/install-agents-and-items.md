---
title: Frely の Agent、プロンプト、Skill をインストールするには？
description: ターミナルから Frely の Agent、プロンプト、Skill をインストールして実行します。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 13
---

# Frely の Agent、プロンプト、Skill をインストールするにはどうすればよいですか？

Agent の場合： `frely item install <username/name> --host claude-code --scope global` を実行します (ホストは chatgpt、codex、claude-code、pi、generic に対応)。実行するには `printf '%s' 'Your task' | frely agent run <username/name> --input-stdin --json` を使用します。マーケットプレイスのアイテムの場合： `frely item install <username/skill-name> --host claude-code` を実行します。名前は Creator のプロフィールページ (`frely.cloud/@<username>`) か、Creator から送られてきた共有リンクで確認できます。Creator のアイテムは公開の Store には掲載されず、Store には Frely が選んだ製品のみが表示されます。最初の呼び出し時には認証のためブラウザが開き、有料のパーツはアカウントがパスを保持している場合にのみインストールされます。それ以外の場合は、コマンドがパスの購入方法を案内します。Frely は、自身がインストールしていないフォルダーや、ユーザーが編集したファイルを決して上書きすることはありません。

Related: [Frely App (My Devices)](https://frely.cloud/app/) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
