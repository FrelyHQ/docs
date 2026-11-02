---
title: AI に自分のコンピューターを操作させるのは安全ですか？
description: コンピューター上でのアクセス、サンドボックス、資格情報の制限の仕組み。
applies_to: any
updated: 2026-11-02
site: cli
category: Security and limits
order: 17
---

# AI に自分のコンピューターを操作させるのは安全ですか？

アクセスは、共有したフォルダーに限定されます。ファイルツールはシンボリックリンクによる脱出を拒否し、読み書きは 1 MiB までに制限されます。コマンドは OS のサンドボックス内で、お使いの OS ユーザーとして実行されます。資格情報フォルダーは読み取れず、書き込みはワークスペースと一時ディレクトリに制限され、ネットワークはプロキシーを経由します。コンピューターがサンドボックス化できない場合、サンドボックスなしで実行するのではなく、コマンドは拒否されます。MCP の URL に秘密情報は含まれておらず、CLI は実行キーを OS の資格情報ストアで暗号化して保持します。アクセスはいつでも `frely link off` で取り消せます。これによりすべてのクライアントが取り消され、そのコンピューターでのリモート操作は、`frely link on` を実行するまでロックされます。

Related: [サンドボックスがあなたのデータを守る仕組み](https://frely.cloud/connect/sandbox/) · [資格情報とインストールの境界](https://github.com/FrelyHQ/frely-cli/blob/main/docs/credential-storage.md) · [セキュリティポリシー](https://github.com/FrelyHQ/frely-cli/blob/main/SECURITY.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
