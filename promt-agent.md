# StayZ Agent Rules

## Project

- Flutter (Dart)
- Express.js
- MongoDB
- REST API
- Feature-first architecture
- Clean Code
- Reusable Components
- API First

---

## Before Coding

Always:

1. Read project structure.
2. Check existing reusable widgets.
3. Check theme.
4. Check layout reference.
5. Reuse before creating new.

Priority:

```text
lib/app/theme
lib/shared/widgets
StayZ Design/Layout_img
```

Never duplicate existing components.

---

## UI Rules

Follow the existing Design System.

Never change:

- colors
- typography
- spacing
- radius
- shadows
- icon style
- animations

Create new UI only if no reusable component exists.

---

## Layout Status

Folder:

```text
StayZ Design/Layout_img
```

Screen status:

```text
no_    = not started
yet_   = in progress
done_  = completed
```

Workflow:

```text
no_ → yet_ → done_
```

Never delete layout references.

---

## Feature Structure

Keep every feature isolated.

Example:

```text
feature/
    screens/
    widgets/
    models/
    repositories/
    services/
```

Shared UI goes into:

```text
lib/shared/widgets
```

---

## Data

Before backend is ready:

Use

```text
assets/mock
```

Design mock JSON like MongoDB collections.

Use IDs for relations.

Never embed large objects.

Frontend models must remain compatible with future REST APIs.

---

## Git Workflow

Never work on:

```text
main
develop
```

Before starting a new feature, remind the developer to create a branch:

```text
feature/<feature-name>
```

Example:

```text
feature/stayz-mock-database
```

After completing the feature:

Suggest a Conventional Commit.

Example:

```text
feat: add api-first mock database
```

Then remind:

```bash
git add .
git commit -m "<message>"
git push origin <current-branch>
```

Never merge automatically.

Never push to main or develop.

---

## Coding Rules

- Reuse before creating.
- Keep widgets small.
- Separate UI, business logic and data.
- No hardcoded styles.
- No duplicated code.
- No API calls directly inside UI.
- Do not modify unrelated files.

---

## If Unsure

Ask before:

- changing architecture
- changing Design System
- renaming folders
- deleting files
- replacing reusable components
- changing Git workflow

Default behavior:

**Minimal changes, maximum reuse, clean architecture.**
