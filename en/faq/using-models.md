---
title: Using models and API keys
description: Answers about using models on Frely: API keys, client settings, usage, and what to do when a request fails.
applies_to: any
updated: 2026-10-26
order: 3
---

# Using models and API keys

## How do I create an API key?
<!-- id: api-key -->

Open the API key page in your console and create one. A key authorizes model calls, not management actions. Keep it in your client's protected configuration. Never put it in Git, screenshots or chat. Revoking a key stops later use.

Related: [Guides](https://frely.cloud/docs/)

Console: [Your API keys](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`, `keys.set_limits`

## What is the Frely API base URL?
<!-- id: base-url -->

https://api.frely.cloud. Always use https: requests over plain http are rejected, so a client configured with http://api.frely.cloud will fail. The same address serves every protocol, for example https://api.frely.cloud/v1/chat/completions, /v1/responses, /v1/messages, /v1/embeddings and the model list at /v1/models. Some clients want the base URL with /v1 on the end (https://api.frely.cloud/v1) and add the endpoint path themselves.

Related: [Use Frely in Claude](https://frely.cloud/docs/claude/) · [Use Frely in ChatGPT](https://frely.cloud/docs/chatgpt/)

Console: [API test (shows the base URL and a ready curl command)](https://frely.cloud/user/library/api-test)

API tools: `models.available`

## How do I authenticate API requests?
<!-- id: authentication -->

Send your API key as a bearer token: Authorization: Bearer <your key>. Add Content-Type: application/json to requests with a body. A request without a valid key gets a 401. A key authorizes model calls only, not account management.

Console: [Your API keys](https://frely.cloud/user/account/keys)

API tools: `keys.list`, `keys.create`

## What does an error response look like?
<!-- id: errors -->

A JSON body of the form {"error":{"message","type","param","code"}}. The type follows the HTTP status: 401 authentication_error, 402 insufficient_quota, 403 permission_error, 404 not_found_error, 408 or 504 timeout_error, 429 rate_limit_error, other 4xx invalid_request_error, 503 service_unavailable_error, other 5xx server_error. Every response carries an x-request-id header; keep it when you contact support. A retryable failure may include a Retry-After header in seconds.

Related: [Contact support](https://frely.cloud/support/)

Console: [Request history](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`

## What do I enter in my AI app or client?
<!-- id: client-settings -->

Three values: the public service address for the protocol you chose (not an internal address), your own API key, and a public model name that your account can see. Your account instructions show the exact values.

Related: [Use Frely in Claude](https://frely.cloud/docs/claude/) · [Use Frely in ChatGPT](https://frely.cloud/docs/chatgpt/)

API tools: `models.available`, `keys.list`

## How do I add Frely to Claude or ChatGPT?
<!-- id: connector -->

Add Frely as a connector, use the FrelyMCP address as the MCP server URL, choose OAuth, sign in to Frely and approve access. The step-by-step guides show each screen.

Related: [FrelyMCP guide](https://frely.cloud/docs/frelymcp/) · [Use Frely in Claude](https://frely.cloud/docs/claude/) · [Use Frely in ChatGPT](https://frely.cloud/docs/chatgpt/)

## A model shows in the list but I cannot call it.
<!-- id: no-access -->

Being listed is not permission to call. Check your plan, balance, allowance and the service terms, and ask an authorized administrator if you are on a Team. Rotating keys does not get around a restriction.

API tools: `models.available`, `budget.get`, `credits.account`

## My request failed or timed out.
<!-- id: request-failed -->

Keep a redacted note of the time, protocol, model name and request ID, and look at your request history. A timeout or dropped connection does not prove nothing was used, so check usage before retrying. Do not send credentials, request bodies or raw error dumps to anyone.

Related: [Contact support](https://frely.cloud/support/)

Console: [Request history](https://frely.cloud/user/usage/requests)

API tools: `request_history.list`, `usage.summary`

## Can I rely on model output?
<!-- id: output-quality -->

Model output can contain errors and Frely does not guarantee accuracy. Review it before using it in safety-critical, legal, financial, medical, security or production settings.

Related: [Terms of Service](https://frely.cloud/terms/)
