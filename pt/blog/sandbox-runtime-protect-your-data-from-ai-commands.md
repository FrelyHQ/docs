---
title: O que um runtime de sandbox faz quando a IA executa comandos no seu computador
description: Uma explicação simples do runtime de sandbox de código aberto da Anthropic (srt): como limita ficheiros e rede ao nível do sistema operativo, onde termina, e como o Frely CLI o usa para manter as suas credenciais longe dos comandos que uma IA executa.
date: 2026-10-28
draft: false
applies_to: any
updated: 2026-10-28
---

Deixar uma IA executar comandos de shell no seu computador é útil. Pode instalar dependências, executar testes, ler logs e corrigir a compilação. Também significa que um programa que não escreveu, movido por texto que não reviu, é executado com a sua conta de utilizador.

Por predefinição, essa conta pode ler as suas chaves SSH, as suas credenciais na nuvem, os seus tokens de registo de pacotes e o seu perfil de navegador. Um comando não precisa de ser malicioso para causar danos. Uma injeção de prompt escondida numa página Web ou num comentário numa issue pode ser suficiente para fazer com que um comando de aparência perfeitamente normal leia um segredo e o envie para algum lado.

Perguntar "tem a certeza?" antes de cada comando não resolve isto. As pessoas aprovam coisas que não conseguem ler na íntegra. Uma resposta melhor é tornar a coisa perigosa impossível por predefinição e deixar uma pessoa abrir uma porta estreita quando é realmente necessário. É para isso que serve uma sandbox.

## O que é o srt

`srt` é o runtime de sandbox de código aberto da Anthropic (`@anthropic-ai/sandbox-runtime`). Foi criado para o Claude Code e pode ser usado como ferramenta de linha de comandos ou como biblioteca. Envolve qualquer processo, e tudo o que esse processo iniciar, em limites de ficheiros e de rede impostos pelo sistema operativo. Não há imagem de contentor nem máquina virtual.

O seu próprio README descreve-o como uma antevisão de investigação em beta, por isso trate-o como um alicerce sólido e não como uma garantia acabada.

### Como limita os ficheiros

As regras de ficheiros são simples de enunciar:

- **As leituras são permitidas em todo o lado por predefinição.** Basta listar os locais a esconder com `denyRead`, por exemplo as suas pastas de credenciais.
- **As escritas são negadas em todo o lado por predefinição.** Os locais onde um comando pode escrever são listados com `allowWrite`, normalmente a pasta do projeto e um diretório temporário. `denyWrite` prevalece sobre `allowWrite`, pelo que é possível excluir um ficheiro protegido de uma pasta permitida.

Do lado da leitura, é uma lista de negação, não uma lista de permissão. Isso é prático, porque as ferramentas precisam de ler muitos ficheiros de sistema, mas também significa que a sandbox só esconde o que alguém se lembrou de listar.

### Como limita a rede

Por predefinição, não é permitido qualquer acesso à rede. Um comando só consegue alcançar a rede através de proxies executados fora da sandbox, e são esses proxies que decidem que domínios são permitidos.

- **macOS:** o comando é executado sob um perfil Seatbelt gerado (`sandbox-exec`) que apenas permite comunicar com uma porta de proxy local.
- **Linux:** o comando é executado sob o bubblewrap com o namespace de rede removido, pelo que a única saída são proxies acedidos através de Unix sockets montados na sandbox.

O HTTP e o HTTPS passam por um proxy HTTP. O restante tráfego TCP passa por um proxy SOCKS5. Ambos impõem as listas de permissão e de negação de domínios. Os Unix sockets são bloqueados por predefinição.

### Porque é que esta é uma boa abordagem

Os limites vivem no sistema operativo, não no bom comportamento da IA e não numa lista de nomes de comandos. Um comando pode ser reescrito, embrulhado num script ou ofuscado. Ainda assim, não consegue ler uma pasta que a sandbox esconde nem escrever fora das pastas que lhe foram atribuídas. As mesmas regras aplicam-se a cada processo filho.

## O que o srt não faz

Uma sandbox não é um escudo mágico. Os limites, ditos com honestidade, são importantes, porque determinam em que se pode confiar nela.

- **É tão rigoroso quanto a sua configuração.** Se a lista de permissões da rede estiver aberta, tudo o que o comando conseguir ler pode ser enviado para fora. Se um segredo não estiver na lista de negação, a sandbox não o esconde.
- **Software em beta.** O próprio projeto o diz, e as suas opções podem mudar.
- **Diferenças entre plataformas.** Suporta macOS e Linux. No Linux precisa de bubblewrap, socat e ripgrep. O suporte a Windows é alfa no srt, e o Frely CLI não executa comandos em sandbox no Windows.
- **Algumas opções enfraquecem-no deliberadamente.** Permitir Unix sockets, sandboxes aninhadas ou Apple Events abre, em cada caso, um caminho para contornar o isolamento. O README alerta para estes casos.
- **Limita a árvore de processos de um só comando.** Não o protege de alguém que dê a palavra-passe à IA, nem de um ficheiro que copie você próprio para fora da sandbox.

## Como o Frely CLI usa o srt

O Frely CLI permite controlar um computador a partir da sua IA: a IA pede, o CLI executa comandos no seu dispositivo. Cada comando que o Frely CLI executa para um cliente de IA remoto passa primeiro pelo srt. Eis como isso funciona na prática, com base no código-fonte do CLI.

### Por predefinição

- **Escritas:** um comando pode escrever dentro da pasta do workspace e do diretório temporário do sistema. Mais nada.
- **As pastas de credenciais estão escondidas.** O CLI nega a leitura das chaves SSH, da configuração da AWS, da Google Cloud, do Kubernetes e do GitHub CLI, das chaves GnuPG, das credenciais git guardadas e dos ficheiros de tokens de registo de pacotes (`.npmrc`, `.pypirc`, credenciais do Cargo). As credenciais do próprio dispositivo Frely nunca podem ser abertas por qualquer aprovação.
- **Os locais sensíveis mantêm-se protegidos contra escrita.** Os ficheiros de arranque do shell, como `.zshrc` e `.bashrc`, os LaunchAgents do macOS e as pastas de credenciais estão protegidos contra escritas. Uma permissão ampla como "escrever na minha pasta pessoal" não os inclui. Abrir um deles exige indicar esse caminho exato.
- **`.git/hooks` continua bloqueado.** Os hooks executam programas fora da sandbox, por isso nenhuma aprovação os abre.
- **Se falhar, bloqueia.** Se a sandbox não conseguir arrancar num dispositivo (uma plataforma não suportada ou uma dependência em falta), o comando é recusado com uma mensagem que explica porquê. Nunca é executado em silêncio sem a sandbox.

### Pedir mais, de forma restrita

Quando um comando precisa de algo que a sandbox esconde, a IA não pode simplesmente tomá-lo. Pede, e o proprietário do dispositivo aprova no site da Frely, com uma passkey ou um código de autenticador, e não tocando num botão no chat. O pedido indica o motivo e o comando exato. A aprovação pode ser tão restrita como um grupo de credenciais (por exemplo SSH, mas não AWS), uma pasta de cache ou um diretório específico.

Se nada de restrito servir, o proprietário pode aprovar a execução de um comando sem a sandbox. Essa é a última escolha, não a predefinição, e as mensagens de recusa do CLI empurram a IA a pedir primeiro a opção mais restrita.

### Git sem entregar a chave

O srt bloqueia escritas no `.git/config` de um repositório, porque uma configuração git pode fazer com que o git execute programas mais tarde, fora da sandbox. Isso também bloqueia comandos do dia a dia como `git push -u` e `git remote add`.

O Frely CLI permite essas escritas para comandos comuns e, em seguida, verifica. Tira uma cópia de cada `.git/config` no workspace antes do comando, compara depois de este terminar e remove qualquer configuração que tenha sido adicionada e que faria o git executar um programa, como um fsmonitor, um credential helper, um pager personalizado ou um alias de shell. O resultado diz à IA o que foi removido. Os processos que o comando deixou a correr em segundo plano são parados.

### Rede a partir de dentro da sandbox

Como o srt só encaminha tráfego HTTP, HTTPS e SOCKS, ferramentas como `ssh` precisam de ajuda. O CLI encaminha `ssh`, `scp` e `sftp` através do proxy da sandbox. Para clientes de bases de dados e outras ferramentas TCP em bruto, o `frely tunnel` integrado abre uma porta local dentro da sandbox. Se acede à Internet através de um proxy local (o Clash, por exemplo), o `frely sandbox proxy` permite que a sandbox o utilize. A Frely apenas lê as suas definições de proxy; não as altera.

### O que a utilização do srt pelo Frely CLI não cobre

Preferimos que saiba onde ficam os limites:

- **A rede de saída está aberta por predefinição.** O CLI não restringe que domínios um comando pode alcançar, para que npm, pip, git e curl continuem a funcionar. Isto significa que as regras de ficheiros são o que protege os seus dados: um segredo que a sandbox consiga ler também pode ser enviado para fora. A proteção vem de manter as credenciais fora de alcance, não de bloquear a rede.
- **A maior parte da sua pasta pessoal é legível.** A lista de negação cobre locais de credenciais conhecidos, não tudo o que é privado. Os ficheiros que guarda noutro lugar (um ficheiro `.env` noutro projeto, notas, documentos) são legíveis por um comando executado na sandbox.
- **O acesso aprovado é acesso a sério.** Se aprovar o acesso às chaves SSH, o comando pode ler as chaves. Aprove apenas o que compreende e prefira a opção mais restrita.
- **A proteção do `.git/config` é uma verificação a posteriori.** Desfaz as configurações perigosas depois de o comando terminar. Analisa as configurações conhecidas do git que executam programas e assinala um limite próprio: um processo que escape à limpeza entre comandos é detetado na verificação seguinte, não instantaneamente.
- **Confina comandos, não pessoas.** A sandbox limita o que um comando pode tocar. Não o impede de aprovar algo pouco prudente e não substitui um ecrã bloqueado nem um início de sessão seguro na conta.
- **O srt é uma antevisão de investigação em beta,** e o Frely CLI herda esse estatuto.

## Em resumo

Uma IA que pode executar comandos é tão segura quantas as paredes à volta desses comandos. O srt constrói as paredes ao nível do sistema operativo: escrever apenas no projeto, esconder as pastas de credenciais e enviar o tráfego de rede através de um gatekeeper. O Frely CLI mantém essas paredes de pé por predefinição, transforma a sua abertura num passo deliberado, restrito e aprovado por uma pessoa, e diz-lhe com clareza o que não cobre.
