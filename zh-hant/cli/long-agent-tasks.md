---
title: Frely Agent 執行時間過長時會怎樣？
description: 長時間執行的 Agent 如何傳回任務 ID、如何等待及取消該任務，以及如何關閉進度行。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# Frely Agent 執行時間過長時會怎樣？

`frely agent run` 會在你的電腦上記錄該次執行，並由背景工作程序等待 Agent，因此長時間的任務不會因指令被切斷而中止。任務會繼續在 Frely 上執行；查詢其狀態不會收取任何費用。如果指令在取得答案前已結束，請執行 `frely agent result --last --wait`（或 `frely agent result <runId> --wait`）。在執行期間，如果 Agent 有寫入進度，`frely agent result <runId>` 會顯示其最新的進度行。使用 `frely agent cancel <runId>` 即可停止執行；任務也會一併在 Frely 上停止，而已執行的部分仍會收費。當任務完成、你取消任務，或 Agent 已產生輸出時，會收取由該 Agent 的 Creator 所設定的價格；沒有產生輸出而失敗的任務則不會收費。如要隱藏進度行，請在 `frely agent run` 加上 `--no-progress-summary`，或在你的 AI 讀取的 `AGENTS.md` 或 `CLAUDE.md` 中寫上 `When calling Frely Agents, pass --no-progress-summary.`。

Related: [安裝 Frely Agent、提示詞或 Skill](./install-agents-and-items.md)
