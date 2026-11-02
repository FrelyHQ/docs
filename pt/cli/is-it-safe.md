---
title: É seguro deixar uma IA utilizar o meu computador?
description: Como são limitados o acesso, a sandbox e as credenciais no seu computador.
applies_to: any
updated: 2026-11-02
site: cli
category: Security and limits
order: 17
---

# É seguro deixar uma IA utilizar o meu computador?

O acesso está limitado às pastas que partilha. As ferramentas de ficheiros rejeitam fugas através de symlinks e limitam as leituras e as escritas a 1 MiB. Os comandos são executados como o seu utilizador do sistema operativo dentro de uma sandbox do sistema operativo: as pastas de credenciais ficam inacessíveis, as escritas estão limitadas à área de trabalho e ao diretório temporário, e o tráfego de rede passa por um proxy. Se o computador não conseguir criar uma sandbox, os comandos são recusados em vez de serem executados sem sandbox. O URL do MCP não contém nenhum segredo, e a CLI mantém a respetiva chave de execução encriptada no armazenamento de credenciais do sistema operativo. Pode revogar o acesso a qualquer momento com `frely link off`; este comando revoga todos os clientes e bloqueia o controlo remoto nesse computador até que aí execute `frely link on`.

Related: [Como a sandbox protege os seus dados](https://frely.cloud/connect/sandbox/) · [Limites das credenciais e da instalação](https://github.com/FrelyHQ/frely-cli/blob/main/docs/credential-storage.md) · [Política de segurança](https://github.com/FrelyHQ/frely-cli/blob/main/SECURITY.md) · [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md)
