---
title: 当 Frely Agent 运行时间过长时会发生什么？
description: 介绍耗时较长的 Agent 运行如何返回任务 ID、如何等待、取消以及关闭进度行。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# 当 Frely Agent 运行时间过长时会发生什么？

`frely agent run` 会在你的电脑上记录本次运行，并由一个后台工作进程等待 Agent，因此即使命令被中断，长时间任务也不会丢失。任务会继续在 Frely 上运行；读取其状态不产生任何费用。如果命令在答案出来之前就结束了，请运行 `frely agent result --last --wait`（或 `frely agent result <runId> --wait`）。在运行进行期间，若 Agent 写入了进度信息，`frely agent result <runId>` 会显示其最新的进度行。使用 `frely agent cancel <runId>` 停止一次运行；任务也会在 Frely 上停止，并且已运行的部分会被计费。由该 Agent 的 Creator 设定的价格会在任务完成、你取消任务或 Agent 已输出内容时收取；无输出而失败的任务不会收费。要隐藏进度行，请在 `frely agent run` 中加上 `--no-progress-summary`，或在你的 AI 所读取的 `AGENTS.md` 或 `CLAUDE.md` 中写入 `When calling Frely Agents, pass --no-progress-summary.`。

Related: [安装 Frely Agent、提示词或 Skill](./install-agents-and-items.md)
