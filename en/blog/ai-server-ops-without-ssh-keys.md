---
title: Let AI help run your servers without handing over your SSH keys
description: Giving an AI assistant ssh access from your laptop exposes every key in ~/.ssh. Connecting the server itself to your AI account keeps keys off the table and every permission revocable.
date: 2026-10-23
draft: false
applies_to: any
updated: 2026-10-23
---

More and more people let an AI assistant read logs, edit configs and restart services. The obvious way is to run an AI that can execute commands on your own computer and let it `ssh` into the server.

That works. But it is worth pausing on one detail: **to let the AI run `ssh`, you give it your whole `~/.ssh` folder.**

## Going through your laptop: you give away more than you think

For the AI to run `ssh prod` on your computer, it has to read the config and private keys in `~/.ssh`. Most permission controls can only decide whether a folder is readable. They cannot say "only this one server". That means:

- It can read **every** private key, not just the one for this server.
- As long as its commands can reach the network, a key can leave your computer. A leaked key stays valid. Turning off the AI's access afterwards does not take it back; you have to remove the public key from every server.
- Once `ssh` logs in, what the AI can do on the server depends on the account behind that key. If it is root, the AI has root.

The server's log only shows "your laptop logged in with your key". It cannot tell your commands from the AI's.

## The other way round: let the server connect out

Instead of giving the AI a key to open the server's door, install a small program on the server. The server connects out to your AI account, and you decide what the AI may do there.

With Frely it looks like this:

1. On the Frely website, open **My Devices → Add a computer** and create a one-time install command. Paste it on the server. The token works once, expires after 15 minutes and is not saved on the server.
2. The server connects out to Frely. **You open no ports.**
3. Connect FrelyMCP in ChatGPT, Claude or Codex, and the AI can read files and run commands on that server.

What this changes:

- **No long-lived key goes to the AI.** The server has its own device identity, and commands the AI runs cannot read it.
- **Commands run in a sandbox by default.** They can only write to the folder you choose and the temp folder, and credential folders such as `~/.ssh` and `~/.aws` stay unreadable. When the server cannot run the sandbox, commands are refused rather than run without protection.
- **More access needs your approval.** The AI asks, and you decide on the Frely website, with a passkey or an authenticator code, whether to allow it and for how long: one command, 12 hours, or until the device authorization ends. The AI cannot approve its own request.
- **Revoke at any time, effective at once.** Every call checks the authorization again, so the next command after you revoke is refused.

## Four habits that make it safer

On the server, the boundary is "the system user Frely runs as, plus the sandbox". These choices decide how strong it is:

1. **Install as a dedicated user, not root.** For example, create `frely-ops` and give it access to your app folder only. The sandbox limits writes, not what the user can read, so the smaller the user's rights, the better. To read system logs without root, add the user to the `adm` and `systemd-journal` groups.
2. **Check the sandbox works.** On Linux, install `bubblewrap`, `socat` and `ripgrep`; `frely doctor` tells you whether the sandbox is available. Older systems such as CentOS 7 cannot run it; there, approve "run without the sandbox" for a limited time instead of leaving it open.
3. **Share only the folder you need.** Set `FRELY_WORKSPACE=/srv/myapp` instead of sharing the whole home folder, and keep the device authorization short.
4. **Know what the docker group means.** A user in the `docker` group can read `docker logs` directly, which is handy, but that membership is as powerful as root.

## When ssh is still fine

If the AI only reads logs and runs a few read-only commands, going through your laptop can be acceptable, provided that:

- you create a separate key for this server and restrict it in the server's `authorized_keys` with `from=` and `restrict`, logging in as a limited user;
- no other powerful keys sit in the same `~/.ssh`;
- you allow access only for the task at hand, not for days.

## In short

When AI runs your servers, what matters is less how clever it is than what it holds. **Rather than handing the AI your keys, let the server connect out and approve what it may do.**

[Get started with the Frely CLI](https://cli.frely.cloud/)
