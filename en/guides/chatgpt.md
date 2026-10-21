---
title: Use Frely in ChatGPT
description: Add Frely to ChatGPT as a connector, then call your Frely models from a chat.
applies_to: any
updated: 2026-10-21
order: 1
---

# Use Frely in ChatGPT

Connect once. ChatGPT signs in to Frely and can then list your models and call published models.

## Before you start

- A Frely account. Sign in at frely.cloud.
- An enabled API key in your Frely workspace. Model calls are billed to your account through it.

## Add Frely as a connector (recommended)

1. In ChatGPT, open Settings and go to the section for apps and connectors. Create a new connector. Custom connectors can require developer mode, depending on your ChatGPT plan.
2. Enter Frely as the name and paste this address as the MCP server URL:

   ```sh
   https://frely.cloud/mcp
   ```
   <!-- mock: connector -->
3. Choose OAuth for authentication. Do not add an API key or an authorization header.
4. Sign in to Frely in the window that opens and approve access.
   <!-- mock: consent -->
5. In a new chat, turn on the Frely connector and ask ChatGPT to use your model. For example: "Use my Frely model GPT-800 to review this text."
   <!-- mock: chat -->

## Paste the install prompt

This route installs the Frely CLI, so ChatGPT needs to run commands on your computer.

1. In your Frely workspace, open the model and choose Copy for ChatGPT. For a model someone shared with you, use the install link they sent.
2. Paste it into ChatGPT. ChatGPT installs the Frely CLI, signs you in to Frely in your browser, and adds the model as a Skill.
3. If ChatGPT asks you to reload the Skill, reload it. Then call the model by name.

## Use the command line

1. Install the Frely CLI:

   ```sh
   curl -fsSL https://frely.cloud/install.sh | sh
   ```
2. Sign in to Frely:

   ```sh
   frely login
   ```
3. Install the model as a ChatGPT Skill. Use the model link from its install instructions:

   ```sh
   frely agent install <model-link> --host chatgpt
   ```

## If something does not work

| Problem | What to do |
| --- | --- |
| ChatGPT does not show the Frely tools | Turn on the Frely connector in the chat, or start a new chat after adding it. |
| Sign-in fails or access is denied | Sign in with the same Frely account that owns the API key. Remove the connector and add it again to restart sign-in. |
| A call reports that an API key is required | Create or enable an API key in your Frely workspace, then try again. |
