---
title: Charging for a website with points
description: How an AI or developer connects a website to Frely points billing: register the website, sign in a buyer with a device code and checkout mail, and spend points with the four Apps API calls.
applies_to: any
updated: 2026-11-26
order: 7
---

# Charging for a website with points

## What is the website points flow, and what works today?
<!-- id: website-points-overview -->

A website sells points through Frely and spends them per use. Frely sends the buyer a payment mail, takes the payment, and meters the points the website reports. The website keeps no accounts and takes no payments. Frely does not forward the website's traffic.

The parts and their order:

1. The owner registers the website in the Creator Console and receives an OAuth client ID and client secret.
2. The owner sells a point pack, a Plan that includes the website. The Plan's amount quota divided by the website's rate is the pack's points. For example, a pack worth 100 points for $8.
3. A buyer enters an email address on the website. The website's backend starts a device-code sign-in and a checkout mail. The buyer pays on a Frely page and the website receives an access token.
4. For each use, the website holds points, does the work, then commits the points or releases them.

Status on 2026-11-26. The backend, the Apps API and the "Your websites" card are released. These parts are not proven end to end on production:

- A real card payment through the hosted payment page has not been verified. Tests simulate the payment result instead of calling the payment provider.
- A way to add a website to a Plan from the Creator Console or an API is not available yet. Until it is, a pack cannot be created by an owner, and `packs` in the API answers stay empty.
- Committed points do not yet pay a seller share. The seller is paid when the buyer buys the pack.
- Registering a website needs the `website.publish` capability. Only reviewed owners receive it.

Tell the user about each point above that matters for their task. Do not claim the flow works end to end.

## How does the owner register a website?
<!-- id: website-points-register -->

Prerequisites: a Frely account with the `website.publish` capability, and a website on `https://<name>.frely.cloud`. Other domains are refused (`website_url_invalid`).

The Creator Console (Create > MCP page, card "Your websites") calls `POST https://frely.cloud/api/user/creator/websites` with the owner's signed-in browser session. The body:

| Field | Type | Meaning |
| --- | --- | --- |
| `slug` | string | 1 to 40 lowercase letters, digits or hyphens. Saving the same `slug` again updates the website. |
| `displayName` | string | 1 to 120 characters. The buyer sees it in the mail and on the payment page. |
| `description` | string, optional | Up to 1000 characters. |
| `siteUrl` | string | `https://` address on a `frely.cloud` subdomain. |
| `creditUnitsPerPoint` | integer | Credit units one point is worth. 1 USD is 1,000,000 units, so `80000` makes 100 points cost $8. |
| `maxPointsPerUse` | integer | The most points one `POST /usages` may hold, 1 to 1,000,000. |

Saving publishes the website. The first save answers with `oauthClient.clientId` and `oauthClient.clientSecret`. The secret is shown once and Frely stores only a hash. Keep it in the website backend's secret store. Never put it in a page, a repository, or a prompt.

`PATCH` with `{"id": "<website id>", "status": "published" | "unpublished"}` publishes or hides the website. An unpublished website cannot start sign-ins. `DELETE` with `{"id": "<website id>"}` archives an unpublished website.

## How does a buyer get a token and buy a pack?
<!-- id: website-points-checkout -->

All calls in this section come from the website's backend. `CLIENT_ID` and `CLIENT_SECRET` are the values from the registration. The resource is `https://frely.cloud/api/apps`.

1. Start a device code with Basic authentication (`client_id:client_secret`):

   ```sh
   curl -sS https://frely.cloud/api/auth/device/code \
     -u "$CLIENT_ID:$CLIENT_SECRET" \
     --data-urlencode "client_id=$CLIENT_ID" \
     --data-urlencode "scope=openid points:use" \
     --data-urlencode "resource=https://frely.cloud/api/apps"
   ```

   The answer holds `device_code`, `user_code`, `expires_in` and `interval`. Keep `device_code` and `user_code` on the server.

2. Ask for the checkout mail. `planId` is a pack from `GET /api/apps/v1/me` or from the 402 answer of `POST /usages`:

   ```sh
   curl -sS https://frely.cloud/api/auth/device/checkout/start \
     -H "content-type: application/json" \
     -d '{"email": "<buyer email>", "userCode": "<user_code>", "planId": "<pack planId>"}'
   ```

   The answer is `{"state": "code_sent", "email": "<masked email>", "expiresIn": <seconds>, "challengeId": "...", "reference": "..."}`. Frely mails the buyer a six-digit code and a link. The mail names the website, the points and the price. The website does not need `challengeId`.

3. The buyer opens the link, enters the code and presses Pay. One submit checks the code, creates an account for a new address, adds the buyer to the pack's Team, and orders the pack. Credit pays when the balance covers the pack. Otherwise the buyer pays on the card payment page. The device code is approved after the pack is active, not before.

4. Poll the token endpoint at the `interval` the device code gave, until the answer is not `authorization_pending`:

   ```sh
   curl -sS https://frely.cloud/api/auth/oauth2/token \
     -u "$CLIENT_ID:$CLIENT_SECRET" \
     --data-urlencode "grant_type=urn:ietf:params:oauth:grant-type:device_code" \
     --data-urlencode "device_code=<device_code>" \
     --data-urlencode "resource=https://frely.cloud/api/apps"
   ```

   The answer holds `access_token` with the scope `openid points:use`. The token works only on the Apps API and only for this website. The website client has the device-code grant only and receives no refresh token. The access token lifetime is an instance setting with a 5-minute default, so a token cannot be kept for later visits. Use it for the visit that follows the payment, and do not store it long term.

The device code lives 30 minutes after the mail is sent. A website sends at most 60 checkout mails per hour, and the daily limit comes from the owner's plan. A mail that is refused answers `checkout_mail_limit` (429). Each email address is also rate limited.

| Error | Cause | Fix |
| --- | --- | --- |
| `device_code_invalid` (400) | The device code is not pending, has expired, or belongs to another client. | Start a new device code. |
| `checkout_unavailable` (404) | The pack is not on sale for this website. | Use a `planId` from `GET /me`. |
| `checkout_plan_invalid` (400) | `planId` is missing. | Send `planId`. |
| `checkout_not_found` (404) | The checkout link is invalid or expired. | Send a new mail. |
| `checkout_mail_limit` (429) | The website or the address reached a mail limit. | Wait for `retryAfterSeconds`. |
| Not 200 on `/device/code` | Wrong secret, or the website is unpublished or archived. | Check the secret and the website status. |

## What does the website call to spend points?
<!-- id: website-points-api -->

The website's backend sends the buyer's access token as `Authorization: Bearer <token>` to `https://frely.cloud/api/apps/v1`. A token from any other client, or without the `points:use` scope, answers 403 `insufficient_scope`.

- `GET /me` returns `{"sub", "website": {"id", "name", "maxPointsPerUse"}, "remainingPoints", "packs": [{"planId", "name", "priceAmountUnits", "points"}]}`. `remainingPoints` is `null` when the pack has no point limit. `priceAmountUnits` is a string in Credit units, 1,000,000 per USD.
- `POST /usages` with `{"requestId": "<id>", "points": <whole number>}` holds `points` for one use and answers `{"requestId", "points", "status": "held", "expiresAt"}`. `requestId` has 1 to 128 characters. The same `requestId` with the same points returns the same hold.
- `POST /usages/<requestId>/commit` spends the held points after the use succeeded. Answers the same `status` shape with `"committed"`.
- `POST /usages/<requestId>/release` returns the held points after the use failed. Answers with `"released"`.

Use this order: hold, do the work, commit when it succeeded, release when it failed. Held points are not available to other uses. A hold nobody settles ends after 24 hours. Every call is safe to repeat.

```sh
curl -sS https://frely.cloud/api/apps/v1/usages \
  -H "authorization: Bearer $ACCESS_TOKEN" -H "content-type: application/json" \
  -d '{"requestId": "job-123", "points": 5}'
```

| Error | Cause | Fix |
| --- | --- | --- |
| 402 `website_points_insufficient` | The buyer has too few points. `details.packs` lists the packs to buy. | Start a checkout for one of the packs. |
| 400 `website_usage_points_invalid` | `points` is not a positive whole number. | Send a whole number of 1 or more. |
| 400 `website_usage_points_too_many` | `points` is above `maxPointsPerUse`. | Send at most `maxPointsPerUse`. |
| 400 `website_usage_request_invalid` | `requestId` is missing or longer than 128 characters. | Send 1 to 128 characters. |
| 409 `website_usage_request_conflict` | The `requestId` was held before with other points. | Use a new `requestId`. |
| 409 `website_usage_expired` | The hold ended after 24 hours. | Hold the points again. |
| 409 `website_usage_released` or `website_usage_committed` | The use was already settled the other way. | Hold the points again with a new `requestId`. |
| 404 `website_usage_not_found` | No hold has this `requestId`. | Hold the points first. |
| 404 `website_not_found` | The token's website is not published. | Publish the website. |
| 401 | The token is invalid or expired. | Run the device-code sign-in again. |
