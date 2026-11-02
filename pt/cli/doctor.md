---
title: Algo não funciona. Como posso diagnosticar?
description: Diagnostique problemas de início de sessão, de instalação e do serviço com frely doctor.
applies_to: any
updated: 2026-11-02
site: cli
category: Maintenance
order: 19
---

# Algo não funciona. Como posso diagnosticar?

Execute `frely doctor` para verificar o início de sessão, a instalação, a versão mais recente, o MCP e o estado do serviço. Adicione `-v` para ver os caminhos de configuração, o prazo de validade da autorização, o último heartbeat e os erros sanitizados. Se o dispositivo aparecer offline, execute `frely link on`, que pode ser repetido com segurança. Se o problema persistir, pergunte no Discord ou abra uma issue no GitHub com o resultado de `frely doctor -v`.

Related: [Documento de manutenção do serviço](https://github.com/FrelyHQ/frely-cli/blob/main/docs/service-maintenance.md) · [Discord](https://discord.gg/hugMuSveb) · [Issues do GitHub](https://github.com/FrelyHQ/frely-cli/issues)
