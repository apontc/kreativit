# KreativIT Website – Project Status

**Last Updated:** July 9, 2026

Current milestone
├── Why KreativIT

Completed
├── Navbar
├── Hero
├── Services

Current architecture

Important decisions

Current blockers (if any)

Next tasks

Backlog additions

## Current Status

The project has been initialized and the foundation has been established. Development is following an iterative approach with small, verified commits.

Current workflow:

> Build → Verify → Commit → Push

Conventional Commits are used throughout the project.

---

# Technology Stack

* React
* TypeScript
* Vite
* Tailwind CSS v4
* ESLint
* Git
* GitHub

---

# Current Architecture

```
src/
├── assets/
├── components/
│   ├── layout/
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   └── Services.tsx
│   └── ui/
├── config/
│   └── site.ts
├── data/
│   ├── services.ts
│   └── why.ts
├── hooks/
├── styles/
│   └── designTokens.ts
├── types/
├── App.tsx
├── main.tsx
└── index.css
```

---

# Architecture Decisions

## Components

Components should remain presentational whenever practical.

Business content should not be hardcoded into components.

---

## Configuration

Global website configuration belongs in:

```
src/config/site.ts
```

Currently contains:

* Business name
* Tagline
* Owner
* Pronouns
* Contact email
* Social links

---

## Design Tokens

Reusable styling belongs in:

```
src/styles/designTokens.ts
```

Currently includes:

* Layout helpers
* Button styles

Future reusable styling should also live here.

---

## Data

Reusable content belongs in:

```
src/data/
```

Current data files:

* services.ts
* why.ts

Future additions include:

* projects.ts
* navigation.ts
* testimonials.ts (Version 2 if added)

---

# Sections Completed

## Navbar

Completed.

Features:

* Sticky navigation
* Frosted background
* Links:

  * Hero
  * Services
  * Why
  * Work
  * Contact

---

## Hero

Completed.

Contains:

* Business name
* Tagline
* Short introduction
* Primary CTA
* Secondary CTA

Uses:

* site.ts
* designTokens.ts

---

## Services

Completed.

Data-driven.

Uses:

```
src/data/services.ts
```

Current services:

* Custom web applications
* Business websites
* Website redesigns
* Maintenance & support

---

# In Progress

```
src/data/why.ts
```

The data has been created.

The component has **not yet been built**.

Next task:

```
src/components/sections/WhyKreativIT.tsx
```

---

# Current Design Direction

The website should feel:

* Bright
* Warm
* Minimal
* Modern
* Calm
* Professional

Avoid:

* Generic SaaS appearance
* Stock illustrations
* Flashy animations
* Visual clutter

The emphasis should remain on:

* Typography
* Spacing
* Accessibility
* Simplicity

---

# Development Workflow

Every feature follows:

1. Build
2. Verify in browser
3. Commit
4. Push

Commits should remain:

* Small
* Focused
* Conventional

Examples:

```
feat:
fix:
refactor:
style:
docs:
chore:
```

---

# AI Collaboration Rules

Any AI working on this project should:

* Work one step at a time.
* Keep answers concise.
* Explain concepts in plain language.
* Avoid unnecessary technical jargon.
* Prefer many small changes over large rewrites.
* Always ask for the latest version of a file before editing if the user may have made independent changes.
* Never assume previously shared files are still current.
* Keep track of architecture decisions, design decisions, backlog items, and commit boundaries.
* Recommend starting a new Project November chat before the conversation becomes too large.
* Provide a project handoff before switching chats.

---

# Current Commit Progress

Completed milestones include:

* Initial project setup
* Hero section
* Separate site config from design tokens
* Services data
* Services section
* Why section data

---

# Next Tasks

1. Build the Why KreativIT section.
2. Integrate it into App.tsx.
3. Verify.
4. Commit:

   ```
   feat: add why section
   ```
5. Begin the Selected Work (Lineup) section.

---

# Long-Term Direction

Version 1 focuses exclusively on helping attract freelance clients before the November visa renewal.

Features that do not directly support this goal should be deferred to the Version 2 backlog.
