# Git Cheat Sheet

## Verify Current Directory

```bash
pwd
```

Purpose:
Displays the current working directory.

Example Output:

```text
/c/Projects/enterprise-test-automation-framework
```

---

## Initialize Git Repository

```bash
git init
```

Purpose:
Creates a hidden `.git` folder and initializes a local Git repository.

Interview Tip:
`git init` creates a **local Git repository**, not a GitHub repository.

---

## Check Repository Status

```bash
git status
```

Purpose:
Displays the current repository state.

Shows:
- Current branch
- Staged files
- Untracked files
- Modified files

---

## Stage All Files

```bash
git add .
```

Purpose:
Moves all changes from the Working Directory to the Staging Area.

---

## Commit Changes

```bash
git commit -m "Initial Commit"
```

Purpose:
Creates a snapshot of the staged files.

---

## Show Local Branches

```bash
git branch
```

Purpose:
Lists all local branches.

---

## Show Local + Remote Branches

```bash
git branch -a
```

Purpose:
Displays both local and remote-tracking branches.

---

## Rename Current Branch

```bash
git branch -M main
```

Purpose:
Renames the current branch to `main`.

---

## Show Remote Repositories

```bash
git remote -v
```

Purpose:
Displays configured remote repositories.

---

## Add GitHub Repository

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
```

Purpose:
Connects the local repository with GitHub.

---

## Push First Time

```bash
git push -u origin main
```

Purpose:
Pushes the branch and creates upstream tracking.

Future pushes:

```bash
git push
```


# Git Cheat Sheet (Project Journey)

> Project: DemoRestApiAutomationFramework
> Purpose: Quick Revision
> Author: Abhishek Soni

---

# Repository Setup

## Check Remote Repository

```bash
git remote show origin
```

### Purpose

Displays information about the remote repository.

### Example Output

- Fetch URL
- Push URL
- HEAD Branch
- Remote Branches
- Local branches configured for pull
- Local refs configured for push

---

# Synchronize Repository

## Pull Latest Changes

```bash
git pull origin main
```

### Purpose

Downloads and merges latest changes from the remote main branch.

---

# Branching

## Create New Feature Branch

```bash
git checkout -b feature/project-setup
```

### Purpose

Creates and switches to a new feature branch.

---

## Switch Branch

```bash
git checkout develop
```

```bash
git checkout feature/project-setup
```

### Purpose

Switches between branches.

---

# Branch Information

## Show Local and Remote Branches

```bash
git branch -a
```

### Purpose

Displays:

- Local branches
- Remote branches

---

## Show Local Branches

```bash
git branch
```

---

## Show Branch with Last Commit

```bash
git branch -v
```

---

# Upstream

## Configure Upstream

```bash
git branch --set-upstream-to=origin/develop
```

### Purpose

Links local develop branch with remote develop.

---

## Remove Upstream

```bash
git branch --unset-upstream
```

### Purpose

Removes tracking relationship.

---

# Check Status

## Current Repository Status

```bash
git status
```

Shows

- Modified files
- Staged files
- Untracked files

---

## Show Every Untracked File

```bash
git status --untracked-files=all
```

---

# Staging

## Stage Everything

```bash
git add .
```

---

## Stage Specific File

```bash
git add filename
```

---

# Commit

## Commit Changes

```bash
git commit -m "feat: Initial REST Assured framework setup"
```

### Best Practice

Use Conventional Commits.

Examples

```text
feat:
fix:
docs:
refactor:
test:
chore:
```

---

# Push

## Push Branch

```bash
git push origin feature/project-setup
```

---

## Push Current Branch

```bash
git push
```

Works only when upstream is configured.

---

## Push with Upstream

```bash
git push -u origin feature/project-setup
```

Creates remote branch and configures upstream.

---

# Log

## Compact Commit History

```bash
git log --oneline --all
```

Example

```text
bbbc268 Merge pull request #1
3646305 feat: Initial REST Assured framework setup
fee2613 Initial commit
```

---

## Graph View

```bash
git log --graph --oneline --decorate --all
```

Shows Git history visually.

---

# Pull Request Workflow

Developer

↓

Create Feature Branch

↓

Code

↓

git add .

↓

git commit

↓

git push

↓

Create Pull Request

↓

Review

↓

Approve

↓

Merge

↓

Delete Feature Branch

---

# Branch Protection

Protect

✅ main

✅ develop

Rules

- Pull Request Required
- Review Required
- Status Checks
- No Direct Push
- No Force Push
- Conversation Resolution

---

# Merge Strategy Used

Merge Commit

History

```text
develop

A──────────────M
 \            /
  B──C──D────
```

---

# Challenges Faced

## Challenge 1

Forgot upstream.

Solution

```bash
git branch --set-upstream-to
```

---

## Challenge 2

Difference between

```bash
git push
```

and

```bash
git push origin
```

---

## Challenge 3

Protected Branch

Could not merge without review.

---

## Challenge 4

.gitignore conflict while switching branches.

Reason

Untracked file would be overwritten.

---

## Challenge 5

test-output accidentally staged.

Lesson

Always configure .gitignore before first commit.

---

## Challenge 6

LF will be replaced by CRLF warning.

Meaning

Windows line ending conversion.

Safe to ignore in most projects.

---

# Interview Questions

Q. What is upstream?

Q. Difference between git fetch and git pull?

Q. Difference between git push and git push origin?

Q. Why use git push -u?

Q. What is a tracking branch?

Q. Why protect develop?

Q. Why protect main?

Q. Why delete feature branches?

Q. Does deleting a feature branch delete commits?

Answer

No.

Only the branch pointer is deleted.

---

# Lessons Learned

✔ Always create feature branches from develop.

✔ Never push directly to main.

✔ Protect develop and main.

✔ Use Pull Requests.

✔ Review code before merge.

✔ Use meaningful commit messages.

✔ Configure .gitignore before committing.

✔ Delete merged feature branches.

✔ Use upstream for easier push/pull.

✔ Merge Commit preserves feature history.

---

# Commands Revision

```bash
git remote show origin

git pull origin main

git checkout -b feature/project-setup

git checkout develop

git checkout feature/project-setup

git branch

git branch -a

git branch -v

git branch --set-upstream-to=origin/develop

git branch --unset-upstream

git status

git status --untracked-files=all

git add .

git commit -m "message"

git push

git push origin feature/project-setup

git push -u origin feature/project-setup

git log --oneline --all

git log --graph --oneline --decorate --all
```

---

# Next Commands to Learn

- git fetch
- git merge
- git rebase
- git stash
- git restore
- git reset
- git revert
- git cherry-pick
- git tag
- git reflog
- git diff
- git blame