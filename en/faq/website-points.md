---
title: Charging for a website with points
description: How a website sells points through Frely and spends them per use: sign-in, checkout by email, and the four Apps API calls.
applies_to: any
updated: 2026-11-25
order: 7
---

# Charging for a website with points

## How does a website charge its users through Frely?
<!-- id: website-points-overview -->

The website sells a point pack, a Plan that lists the website. A buyer pays for the pack once, and the website spends points per use through the Apps API. The website keeps no accounts and takes no payments. One pack, for example 100 points for $8, is set by the website's owner in the Creator Console.

Related: [Creating on Frely](./creating.md)

## What does a website call to spend points?
<!-- id: website-points-api -->

The website's backend sends the buyer's access token as `Authorization: Bearer <token>` to `https://frely.cloud/api/apps/v1`. The token has the scope `points:use` and works only for the website it was issued to.

- `GET /me` returns `sub`, `website` (`id`, `name`, `maxPointsPerUse`), `remainingPoints` (`null` when the pack has no point limit) and `packs` (`planId`, `name`, `priceAmountUnits`, `points`).
- `POST /usages` with `{"requestId": "<id>", "points": <number>}` holds points for one use. The same `requestId` returns the same hold. A hold ends after 24 hours.
- `POST /usages/<requestId>/commit` spends the held points after the use succeeded.
- `POST /usages/<requestId>/release` returns the held points after the use failed.

Hold first, commit when the work succeeded, release when it failed.

| Error | Cause | Fix |
| --- | --- | --- |
| 402 on `POST /usages` | The buyer has too few points. `details.packs` lists the packs to buy. | Start a checkout for one of the packs. |
| 409 `website_usage_expired` on commit | The hold ended after 24 hours. | Hold the points again. |
| 400 `website_usage_points_invalid` | `points` is not a positive whole number. | Send a whole number of 1 or more. |
| 400 `website_usage_points_too_many` | `points` is above `maxPointsPerUse`. | Send at most `maxPointsPerUse`. |
| 409 `website_usage_request_conflict` | The `requestId` was held before with other points. | Use a new `requestId`. |
| 409 `website_usage_released` / `website_usage_committed` | The use was already settled the other way. | Hold the points again with a new `requestId`. |
| 404 `website_usage_not_found` | No hold has this `requestId`. | Hold the points first. |
| 404 `website_not_found` | The token belongs to a website that is not published. | Publish the website. |

## How does a buyer get a token and buy a pack?
<!-- id: website-points-checkout -->

1. The website's backend starts a device-code sign-in with its own OAuth client and keeps the `userCode` and `deviceCode`.
2. It sends `POST https://frely.cloud/api/auth/device/checkout/start` with `{"email": "<buyer email>", "userCode": "<userCode>", "planId": "<pack planId>"}`. The answer holds a `challengeId`. Frely emails the buyer a code and a link, and states the website, the points and the price in the mail.
3. The buyer opens the link, enters the six-digit code and presses Pay. A new email address gets a new account. The buyer pays from Credit when the balance covers the pack and on the card payment page otherwise.
4. The website's backend polls the device-code token endpoint. After the pack is active it returns the access token for the Apps API.

The device code lives 30 minutes after the mail is sent. A website sends a limited number of checkout mails per hour and per day; `checkout_mail_limit` (429) says the limit is reached.

| Error | Cause | Fix |
| --- | --- | --- |
| `device_code_invalid` | The device code is not pending, has expired, or belongs to another client. | Start a new device-code sign-in. |
| `checkout_unavailable` | The pack is not on sale for this website. | Use a `planId` from `GET /me`. |
| `checkout_not_found` | The checkout link is invalid or expired. | Send a new mail. |
