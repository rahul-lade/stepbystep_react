# Git Multi-Account Setup Guide

> **Author**: Rahul Lade  
> **Date**: February 15, 2026  
> **Purpose**: Managing multiple GitHub accounts (Personal + Office) on a single machine

---

## Simple Summary

**Office Work (Normal Flow)**
```sh
git clone git@github.com:Byteswrite-admin/Meals_frontend.git
# Just works - uses office account automatically!
```

**Personal Projects (Add `-personal` to URL)**
```sh
git clone git@github.com-personal:rahul-lade/stepbystep_react.git
cd stepbystep_react

# IMPORTANT: Set local identity after cloning
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"
```

---

## Understanding the Setup

### Two Separate Things

1. **SSH Keys** → Handle authentication (who can push/pull to GitHub)
2. **Git Config** → Handle commit identity (who authored the code)

| Account | SSH (Push/Pull) | Git Identity (Commits) |
|---------|-----------------|----------------------|
| **Office** | Automatic (normal `github.com`) | Global config (automatic) |
SSH Host Alias   : github.com-personal
```

### Office Account

```
GitHub Username : rahul-at-bw
Email           : rahul.lade@byteswrite.com
SSH Key (Private): C:\Users\hp\.ssh\id_ed25519_rahul_at_bw
SSH Key (Public) : C:\Users\hp\.ssh\id_ed25519_rahul_at_bw.pub
SSH Host Alias   : github.com (normal, no alias needed)
```

---

## SSH Keys Setup

### What Are SSH Keys?

SSH keys allow you to authenticate with GitHub **without entering a password** every time. Each account gets its own key pair (private + public).

### Where Are They Stored?

```
C:\Users\hp\.ssh\
├── rahul_lade_personal         ← Personal private key (NEVER SHARE)
├── rahul_lade_personal.pub     ← Personal public key (added to GitHub)
├── id_ed25519_rahul_at_bw      ← Office private key (NEVER SHARE)
├── id_ed25519_rahul_at_bw.pub  ← Office public key (added to GitHub)
└── config                      ← SSH config file (routes traffic)
```

### How to Generate a New SSH Key (If Needed)

```sh
# Generate SSH key
ssh-keygen -t ed25519 -C "your-email@example.com" -f "$HOME\.ssh\key_name" -N '""'
```

### How to View Your Public Key (To Add to GitHub)

```sh
# View personal public key
Get-Content "$HOME\.ssh\rahul_lade_personal.pub"

# View office public key
Get-Content "$HOME\.ssh\id_ed25519_office.pub"
```

### How to Add SSH Key to GitHub

1. Copy the public key content (from `.pub` file)
2. Go to: **https://github.com/settings/keys**
3. Click **"New SSH key"**
4. Give it a title (e.g., "Personal Laptop")
5. Paste the public key
6. Click **"Add SSH key"**

> ⚠️ **IMPORTANT**: Only share the `.pub` (public) key. NEVER share the private key file.

### Test SSH Connection

```sh
# Test personal account
ssh -T git@github.com-personal
# Expected: Hi rahul-lade! You've successfully authenticated...

# Test office account (normal github.com)
ssh -T git@github.com
# Expected: Hi rahul-at-bw! You've successfully authenticated...
```

---

## SSH Config File

**Location**: `C:\Users\hp\.ssh\config`

```
# Office GitHub account (rahul-at-bw) — DEFAULT, works with normal github.com URLs
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_rahul_at_bw

# Personal GitHub account (rahul-lade) — Use github.com-personal in URLs
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/rahul_lade_personal
```

### How It Works

When you use `github.com-personal` in a Git URL, SSH automatically uses the personal key.  
When you use normal `github.com`, it uses the office key (default).

---

## Git Identity Configuration

### Current Setup

```sh
# GLOBAL (Office - Default for all projects)
git config --global user.name "rahul-at-bw"
git config --global user.email "rahul.lade@byteswrite.com"

# LOCAL (Personal - Only for D:\stepbystep_react)
cd D:\stepbystep_react
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"
```

### How to Check Current Config

```sh
# Check global config
git config --global user.name
git config --global user.email

# Check local config (run inside the project folder)
git config user.name
git config user.email

# See ALL config (shows both global + local)
git config --list
```

### How to Change Global Config (Office)

```sh
git config --global user.name "rahul-at-bw"
git config --global user.email "rahul.lade@byteswrite.com"
```

### How to Set Local Config for Any Folder (Personal)

```sh
cd D:\your-project-folder
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"
```

> **Rule**: Local config **overrides** global config for that specific folder only.

---

## Common Git Commands

### Basic Workflow

```sh
# Check status of your changes
git status

# Stage all changes
git add .

# Stage specific file
git add src/App.jsx

# Commit with message
git commit -m "feat: add login page"

# Push to GitHub
git push

# Pull latest changes from GitHub
git pull
```

### Branch Commands

```sh
# Create new branch
git checkout -b feature/login-page

# Switch to existing branch
git checkout main

# List all branches
git branch

# Delete a branch
git branch -d feature/login-page

# Push new branch to GitHub
git push -u origin feature/login-page
```

### Viewing History

```sh
# View commit history
git log

# View compact history (one line per commit)
git log --oneline

# View last 5 commits
git log --oneline -5

# View history with graph
git log --oneline --graph --all
```

### Undoing Changes

```sh
# Discard changes in a file (before staging)
git checkout -- src/App.jsx

# Unstage a file (after git add)
git reset HEAD src/App.jsx

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes) ⚠️ CAREFUL
git reset --hard HEAD~1
```

### Remote Commands

```sh
# View remotes
git remote -v

# Add remote
git remote add origin git@github.com-personal:rahul-lade/repo-name.git

# Change remote URL
git remote set-url origin git@github.com-personal:rahul-lade/new-repo.git

# Remove remote
git remote remove origin
```

---

## How to Clone Repositories

### Clone Personal Repository

```sh
git clone git@github.com-personal:rahul-lade/repo-name.git

# IMPORTANT: After cloning, set local identity
cd repo-name
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"
```

### Clone Office Repository (Normal Flow)

```sh
# Just use normal github.com - no alias needed!
git clone git@github.com:rahul-at-bw/repo-name.git
git clone git@github.com:Byteswrite-admin/Meals_frontend.git

# No identity setup needed - uses global office config automatically
```

### Examples

```sh
# Clone your personal React learning repo
git clone git@github.com-personal:rahul-lade/stepbystep_react.git
cd stepbystep_react
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"

# Clone an office project (normal flow, like before!)
git clone git@github.com:Byteswrite-admin/Meals_frontend.git
cd Meals_frontend
# No extra setup needed - uses office identity automatically
```

> **Key Point**: Use `github.com-personal` for personal repos, normal `github.com` for office repos.

---

## How to Create & Push a New Repository

### Personal Project (rahul-lade)

```sh
# Step 1: Create new project folder
mkdir D:\stepbystep_react\my-new-project
cd D:\stepbystep_react\my-new-project

# Step 2: Initialize Git
git init

# Step 3: Set local identity (personal)
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"

# Step 4: Create files, then stage and commit
git add .
git commit -m "Initial commit"

# Step 5: Create repo on GitHub (https://github.com/new) as rahul-lade

# Step 6: Add remote and push
git remote add origin git@github.com-personal:rahul-lade/my-new-project.git
git branch -M main
git push -u origin main
```

### Office Project (rahul-at-bw)

```sh
# Step 1: Create project folder
mkdir D:\office-projects\new-project
cd D:\office-projects\new-project

# Step 2: Initialize Git
git init

# Step 3: No need to set identity (global office config is used automatically!)

# Step 4: Create files, then stage and commit
git add .
git commit -m "Initial commit"

# Step 5: Create repo on GitHub (https://github.com/new) as rahul-at-bw

# Step 6: Add remote and push (normal github.com!)
git remote add origin git@github.com:rahul-at-bw/new-project.git
git branch -M main
git push -u origin main
```

---

## How to Set Local Git Identity for a Folder

When you want a specific folder to use **personal credentials** instead of the global office ones:

```sh
# Navigate to the folder
cd D:\your-personal-project

# Set local user name
git config user.name "rahul-lade"

# Set local email
git config user.email "rahullade935@gmail.com"

# Verify
git config user.name
git config user.email
```

> This only affects the current folder. All other folders still use the global (office) config.

---

## Troubleshooting

### Error: "Permission denied" or "Repository not found"

**Cause**: Wrong SSH key being used.

```sh
# Test which account is being used
ssh -T git@github.com-personal
ssh -T git@github.com

# Check remote URL
git remote -v

# Fix: Make sure URL uses correct host alias
git remote set-url origin git@github.com-personal:rahul-lade/repo-name.git
```

### Error: "remote origin already exists"

```sh
# Remove existing remote
git remote remove origin

# Add correct remote
git remote add origin git@github.com-personal:rahul-lade/repo-name.git
```

### Error: "Permission to X denied to Y"

**Cause**: Wrong GitHub account is authenticating.

```sh
# Check which account is linked
ssh -T git@github.com-personal   # Should say: Hi rahul-lade!
ssh -T git@github.com            # Should say: Hi rahul-at-bw!

# Make sure remote URL uses the correct alias
git remote -v
```

### Wrong User Name in Commits

```sh
# Check current identity
git config user.name
git config user.email

# Fix for this folder only
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"
```

### SSH Config Formatting Issues

The SSH config file (`C:\Users\hp\.ssh\config`) must:
- Have `IdentityFile` path on the **same line** as the keyword
- Use **4 spaces** for indentation
- Have **no trailing spaces**

---

## File Locations Reference

| File | Location | Purpose |
|------|----------|---------|
| SSH Config | `C:\Users\hp\.ssh\config` | Routes SSH to correct key |
| Personal SSH Key | `C:\Users\hp\.ssh\rahul_lade_personal` | Authentication for rahul-lade |
| Personal Public Key | `C:\Users\hp\.ssh\rahul_lade_personal.pub` | Added to GitHub |
| Office SSH Key | `C:\Users\hp\.ssh\id_ed25519_rahul_at_bw` | Authentication for rahul-at-bw |
| Office Public Key | `C:\Users\hp\.ssh\id_ed25519_rahul_at_bw.pub` | Added to GitHub |
| Global Git Config | `C:\Users\hp\.gitconfig` | Office identity (default) |
| Local Git Config | `D:\stepbystep_react\.git\config` | Personal identity (this repo) |
| Git Ignore | `D:\stepbystep_react\.gitignore` | Files to exclude from tracking |

---

## Quick Reference Card

```
┌──────────────────────────────────────────────────────────┐
│                    QUICK REFERENCE                        │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  CLONE PERSONAL (then set identity):                     │
│  git clone git@github.com-personal:rahul-lade/repo.git   │
│  cd repo                                                 │
│  git config user.name "rahul-lade"                       │
│  git config user.email "rahullade935@gmail.com"          │
│                                                          │
│  CLONE OFFICE (normal flow, no extra steps):            │
│  git clone git@github.com:rahul-at-bw/repo.git           │
│                                                          │
│  SET LOCAL IDENTITY (Personal):                          │
│  git config user.name "rahul-lade"                       │
│  git config user.email "rahullade935@gmail.com"          │
│                                                          │
│  SET GLOBAL IDENTITY (Office):                           │
│  git config --global user.name "rahul-at-bw"             │
│  git config --global user.email "rahul.lade@byteswrite.com" │
│                                                          │
│  TEST SSH:                                               │
│  ssh -T git@github.com-personal                          │
│  ssh -T git@github.com                                   │
│                                                          │
│  VIEW PUBLIC KEY:                                        │
│  Get-Content "$HOME\.ssh\rahul_lade_personal.pub"        │
│  Get-Content "$HOME\.ssh\id_ed25519_rahul_at_bw.pub"     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Key Takeaways

### SSH Authentication (Push/Pull)

- **Office repos**: Use normal `git@github.com:user/repo.git` — works like before!
- **Personal repos**: Use `git@github.com-personal:rahul-lade/repo.git`

### Git Identity (Commits)

- **Global** (default): `rahul-at-bw` / `rahul.lade@byteswrite.com`
- **Personal repos**: Must set local config after cloning:
  ```sh
  git config user.name "rahul-lade"
  git config user.email "rahullade935@gmail.com"
  ```

> **Remember**: SSH handles authentication (who can push/pull), Git config handles commit identity (who authored the changes). They are separate!
