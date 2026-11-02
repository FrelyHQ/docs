---
title: Frely Agent の実行に時間がかかるとどうなりますか？
description: 実行時間の長い Agent の実行がタスク ID を返す仕組みと、その待ち方、キャンセル方法、進行状況行をオフにする方法。
applies_to: any
updated: 2026-10-29
site: cli
category: Account and API
order: 14
---

# Frely Agent の実行に時間がかかるとどうなりますか？

`frely agent run` は実行をコンピューター上に記録し、バックグラウンドのワーカーが Agent を待ち受けるため、実行時間の長いタスクでもコマンドが途切れても失われません。タスクは Frely 上で実行を続け、その状態の取得は無料です。コマンドが回答より先に終わった場合は、`frely agent result --last --wait`（または `frely agent result <runId> --wait`）を実行してください。実行中は、Agent が進行状況行を書き込んでいれば、`frely agent result <runId>` がその最新の進行状況行を表示します。実行を停止するには `frely agent cancel <runId>` を実行します。Frely 上でもタスクは停止し、すでに実行された分は課金されます。Agent の Creator が設定した料金は、タスクの完了時、キャンセル時、または Agent がすでに出力を提供している場合に課金されます。出力なしで失敗したタスクには課金されません。進行状況行を非表示にするには、`frely agent run` に `--no-progress-summary` を追加するか、AI が読み取る `AGENTS.md` または `CLAUDE.md` に `When calling Frely Agents, pass --no-progress-summary.` と記述してください。

Related: [Frely Agent、プロンプト、Skill のインストール](./install-agents-and-items.md)
