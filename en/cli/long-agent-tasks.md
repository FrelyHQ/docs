---
title: What happens when a Frely Agent takes a long time?
description: How a long Agent run returns a task ID, how to wait for it, cancel it and turn progress lines off.
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# What happens when a Frely Agent takes a long time?

`frely agent run` waits up to 50 seconds. If the Agent has not finished, the command exits with code 0 and prints state `running`, a `taskId` and, when the Agent reported one, a progress line. The task keeps running on Frely after the command ends. Read it with `frely agent wait <username/name> <taskId> --json`: each call waits up to 50 seconds, costs nothing, and prints state `completed`, `failed`, `canceled` or `running` again. After 10 waits in a row, stop and keep the `taskId`; you can read the task later. Stop a task with `frely agent cancel <username/name> <taskId>`; what already ran is charged. A price set by the Agent's creator is charged when the task completes, when you cancel it, or when the Agent already delivered output; a task that fails without output is not charged. To hide progress lines, add `--no-progress-summary` to `frely agent run`, or write `When calling Frely Agents, pass --no-progress-summary (progressSummary=false).` in the `AGENTS.md` or `CLAUDE.md` your AI reads.

Related: [Install a Frely Agent, Prompt or Skill](./install-agents-and-items.md)
