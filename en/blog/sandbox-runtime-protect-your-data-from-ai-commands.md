---
title: What a sandbox runtime does when AI runs commands on your computer
description: A plain explanation of Anthropic's open-source sandbox runtime (srt): how it limits files and network at the OS level, where it stops, and how Frely CLI uses it to keep your credentials away from the commands an AI runs.
date: 2026-10-28
draft: false
---

Letting an AI run shell commands on your computer is useful. It can install dependencies, run tests, read logs, and fix the build. It also means a program you did not write, driven by text you did not review, runs with your user account.

By default, that account can read your SSH keys, your cloud credentials, your package registry tokens, and your browser profile. A command does not need to be malicious to cause damage. A prompt injection hidden in a web page or an issue comment can be enough to make a perfectly normal-looking command read a secret and send it somewhere.

Asking "are you sure?" before every command does not fix this. People approve things they cannot fully read. A better answer is to make the dangerous thing impossible by default, and to let a person open a narrow door when it is really needed. That is what a sandbox is for.

## What srt is

`srt` is Anthropic's open-source sandbox runtime (`@anthropic-ai/sandbox-runtime`). It was built for Claude Code, and it can be used as a command-line tool or as a library. It wraps any process, and everything that process starts, in file and network limits enforced by the operating system. There is no container image and no virtual machine.

Its own README calls it a beta research preview, so treat it as a strong building block rather than a finished guarantee.

### How it limits files

The file rules are simple to state:

- **Reads are allowed everywhere by default.** You list the places to hide with `denyRead`, for example your credential folders.
- **Writes are denied everywhere by default.** You list the places a command may write with `allowWrite`, usually the project folder and a temporary directory. `denyWrite` wins over `allowWrite`, so you can carve a protected file out of an allowed folder.

The read side is a deny list, not an allow list. That is practical, because tools need to read many system files, but it also means the sandbox only hides what someone thought to list.

### How it limits the network

By default, no network access is allowed at all. A command can only reach the network through proxies that run outside the sandbox, and those proxies decide which domains are allowed.

- **macOS:** the command runs under a generated Seatbelt profile (`sandbox-exec`) that only permits talking to a local proxy port.
- **Linux:** the command runs under bubblewrap with its network namespace removed, so the only way out is through proxies reached over Unix sockets that are mounted into the sandbox.

HTTP and HTTPS go through an HTTP proxy. Other TCP traffic goes through a SOCKS5 proxy. Both enforce the domain allow and deny lists. Unix sockets are blocked by default.

### Why this is a good approach

The limits live in the operating system, not in the AI's good behavior and not in a list of command names. A command can be rewritten, wrapped in a script, or obfuscated. It still cannot read a folder the sandbox hides or write outside the folders it was given. The same rules apply to every child process.

## What srt does not do

A sandbox is not a magic shield. The honest limits matter, because they decide what you can trust it for.

- **It is only as tight as its configuration.** If the network allowlist is open, anything the command can read can be sent out. If a secret is not on the deny list, the sandbox does not hide it.
- **Beta software.** The project says so itself, and its options may change.
- **Platform differences.** It supports macOS and Linux. On Linux it needs bubblewrap, socat and ripgrep. Windows support is alpha in srt, and Frely CLI does not run sandboxed commands on Windows.
- **Some options weaken it on purpose.** Allowing Unix sockets, nested sandboxes, or Apple Events each opens a way around the isolation. The README warns about these.
- **It limits one command's process tree.** It does not protect you from a person who gives the AI their password, or from a file you copy out of the sandbox yourself.

## How Frely CLI uses srt

Frely CLI lets you control a computer from your AI: the AI asks, the CLI runs commands on your device. Every command that Frely CLI runs for a remote AI client goes through srt first. Here is what that looks like in practice, based on the CLI's source code.

### The default

- **Writes:** a command can write inside the workspace folder and the system temporary directory. Nothing else.
- **Credential folders are hidden.** The CLI denies reads of SSH keys, AWS, Google Cloud, Kubernetes and GitHub CLI configuration, GnuPG keys, saved git credentials, and package registry token files (`.npmrc`, `.pypirc`, Cargo credentials). Frely's own device credentials can never be opened by any approval.
- **Sensitive places stay write-protected.** Shell start-up files such as `.zshrc` and `.bashrc`, macOS LaunchAgents, and credential folders are protected from writes. A broad permission like "write under my home folder" does not include them. Opening one requires naming that exact path.
- **`.git/hooks` stays blocked.** Hooks run programs outside the sandbox, so no approval opens them.
- **It fails closed.** If the sandbox cannot start on a device (an unsupported platform or a missing dependency), the command is refused with a message that says why. It is never quietly run without the sandbox.

### Asking for more, narrowly

When a command needs something the sandbox hides, the AI cannot just take it. It asks, and the device owner approves on the Frely website, with a passkey or an authenticator code, not by tapping a button in the chat. The request names the reason and the exact command. The approval can be as narrow as one credential group (for example SSH, but not AWS), one cache folder, or one specific directory.

If nothing narrow fits, the owner can approve running a command without the sandbox. That is the last choice, not the default, and the CLI's refusal messages push the AI to ask for the narrowest option first.

### Git without handing over the door

srt blocks writes to a repository's `.git/config`, because a git config can make git run programs later, outside the sandbox. That also blocks everyday commands like `git push -u` and `git remote add`.

Frely CLI allows those writes for ordinary commands, then checks. It takes a copy of each `.git/config` in the workspace before the command, compares after it exits, and removes any setting that was added and would make git run a program, such as an fsmonitor, a credential helper, a custom pager, or a shell alias. The result tells the AI what was removed. Processes the command left running in the background are stopped.

### Networking from inside the sandbox

Because srt only routes HTTP, HTTPS and SOCKS traffic, tools like `ssh` need help. The CLI routes `ssh`, `scp` and `sftp` through the sandbox's proxy. For database clients and other raw TCP tools, a built-in `frely tunnel` opens a local port inside the sandbox. If you reach the internet through a local proxy (Clash, for example), `frely sandbox proxy` lets the sandbox use it. Frely only reads your proxy settings; it does not change them.

### What Frely CLI's use of srt does not cover

We would rather you know the edges:

- **Outbound network is open by default.** The CLI does not restrict which domains a command can reach, so that npm, pip, git and curl keep working. This means the file rules are what protect your data: a secret the sandbox can read can also be sent out. The protection comes from keeping credentials out of reach, not from blocking the network.
- **Most of your home folder is readable.** The deny list covers well-known credential locations, not everything private. Files you keep elsewhere (an `.env` file in another project, notes, documents) are readable by a command running in the sandbox.
- **Approved access is real access.** If you approve SSH key access, the command can read the keys. Approve what you understand, and prefer the narrowest option.
- **The `.git/config` guard is a check after the fact.** It undoes dangerous settings after the command exits. It looks at git's known program-running settings, and it notes a limit of its own: a process that escapes the cleanup between commands is caught at the next check, not instantly.
- **It confines commands, not people.** The sandbox limits what a command can touch. It does not stop you from approving something unwise, and it is no substitute for a locked screen or a strong account sign-in.
- **srt is a beta research preview,** and Frely CLI inherits that status.

## The short version

An AI that can run commands is as safe as the walls around those commands. srt builds the walls at the operating-system level: write nowhere except the project, hide the credential folders, and send network traffic through a gatekeeper. Frely CLI keeps those walls up by default, makes opening them a deliberate, narrow, human-approved step, and tells you plainly what it does not cover.
