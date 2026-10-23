---
title: Faturação, Credit e reembolsos
description: Carregamentos de Credit, planos Creator, renovação, cancelamento e reembolsos.
applies_to: any
updated: 2026-10-21
order: 2
---

# Faturação, Credit e reembolsos

## O que é o Credit e o que posso fazer com ele?
<!-- id: credit -->

O Credit é um saldo pré-pago que paga a utilização de modelos na sua própria conta. Um carregamento é uma cobrança única. O Credit não pode ser levantado, convertido em dinheiro nem transferido para outra pessoa ou conta.

Related: [Termos de Serviço](https://frely.cloud/terms/)

Console: [O seu Credit](https://frely.cloud/user/account/credits)

API tools: `credits.account`, `credit_products.list`, `credit_topups.list`

## Quanto custam os planos Creator?
<!-- id: plans -->

O Creator custa $<!-- fact:creator.monthlyUsd -->8<!-- /fact --> por mês e inclui $<!-- fact:creator.includedUsageUsd -->10<!-- /fact --> de utilização de modelos por período de faturação, até <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> serviços publicados e <!-- fact:creator.apiKeys -->10<!-- /fact --> API Keys. O Creator Plus custa $<!-- fact:creator_plus.monthlyUsd -->58<!-- /fact --> por mês e inclui $<!-- fact:creator_plus.includedUsageUsd -->50<!-- /fact --> de utilização, até <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> serviços publicados e <!-- fact:creator_plus.apiKeys -->100<!-- /fact --> API Keys, com <!-- fact:creator_plus.officialModelDiscountPercent -->10<!-- /fact -->% de desconto nos modelos oficiais. O preço apresentado no checkout é o que se aplica.

Related: [Preços](https://frely.cloud/pricing/)

Console: [Os seus planos](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## Preciso de um plano Creator para utilizar modelos existentes?
<!-- id: need-plan -->

Não. Um plano Creator destina-se a criar e publicar os seus próprios modelos. Os modelos existentes estão disponíveis segundo as respetivas condições de acesso e tarifas de utilização.

Related: [Preços](https://frely.cloud/pricing/)

## Como funciona a renovação?
<!-- id: renewal -->

O Creator e o Creator Plus renovam-se automaticamente todos os meses. No checkout, autoriza a Frely, através da Waffo Pancake, a cobrar o método de pagamento guardado no início de cada período de faturação, pelo preço então indicado, mais os impostos aplicáveis, até que cancele. Se um plano começar com um período de avaliação, o checkout mostra quando ocorre a primeira cobrança.

Related: [Termos de Serviço](https://frely.cloud/terms/)

Console: [Os seus planos](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## Como posso cancelar?
<!-- id: cancel -->

Cancele a renovação a qualquer momento a partir do seu espaço de trabalho. As cobranças futuras cessam e o plano mantém-se disponível até ao fim do período já pago. Um período que já tenha sido cobrado não é reembolsado, a menos que as regras de reembolso ou a lei aplicável o determinem.

Related: [Termos de Serviço](https://frely.cloud/terms/)

Console: [Os seus planos](https://frely.cloud/user/account/plans)

API tools: `creator.subscription_cancel`

## Um pagamento de renovação falhou. O que acontece?
<!-- id: failed-payment -->

A Frely pode suspender ou terminar os direitos associados ao plano quando um pagamento de renovação falha. Atualize o método de pagamento e verifique o seu espaço de trabalho; se continuar a falhar, envie um e-mail para o apoio.

Related: [Contactar o apoio](https://frely.cloud/support/)

Console: [Os seus planos](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`, `creator.subscription_recover`

## E se o preço de um plano mudar?
<!-- id: price-change -->

Um novo preço aplica-se a partir de um período de faturação posterior e nunca altera um período já cobrado. Se não quiser o novo preço, cancele a renovação antes do início do período seguinte.

## Posso obter um reembolso?
<!-- id: refund -->

A elegibilidade para reembolso faz parte dos termos do produto apresentados antes da compra. Alguns produtos permitem o reembolso de uma concessão não utilizada até ao prazo de reembolso. Credit utilizado, uma unidade de capacidade utilizada, um resultado de serviço concluído ou um direito já disponibilizado não são reembolsáveis, a menos que os termos do produto ou a lei o exijam. Uma cobrança duplicada, um erro de pagamento, um erro de execução ou uma falha do serviço da Frely podem justificar uma análise de reembolso. Envie um e-mail para o apoio com os dados da sua conta e da compra. Um reembolso aprovado é processado através do fornecedor de pagamentos.

Related: [Contactar o apoio](https://frely.cloud/support/) · [Termos de Serviço](https://frely.cloud/terms/)

Console: [As suas encomendas](https://frely.cloud/user/account/orders)

API tools: `service_orders.list`, `plan_purchases.get`, `credit_topups.get`

## Quem processa o meu pagamento?
<!-- id: payment-processor -->

A Waffo Pancake é o Merchant of Record e o processador de pagamentos do checkout alojado. Trata dos dados de cartão e de métodos de pagamento. A Frely recebe os detalhes da transação e o estado da execução, e não precisa do número completo do seu cartão.

Related: [Política de Privacidade](https://frely.cloud/privacy/)
