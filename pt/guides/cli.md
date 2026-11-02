---
title: Utilizar o Frely com Skill e CLI
description: Instale a Frely CLI e o respetivo Skill para que o seu agente de IA possa utilizar a sua conta Frely e controlar os seus próprios computadores a partir de um terminal.
applies_to: any
updated: 2026-11-02
order: 0
---

# Utilizar o Frely com Skill e CLI

A Frely CLI é a linha de comandos da sua conta Frely. O respetivo Skill ensina um agente de IA que tem uma shell (Claude Code, Codex, pi e semelhantes) a utilizar essa linha de comandos: iniciar sessão, chamar a sua conta Frely, instalar o que comprou e executar comandos nos seus próprios computadores. Esta é a forma recomendada de utilizar o Frely a partir de um agente de IA. Se a sua aplicação de IA não puder executar comandos, utilize antes o guia da FrelyMCP (a alternativa).

## Antes de começar
<!-- id: before -->

Precisa de uma conta Frely (inicie sessão em frely.cloud) e de um agente de IA que possa executar comandos de shell no computador onde instala a CLI. A CLI funciona em macOS, Linux e Windows.

## Instalar a CLI
<!-- id: install -->

Execute o comando do seu sistema. Este instala apenas o programa `frely`.

```sh
curl -fsSL https://frely.cloud/install.sh | sh
```

No Windows, execute isto no PowerShell:

```sh
curl.exe -fsSLo "$env:TEMP\frely-install.ps1" https://frely.cloud/install.ps1; powershell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\frely-install.ps1"
```

## Iniciar sessão
<!-- id: login -->

Execute o comando abaixo. Este abre o seu navegador para que possa iniciar sessão ou criar uma conta e aprovar este computador. Num computador sem navegador, execute `frely login --email` e introduza o código enviado para a sua caixa de entrada.

```sh
frely login
```

## Instalar o Skill
<!-- id: skill -->

Instale o Skill `frely` no seu agente de IA. Substitua `<host>` por `claude-code`, `codex`, `pi`, `chatgpt` ou `generic`. Reinicie de seguida a sessão do agente para que este encontre o Skill.

```sh
frely skill install --host <host>
```

## Peça ao seu agente
<!-- id: use -->

Diga ao seu agente o que quer em palavras simples, por exemplo: "Lista os meus computadores Frely", "Executa os testes no computador do meu escritório" ou "Instala o Skill que comprei no Frely". O agente executa os comandos `frely` por si. Na primeira vez que controla um computador, o Frely pede-lhe que aprove no site do Frely com um código curto. O agente não pode aprovar o seu próprio pedido.

## Tornar um computador controlável
<!-- id: device -->

Para permitir que o seu agente trabalhe noutro computador, execute isto nesse computador. Inicia sessão, aprova o computador e inicia o serviço em segundo plano. Para um servidor sem navegador, crie um comando de instalação de utilização única na Frely App, em My Devices (Os meus dispositivos).

```sh
frely link on
```

## Comandos que o seu agente utiliza
<!-- id: commands -->

| Comando | O que faz |
| --- | --- |
| `frely devices` | Lista os seus computadores e indica se estão online. |
| `frely run <device> -- <command>` | Executa um comando num computador. |
| `frely read <device>:<path>` | Lê um ficheiro ou uma pasta num computador. |
| `frely edit <device>:<path> --from <file>` | Escreve um ficheiro num computador. |
| `frely item install <username/name> --host <host>` | Instala um Skill, um Prompt ou um Agent do Frely. |
| `frely api list` | Lista as ferramentas de conta que o seu agente pode chamar. |
| `frely doctor` | Verifica o início de sessão, a instalação e a ligação. |

## Se algo não funcionar
<!-- id: help -->

Se o agente não utilizar o Frely, reinicie a sessão do agente e verifique se `frely skill install` terminou. Se `frely` não for encontrado, abra um novo terminal e execute-o novamente. Se um computador aparecer como offline, execute `frely link on` nesse computador. Se um comando pedir aprovação, abra a ligação que apresenta e confirme no site do Frely. Outras questões: support@frely.cloud.
