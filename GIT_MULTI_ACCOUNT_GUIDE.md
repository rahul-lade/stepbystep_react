# Git Multi-Account Setup Guide  

> **Author**: Rahul Lade  
> **Date**: February 15, 2026  
> **Purpose**: Managing Personal & Office GitHub accounts on one machine

---

## Quick Start

### Office Repos (Normal Flow - Like Before!)

```sh
#Just clone normally - everything works automatically
git clone git@github.com:Byteswrite-admin/Meals_frontend.git
cd Meals_frontend
# That's it! Uses office credentials automatically.
```

### Personal Repos (Add `-personal` + Set Local Identity)

```sh
# Step 1: Clone with -personal in URL
git clone git@github.com-personal:rahul-lade/my-project.git
cd my-project

# Step 2: Set local identity (MUST DO for each personal project)
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"

# Step 3: Work normally
git add .
git commit -m "my changes"
git push
```

---

## Understanding Authentication vs Identity

### SSH Keys = Authentication (Who can push/pull)

- **Office**: `github.com` (normal) → Uses office SSH key
- **Personal**: `github.com-personal` → Uses personal SSH key

### Git Config = Identity (Who authored commits)

- **Global** (default): `rahul-at-bw` / `rahul.lade@byteswrite.com`
- **Local** (per folder): `rahul-lade` / `rahullade935@gmail.com`

| Repo Type | SSH URL | Identity Setup Needed? |
|---|---|---|
| **Office** | `git@github.com:org/repo.git` | ❌ No (uses global) |
| **Personal** | `git@github.com-personal:rahul-lade/repo.git` | ✅ Yes (set local) |

---

## Account Details

### Personal Account (rahul-lade)

```
GitHub Username: rahul-lade
Email:           rahullade935@gmail.com
SSH Key:         C:\Users\hp\.ssh\rahul_lade_personal
SSH URL Format:  git@github.com-personal:rahul-lade/repo.git
Git Identity:    LOCAL (set per project folder)
```

### Office Account (rahul-at-bw)

```
GitHub Username: rahul-at-bw
Email:           rahul.lade@byteswrite.com
SSH Key:         C:\Users\hp\.ssh\id_ed25519_rahul_at_bw
SSH URL Format:  git@github.com:rahul-at-bw/repo.git (normal!)
Git Identity:    GLOBAL (automatic everywhere)
```

---

## SSH Configuration

### SSH Config File

**Location**: `C:\Users\hp\.ssh\config`

```
# Office GitHub account (DEFAULT - works with normal github.com)
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_rahul_at_bw

# Personal GitHub account (use github.com-personal in URLs)
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/rahul_lade_personal
```

### How It Works

-When you use `github@github.com:user/repo.git` → Uses **office SSH key**
- When you use `git@github.com-personal:user/repo.git` → Uses **personal SSH key**

### Test SSH Connections

```sh
# Test office (normal github.com)
ssh -T git@github.com
# Expected: Hi rahul-at-bw! You've successfully authenticated...

# Test personal
ssh -T git@github.com-personal
# Expected: Hi rahul-lade! You've successfully authenticated...
```

---

## Git Identity Configuration

### Current Global Config (Office)

```sh
git config --global user.name "rahul-at-bw"
git config --global user.email "rahul.lade@byteswrite.com"
```

This is used **everywhere by default** - perfect for office work!

### How to Check Current Identity

```sh
# Check what identity will be used
cd your-project-folder
git config user.name      # Shows: rahul-at-bw (or rahul-lade if local is set)
git config user.email

# Check global only
git config --global user.name

# View all config
git config --list
```

### How to Set Local Identity for Personal Projects

**Run this inside each personal project folder:**

```sh
cd D:\stepbystep_react\my-project
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"

# Verify
git config user.name    # Should show: rahul-lade
```

> **Important**: Local config overrides global, but only for that specific folder!

---

## Common Workflows

### 1. Clone Office Repo (Shared with You)

```sh
# Example: Someone shared Meals_frontend with you
git clone git@github.com:Byteswrite-admin/Meals_frontend.git
cd Meals_frontend

# Start working immediately - uses office identity automatically
git pull
git checkout -b feature/my-changes
git add .
git commit -m "feat: add new feature"
git push
```

**No extra setup needed!** ✅

### 2. Clone Personal Repo (Your Learning Project)

```sh
# Clone with -personal
git clone git@github.com-personal:rahul-lade/react-tutorial.git
cd react-tutorial

# MUST set local identity
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"

# Now work normally
git add .
git commit -m "lesson 1 complete"
git push
```

### 3. Create New Office Repo

```sh
# Create locally
mkdir D:\office-projects\new-dashboard
cd D:\office-projects\new-dashboard
git init

# Create .gitignore, files, etc
git add .
git commit -m "Initial commit"

# Create repo on GitHub as rahul-at-bw, then:
git remote add origin git@github.com:rahul-at-bw/new-dashboard.git
git branch -M main
git push -u origin main
```

**Uses office identity automatically!** ✅

### 4. Create New Personal Repo

```sh
# Create locally
mkdir D:\stepbystep_react\new-project
cd D:\stepbystep_react\new-project
git init

# Set local identity FIRST
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"

# Create files, commit
git add .
git commit -m "Initial commit"

# Create repo on GitHub as rahul-lade, then:
git remote add origin git@github.com-personal:rahul-lade/new-project.git
git branch -M main
git push -u origin main
```

---

## Common Git Commands

### Basic Workflow

```sh
git status                              # Check what changed
git add .                               # Stage all changes
git add src/App.jsx                     # Stage specific file
git commit -m "feat: add login page"    # Commit with message
git push                                # Push to GitHub
git pull                                # Pull latest changes
```

### Branching

```sh
git branch                              # List branches
git checkout -b feature/login           # Create & switch to new branch
git checkout main                       # Switch to main branch
git push -u origin feature/login        # Push new branch to GitHub
git branch -d feature/login             # Delete local branch
```

### View History

```sh
git log                                 # View commit history
git log --oneline                       # Compact view
git log --oneline --graph --all         # Visual graph
```

### Undo Changes

```sh
git checkout -- file.js                 # Discard changes in file
git reset HEAD file.js                  # Unstage file
git reset --soft HEAD~1                 # Undo last commit (keep changes)
```

### Remote Management

```sh
git remote -v                           # View remotes
git remote add origin git@github.com-personal:user/repo.git
git remote set-url origin git@github.com:user/repo.git
git remote remove origin
```

---

## Troubleshooting

### Error: "Permission denied" or "Repository not found"

**Check which SSH key is being used:**

```sh
ssh -T git@github.com            # Should say: Hi rahul-at-bw!
ssh -T git@github.com-personal   # Should say: Hi rahul-lade!
```

**Check remote URL:**

```sh
git remote -v

# For personal repos, should be:
origin  git@github.com-personal:rahul-lade/repo.git

# For office repos, should be:
origin  git@github.com:rahul-at-bw/repo.git
```

**Fix remote URL:**

```sh
# Change to personal
git remote set-url origin git@github.com-personal:rahul-lade/repo.git

# Change to office (normal)
git remote set-url origin git@github.com:rahul-at-bw/repo.git
```

### Wrong Name in Commits

**Check current identity:**

```sh
cd your-project
git config user.name
git config user.email
```

**Fix for personal project:**

```sh
git config user.name "rahul-lade"
git config user.email "rahullade935@gmail.com"
```

**Check what the next commit will use:**

```sh
git config user.name     # Shows what will be used
```

### Error: "remote origin already exists"

```sh
git remote remove origin
git remote add origin git@github.com-personal:rahul-lade/repo.git
```

---

## File Locations

| File | Location | Purpose |
|------|----------|---------|
| SSH Config | `C:\Users\hp\.ssh\config` | Routes SSH to correct key |
| Personal SSH Key | `C:\Users\hp\.ssh\rahul_lade_personal` | Authentication (private) |
| Personal Public Key | `C:\Users\hp\.ssh\rahul_lade_personal.pub` | Added to GitHub |
| Office SSH Key | `C:\Users\hp\.ssh\id_ed25519_rahul_at_bw` | Authentication (private) |
| Office Public Key | `C:\Users\hp\.ssh\id_ed25519_rahul_at_bw.pub` | Added to GitHub |
| Global Git Config | `C:\Users\hp\.gitconfig` | Office identity (default) |
| Local Git Config | `project-folder\.git\config` | Per-project identity |

### View Your SSH Public Keys

```sh
# View personal public key (to add to GitHub)
Get-Content "$HOME\.ssh\rahul_lade_personal.pub"

# View office public key
Get-Content "$HOME\.ssh\id_ed25519_rahul_at_bw.pub"
```

---

## Quick Reference Card

```
┌──────────────────────────────────────────────────────────┐
│              OFFICE (NORMAL FLOW)                         │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  CLONE:                                                  │
│  git clone git@github.com:Byteswrite-admin/repo.git      │
│                                                          │
│  WORK:                                                   │
│  git add .                                               │
│  git commit -m "message"                                 │
│  git push                                                │
│                                                          │
│  IDENTITY: Automatic (global config)                     │
│                                                          │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│              PERSONAL (EXTRA STEPS)                       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  CLONE:                                                  │
│  git clone git@github.com-personal:rahul-lade/repo.git   │
│  cd repo                                                 │
│                                                          │
│  SET IDENTITY (MUST DO):                                 │
│  git config user.name "rahul-lade"                       │
│  git config user.email "rahullade935@gmail.com"          │
│                                                          │
│  WORK:                                                   │
│  git add .                                               │
│  git commit -m "message"                                 │
│  git push                                                │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Key Takeaways

✅ **Office repos**: Clone normally with `git@github.com:...`, everything automatic  
✅ **Personal repos**: Add `-personal` to URL, then set local identity  
✅ **SSH** handles authentication (can you push?)  
✅ **Git config** handles commit identity (who authored it?)  
✅ **They are separate** - both must be correct!

---

> **Remember**: Your office workflow didn't change! Personal projects just need 2 extra commands after cloning.
