---
title: Facturación, Credit y reembolsos
description: Recargas de Credit, planes Creator, renovación, cancelación y reembolsos.
applies_to: any
updated: 2026-10-21
order: 2
---

# Facturación, Credit y reembolsos

## ¿Qué es Credit y qué puedo hacer con él?
<!-- id: credit -->

Credit es un saldo prepagado que cubre el uso de modelos en tu propia cuenta. Una recarga es un cargo único. Credit no se puede retirar, convertir en efectivo ni transferir a otra persona o cuenta.

Related: [Términos del Servicio](https://frely.cloud/terms/)

Console: [Tu Credit](https://frely.cloud/user/account/credits)

API tools: `credits.account`, `credit_products.list`, `credit_topups.list`

## ¿Cuánto cuestan los planes Creator?
<!-- id: plans -->

Creator cuesta $<!-- fact:creator.monthlyUsd -->8<!-- /fact --> al mes e incluye $<!-- fact:creator.includedUsageUsd -->10<!-- /fact --> de uso de modelos por periodo de facturación, hasta <!-- fact:creator.publishedModelLimit -->3<!-- /fact --> servicios publicados y <!-- fact:creator.apiKeys -->10<!-- /fact --> API Keys. Creator Plus cuesta $<!-- fact:creator_plus.monthlyUsd -->58<!-- /fact --> al mes e incluye $<!-- fact:creator_plus.includedUsageUsd -->50<!-- /fact --> de uso, hasta <!-- fact:creator_plus.publishedModelLimit -->100<!-- /fact --> servicios publicados y <!-- fact:creator_plus.apiKeys -->100<!-- /fact --> API Keys, con un <!-- fact:creator_plus.officialModelDiscountPercent -->10<!-- /fact -->% de descuento en modelos oficiales. El precio que aparece al momento del pago es el que aplica.

Related: [Precios](https://frely.cloud/pricing/)

Console: [Tus planes](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## ¿Necesito un plan Creator para usar modelos existentes?
<!-- id: need-plan -->

No. Un plan Creator es para crear y publicar tus propios modelos. Los modelos existentes están disponibles según sus propias condiciones de acceso y tarifas de uso.

Related: [Precios](https://frely.cloud/pricing/)

## ¿Cómo funciona la renovación?
<!-- id: renewal -->

Creator y Creator Plus se renuevan automáticamente cada mes. Al momento del pago, autorizas a Frely, a través de Waffo Pancake, a cobrar el método de pago guardado al inicio de cada periodo de facturación al precio que se muestre en ese momento, más los impuestos aplicables, hasta que canceles. Si un plan comienza con una prueba gratuita, el proceso de pago indica cuándo se realizará el primer cargo.

Related: [Términos del Servicio](https://frely.cloud/terms/)

Console: [Tus planes](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`

## ¿Cómo cancelo?
<!-- id: cancel -->

Cancela la renovación en cualquier momento desde tu espacio de trabajo. Los cargos futuros se detienen y el plan permanece disponible hasta el final del periodo que ya pagaste. Un periodo que ya fue cobrado no se reembolsa, salvo que las reglas de reembolso o la ley aplicable establezcan lo contrario.

Related: [Términos del Servicio](https://frely.cloud/terms/)

Console: [Tus planes](https://frely.cloud/user/account/plans)

API tools: `creator.subscription_cancel`

## Falló un pago de renovación. ¿Qué pasa?
<!-- id: failed-payment -->

Frely puede suspender o finalizar los beneficios del plan cuando falla un pago de renovación. Actualiza el método de pago y revisa tu espacio de trabajo; si vuelve a fallar, envía un correo al soporte.

Related: [Contactar al soporte](https://frely.cloud/support/)

Console: [Tus planes](https://frely.cloud/user/account/plans)

API tools: `creator.subscription`, `creator.subscription_recover`

## ¿Qué pasa si cambia el precio de un plan?
<!-- id: price-change -->

Un precio nuevo aplica a partir de un periodo de facturación posterior y nunca cambia un periodo ya cobrado. Si no quieres el precio nuevo, cancela la renovación antes de que comience el siguiente periodo.

## ¿Puedo obtener un reembolso?
<!-- id: refund -->

La elegibilidad para el reembolso forma parte de los términos del producto que se muestran antes de la compra. Algunos productos permiten un reembolso por una asignación sin usar antes de la fecha límite de reembolso. El Credit usado, una unidad de capacidad usada, un resultado de servicio completado o un beneficio entregado no son reembolsables, salvo que los términos del producto o la ley lo exijan. Un cargo duplicado, un error de pago, un error de entrega o una falla del servicio de Frely pueden dar lugar a una revisión de reembolso. Envía un correo al soporte con los datos de tu cuenta y de la compra. Un reembolso aprobado se procesa a través del proveedor de pagos.

Related: [Contactar al soporte](https://frely.cloud/support/) · [Términos del Servicio](https://frely.cloud/terms/)

Console: [Tus órdenes](https://frely.cloud/user/account/orders)

API tools: `service_orders.list`, `plan_purchases.get`, `credit_topups.get`

## ¿Quién procesa mi pago?
<!-- id: payment-processor -->

Waffo Pancake es el Merchant of Record (responsable de la venta) y el procesador de pagos del checkout alojado. Gestiona los datos de tarjetas y de métodos de pago. Frely recibe los detalles de la transacción y el estado de la entrega, y no necesita el número completo de tu tarjeta.

Related: [Política de Privacidad](https://frely.cloud/privacy/)
