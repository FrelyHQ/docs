---
title: Deixe a IA ajudar a gerir os seus servidores sem entregar as suas chaves SSH
description: Dar a um assistente de IA acesso ssh a partir do seu portátil expõe todas as chaves em ~/.ssh. Ligar o próprio servidor à sua conta de IA mantém as chaves fora da equação e torna cada permissão revogável.
date: 2026-10-23
draft: false
applies_to: any
updated: 2026-10-23
---

Cada vez mais pessoas deixam um assistente de IA ler registos, editar configurações e reiniciar serviços. A forma óbvia é executar uma IA que consiga executar comandos no seu próprio computador e deixá-la entrar no servidor por `ssh`.

Isto funciona. Mas vale a pena parar num pormenor: **para deixar a IA executar `ssh`, dá-lhe toda a sua pasta `~/.ssh`.**

## Ao passar pelo seu portátil: entrega mais do que pensa

Para a IA executar `ssh prod` no seu computador, tem de ler a configuração e as chaves privadas em `~/.ssh`. A maioria dos controlos de permissões só consegue decidir se uma pasta é legível. Não consegue dizer "apenas este servidor". Isso significa:

- Pode ler **todas** as chaves privadas, e não apenas a deste servidor.
- Enquanto os seus comandos conseguirem aceder à rede, uma chave pode sair do seu computador. Uma chave divulgada continua válida. Desligar depois o acesso da IA não a devolve; tem de remover a chave pública de todos os servidores.
- Depois de `ssh` iniciar sessão, o que a IA pode fazer no servidor depende da conta por trás dessa chave. Se for root, a IA tem root.

O registo do servidor apenas mostra "o seu portátil iniciou sessão com a sua chave". Não consegue distinguir os seus comandos dos da IA.

## No sentido inverso: deixar o servidor ligar-se para fora

Em vez de dar à IA uma chave para abrir a porta do servidor, instale um pequeno programa no servidor. O servidor liga-se para fora, à sua conta de IA, e é você que decide o que a IA aí pode fazer.

Com o Frely, funciona assim:

1. No site do Frely, abra **My Devices → Add a computer** (Os meus dispositivos → Adicionar um computador) e crie um comando de instalação de utilização única. Cole-o no servidor. O token funciona uma única vez, expira ao fim de 15 minutos e não é guardado no servidor.
2. O servidor liga-se para fora, ao Frely. **Não abre nenhuma porta.**
3. Ligue o FrelyMCP no ChatGPT, no Claude ou no Codex, e a IA pode ler ficheiros e executar comandos nesse servidor.

O que isto muda:

- **Nenhuma chave de longa duração vai para a IA.** O servidor tem a sua própria identidade de dispositivo, e os comandos que a IA executa não conseguem lê-la.
- **Os comandos são executados numa sandbox por predefinição.** Só podem escrever na pasta que escolher e na pasta temporária, e pastas de credenciais como `~/.ssh` e `~/.aws` ficam inacessíveis para leitura. Quando o servidor não consegue executar a sandbox, os comandos são recusados em vez de correrem sem proteção.
- **Mais acesso precisa da sua aprovação.** A IA pede, e você decide no site do Frely, com uma passkey ou um código de autenticador, se permite e por quanto tempo: um comando, 12 horas, ou até que a autorização do dispositivo termine. A IA não pode aprovar o seu próprio pedido.
- **Revogue em qualquer altura, com efeito imediato.** Cada chamada volta a verificar a autorização, por isso, depois de revogar, o comando seguinte é recusado.

## Quatro hábitos que tornam tudo mais seguro

No servidor, a fronteira é "o utilizador de sistema com que o Frely é executado, mais a sandbox". Estas escolhas determinam a sua robustez:

1. **Instale como um utilizador dedicado, não como root.** Por exemplo, crie `frely-ops` e dê-lhe acesso apenas à pasta da sua aplicação. A sandbox limita as escritas, não o que o utilizador consegue ler, por isso, quanto mais limitados forem os direitos do utilizador, melhor. Para ler registos de sistema sem ser root, adicione o utilizador aos grupos `adm` e `systemd-journal`.
2. **Verifique se a sandbox funciona.** Em Linux, instale `bubblewrap`, `socat` e `ripgrep`; o `frely doctor` diz-lhe se a sandbox está disponível. Sistemas mais antigos, como o CentOS 7, não a conseguem executar; aí, aprove "executar sem a sandbox" por um período limitado em vez de a deixar aberta.
3. **Partilhe apenas a pasta de que precisa.** Defina `FRELY_WORKSPACE=/srv/myapp` em vez de partilhar toda a pasta home, e mantenha a autorização do dispositivo de curta duração.
4. **Saiba o que significa o grupo docker.** Um utilizador no grupo `docker` consegue ler `docker logs` diretamente, o que é prático, mas essa pertença ao grupo é tão poderosa como ser root.

## Quando o ssh ainda é aceitável

Se a IA só lê registos e executa alguns comandos apenas de leitura, passar pelo seu portátil pode ser aceitável, desde que:

- crie uma chave separada para este servidor e a restrinja no `authorized_keys` do servidor com `from=` e `restrict`, iniciando sessão como um utilizador limitado;
- não haja outras chaves poderosas na mesma `~/.ssh`;
- permita o acesso apenas para a tarefa em causa, e não durante dias.

## Em resumo

Quando a IA gere os seus servidores, o que importa é menos o quão inteligente é e mais aquilo de que dispõe. **Em vez de entregar as suas chaves à IA, deixe o servidor ligar-se para fora e aprove o que ela pode fazer.**

[Comece com o Frely CLI](https://cli.frely.cloud/)
