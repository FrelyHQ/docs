---
title: Something does not work. How do I diagnose it?
description: Diagnose sign-in, installation and service problems with frely doctor.
applies_to: any
updated: 2026-10-29
site: cli
category: Maintenance
order: 19
---

# Something does not work. How do I diagnose it?

Run `frely doctor` to check sign-in, installation, the latest version, MCP and service state. Add `-v` for config paths, authorization expiry, last heartbeat and sanitized errors. If the device shows offline, run `frely link on`, which is safe to re-run. If the problem remains, ask in Discord or open a GitHub issue with the `frely doctor -v` output.

Related: [Service maintenance doc](https://github.com/FrelyHQ/frely-cli/blob/main/docs/service-maintenance.md) · [Discord](https://discord.gg/hugMuSveb) · [GitHub issues](https://github.com/FrelyHQ/frely-cli/issues)
