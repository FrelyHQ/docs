---
title: Como inicio ou termino a sessão?
description: Iniciar sessão, terminar sessão e parar o controlo remoto do computador.
applies_to: any
updated: 2026-11-02
site: cli
category: Account and API
order: 15
---

# Como inicio ou termino a sessão?

O `frely link on` inicia a sessão quando necessário, por isso não precisa de iniciar sessão separadamente antes. Utilize `frely login` para iniciar sessão por si só (adicione `--no-browser` numa máquina sem browser, ou `--email <address>` seguido de `--code <6-digit code>`), e `frely logout` para terminar a sessão; o logout também revoga a autorização do `frely api`. Para parar o controlo remoto do computador, utilize `frely link stop` (pausa) ou `frely link off` (revoga todos os clientes e desinstala o serviço). O `frely link off` também bloqueia o controlo remoto neste computador: a página Web da Frely não o pode voltar a ativar, e só o `frely link on` executado neste computador remove o bloqueio.

Related: [README](https://github.com/FrelyHQ/frely-cli/blob/main/README.md) · [Frely App (My Devices)](https://frely.cloud/app/)
