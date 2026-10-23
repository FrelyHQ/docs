---
title: Использование моделей и API-ключей
description: API-ключи, настройки клиента, расход ресурсов и что делать, если запрос не прошёл.
applies_to: any
updated: 2026-10-21
order: 3
---

# Использование моделей и API-ключей

## Как создать API-ключ?
<!-- id: api-key -->

Откройте страницу API-ключей в своей консоли и создайте ключ. Ключ авторизует вызовы моделей, а не управляющие действия. Храните его в защищённой конфигурации вашего клиента. Никогда не помещайте его в Git, скриншоты или чаты. Отзыв ключа прекращает его дальнейшее использование.

Related: [Руководства](https://frely.cloud/docs/)

Console: [Ваши API-ключи](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## Какой базовый URL у API Frely?
<!-- id: base-url -->

https://api.frely.cloud. Всегда используйте https: запросы по обычному http отклоняются, поэтому клиент, настроенный на http://api.frely.cloud, работать не будет. Один и тот же адрес обслуживает все протоколы, например https://api.frely.cloud/v1/chat/completions, /v1/responses, /v1/messages, /v1/embeddings и список моделей по адресу /v1/models. Некоторым клиентам нужен базовый URL с /v1 на конце (https://api.frely.cloud/v1), и путь эндпоинта они добавляют сами.

Related: [Использование Frely в Claude](https://frely.cloud/docs/claude/) · [Использование Frely в ChatGPT](https://frely.cloud/docs/chatgpt/)

Console: [API-тест (показывает базовый URL и готовую команду curl)](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## Как аутентифицировать API-запросы?
<!-- id: authentication -->

Передавайте свой API-ключ как Bearer-токен: Authorization: Bearer <ваш ключ>. Добавляйте Content-Type: application/json к запросам с телом. Запрос без действительного ключа получает ответ 401. Ключ авторизует только вызовы моделей, но не управление учётной записью.

Console: [Ваши API-ключи](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## Как выглядит ответ с ошибкой?
<!-- id: errors -->

Тело JSON вида {"error":{"message","type","param","code"}}. Тип соответствует HTTP-статусу: 401 — authentication_error, 402 — insufficient_quota, 403 — permission_error, 404 — not_found_error, 408 или 504 — timeout_error, 429 — rate_limit_error, остальные 4xx — invalid_request_error, 503 — service_unavailable_error, остальные 5xx — server_error. Каждый ответ содержит заголовок x-request-id; сохраняйте его при обращении в поддержку. При ошибке, которую стоит повторить, может присутствовать заголовок Retry-After со значением в секундах.

Related: [Связаться с поддержкой](https://frely.cloud/support/)

Console: [История запросов](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## Что вводить в моём ИИ-приложении или клиенте?
<!-- id: client-settings -->

Три значения: публичный адрес сервиса для выбранного вами протокола (не внутренний адрес), ваш собственный API-ключ и публичное имя модели, доступное вашей учётной записи. Точные значения показаны в инструкциях вашей учётной записи.

Related: [Использование Frely в Claude](https://frely.cloud/docs/claude/) · [Использование Frely в ChatGPT](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## Как добавить Frely в Claude или ChatGPT?
<!-- id: connector -->

Добавьте Frely как connector (коннектор), используйте адрес FrelyMCP в качестве URL сервера MCP, выберите OAuth, войдите в Frely и подтвердите доступ. Пошаговые руководства показывают каждый экран.

Related: [Руководство по FrelyMCP](https://frely.cloud/docs/frelymcp/) · [Использование Frely в Claude](https://frely.cloud/docs/claude/) · [Использование Frely в ChatGPT](https://frely.cloud/docs/chatgpt/)

## Модель отображается в списке, но я не могу её вызвать.
<!-- id: no-access -->

Присутствие в списке не означает разрешения на вызов. Проверьте свой тариф, баланс, лимиты и условия сервиса, а если у вас тариф Team — обратитесь к уполномоченному администратору. Ротация ключей не обходит ограничение.

API tools: `models.available`, `budget.get`, `credits.account`

## Мой запрос завершился ошибкой или по таймауту.
<!-- id: request-failed -->

Сохраните обезличенную запись со временем, протоколом, названием модели и идентификатором запроса и посмотрите историю запросов. Таймаут или разрыв соединения не доказывает, что ничего не было израсходовано, поэтому перед повторной попыткой проверьте расход ресурсов. Никому не отправляйте учётные данные, тела запросов или необработанные дампы ошибок.

Related: [Связаться с поддержкой](https://frely.cloud/support/)

Console: [История запросов](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## Можно ли полагаться на вывод модели?
<!-- id: output-quality -->

Вывод модели может содержать ошибки, и Frely не гарантирует его точность. Проверяйте его перед использованием в критически важных для безопасности, юридических, финансовых, медицинских задачах, в вопросах безопасности или в производственной среде.

Related: [Условия использования](https://frely.cloud/terms/)
