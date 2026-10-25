---
title: Como acrescentar funcionalidades pagas a um Skill de código aberto
description: Mantenha o seu Skill de código aberto e gratuito, e coloque a parte avançada atrás de um passe pago no Frely. O seu repositório mantém-se como está, e uma mensagem à sua IA faz a publicação.
date: 2026-10-24
draft: true
applies_to: any
updated: 2026-10-24
---

Escreveu um Skill, colocou-o no GitHub e há pessoas a utilizá-lo. Algumas partes exigiram muito mais trabalho do que o resto: os scripts, os modelos, os ficheiros de referência detalhados. Não quer esconder o Skill, mas também não quer entregar tudo.

O Frely dá-lhe um caminho intermédio. **A parte de código aberto permanece gratuita e pública. A parte avançada fica atrás de um passe pago.** O seu repositório não muda.

## Como funciona

Publica o Skill no Frely e assinala que ficheiros são pagos:

- **O `SKILL.md` é sempre gratuito**, para que os compradores possam ver o que estão a adquirir.
- **Os ficheiros pagos** são ficheiros concretos ou pastas inteiras, por exemplo `scripts/` ou `reference/advanced.md`.
- **Define um preço para cada duração de passe**: escolha entre 1 hora, 8 horas, 24 horas, 7 dias, 30 dias ou para sempre. Ofereça um ou todos os seis.

Os compradores instalam-no com um único comando: `frely item install <item-id>`. Funciona com ChatGPT, Codex, Claude Code e outras ferramentas que utilizam Skills. Enquanto um passe está ativo, os ficheiros pagos são obtidos com o Skill. Quando expira, a instalação deixa de obter a parte paga. Um passe `forever` permite ao comprador manter uma cópia local para sempre e inclui atualizações posteriores.

## Publicar com uma mensagem

Não precisa de ler documentação. Envie isto para a IA que já utiliza (esta tem de poder executar comandos no seu computador, como as aplicações de ambiente de trabalho, o Codex ou o Claude Code):

`Follow https://frely.cloud/prompt/creator.md and publish this Skill: <your repository URL>`

A IA instala a Frely CLI, lê o seu repositório e faz-lhe exatamente três perguntas:

1. Que ficheiros são pagos? Por predefinição, propõe os scripts, os modelos e os ficheiros de referência detalhados.
2. Qual é o preço para cada duração de passe?
3. Quer oferecer um passe `forever`?

Faz o resto e fornece-lhe o id do item e o comando de instalação.

## O que saber antes de publicar

- **A parte paga é visível para quem a compra.** O Skill é instalado no dispositivo do próprio comprador, pelo que a parte gratuita é visível para todos e a parte paga para todos os que têm um passe. Se o conteúdo tem de se manter privado, publique-o antes como um Agent alojado, em que os utilizadores obtêm os resultados mas nunca o prompt.
- **Verifique a licença.** Se a licença do seu repositório proíbe a redistribuição, não o publique. O URL de origem é apresentado como atribuição e o Frely não verifica a propriedade do repositório.
- **Limites de tamanho.** O Skill em zip tem, no máximo, 256 KiB, 64 ficheiros, 64 KiB por ficheiro e 128 KiB no total.
- **Recebe Frely Credit, não dinheiro.** As taxas de utilização são retidas durante 30 dias e, em seguida, adicionadas ao seu Frely Credit, que pode gastar no Frely. Não pode ser levantado nem transferido. O Frely retém uma comissão de plataforma em cada venda, apresentada na página quando define os seus preços.
- **Uma conta gratuita pode publicar um item.**

## Atualizar ou retirar

Para lançar uma nova versão, publique novamente com o mesmo slug. Para o retirar, marque-o como não publicado. O seu repositório GitHub nunca é alterado, pelo que a sua versão de código aberto permanece onde sempre esteve.

[Publique o seu Skill no Frely](https://frely.cloud/prompt/creator.md)
