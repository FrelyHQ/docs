---
title: Use Frely in Claude
description: Add Frely to Claude as a custom connector, or to Claude Code as an MCP server.
applies_to: any
updated: 2026-10-21
order: 2
name: Claude
---

# Use Frely in Claude

Connect once. Claude signs in to Frely and can then list your models and call published models.

## Before you start
<!-- id: before -->

- A Frely account. Sign in at frely.cloud.
- An enabled API key in your Frely workspace. Model calls are billed to your account through it.

## Claude app (web and desktop)
<!-- id: connector -->
<!-- badge: recommended -->

1. In Claude, open Settings, go to Connectors, and choose Add custom connector.
2. Enter Frely as the name and paste this address as the URL:

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. Do not add authentication headers. Claude uses OAuth.
4. Choose Connect, sign in to Frely, and approve access.
   <!-- mock: consent -->
5. In a chat, open the tools menu, turn on Frely, and ask Claude to use your model. For example: "Use my Frely model GPT-800 to review this text."
   <!-- mock: chat -->

## Claude Code
<!-- id: claude-code -->

1. Add Frely as an MCP server:

   ```sh
   claude mcp add --transport http frely https://frely.cloud/mcp
   ```
2. Run /mcp in Claude Code, choose frely, and sign in to Frely in your browser.

   ```sh
   /mcp
   ```
3. To add one model as a Skill instead, install the Frely CLI, run frely login, and install the model:

   ```sh
   frely agent install <model-link> --host claude-code
   ```

## If something does not work
<!-- id: troubleshooting -->

| Problem | What to do |
| --- | --- |
| Claude does not show the Frely tools | Turn on Frely in the chat tools menu, or start a new chat after connecting. |
| Sign-in fails or access is denied | Sign in with the same Frely account that owns the API key. Remove the connector and add it again to restart sign-in. |
| A call reports that an API key is required | Create or enable an API key in your Frely workspace, then try again. |
