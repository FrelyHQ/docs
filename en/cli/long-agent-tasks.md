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

`frely item call` records the run on your computer and a background worker waits for the Agent, so a long task survives a cut-off command. The task keeps running on Frely; reading its state costs nothing. If the command ends before the answer, run `frely result --last --wait` (or `frely result <runId> --wait`). While the run is going, `frely result <runId>` shows its newest progress line when the Agent wrote one. Stop a run with `frely cancel <runId>`; the task stops on Frely too and what already ran is charged. A price set by the Agent's creator is charged when the task completes, when you cancel it, or when the Agent already delivered output; a task that fails without output is not charged. To hide progress lines, add `--no-progress-summary` to `frely item call`, or write `When calling Frely Agents, pass --no-progress-summary.` in the `AGENTS.md` or `CLAUDE.md` your AI reads.

Related: [Install a Frely Agent, Prompt or Skill](./install-agents-and-items.md)
