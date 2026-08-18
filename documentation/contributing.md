# Contributing Guide

How to propose, build, and submit changes to the Math and Language Synergy project.

## Table of Contents

- [1. Welcome](#1-welcome)
- [2. Code of Conduct](#2-code-of-conduct)
- [3. Ways to Contribute](#3-ways-to-contribute)
- [4. Before You Start](#4-before-you-start)
- [5. Development Setup](#5-development-setup)
  - [5.1 Prerequisites](#51-prerequisites)
  - [5.2 Fork and Clone](#52-fork-and-clone)
  - [5.3 Run the Application](#53-run-the-application)
- [6. Branching Strategy](#6-branching-strategy)
- [7. Coding Standards](#7-coding-standards)
  - [7.1 TypeScript and React](#71-typescript-and-react)
  - [7.2 Styling and Design Tokens](#72-styling-and-design-tokens)
  - [7.3 File and Folder Conventions](#73-file-and-folder-conventions)
- [8. Commit Messages](#8-commit-messages)
- [9. Testing and Verification](#9-testing-and-verification)
- [10. Documentation Requirements](#10-documentation-requirements)
- [11. Pull Request Process](#11-pull-request-process)
  - [11.1 Checklist](#111-checklist)
  - [11.2 Description Template](#112-description-template)
  - [11.3 Review Expectations](#113-review-expectations)
- [12. Reporting Bugs](#12-reporting-bugs)
- [13. Requesting Features](#13-requesting-features)
- [14. Security Issues](#14-security-issues)
- [15. Release Process](#15-release-process)
- [16. Getting Help](#16-getting-help)

---

## 1. Welcome

Contributions are welcome from developers, designers, writers, and testers. This guide explains the standards that keep the project consistent, readable, and safe to change. Following it shortens review time and increases the chance that a contribution is merged.

[Back to top](#table-of-contents)

---

## 2. Code of Conduct

All participants are expected to behave professionally and respectfully. Assume good intent, give specific and constructive feedback, and keep discussion focused on the work rather than the person. Harassment, discrimination, and personal attacks are not tolerated and may result in removal from the project.

[Back to top](#table-of-contents)

---

## 3. Ways to Contribute

| Contribution | Description |
| --- | --- |
| Bug reports | Report reproducible defects with clear steps |
| Bug fixes | Correct defects and reference the related issue |
| Features | Implement agreed enhancements |
| Documentation | Improve clarity, accuracy, and structure |
| Accessibility | Improve keyboard support, contrast, and semantics |
| Design | Refine layout, spacing, and design tokens |
| Testing | Verify behaviour across browsers and screen sizes |

[Back to top](#table-of-contents)

---

## 4. Before You Start

1. Read `documentation/documentation.md` to understand the architecture.
2. Read `documentation/disclaimer.md`, in particular the media and documentation policy.
3. Search open issues and pull requests to avoid duplicated work.
4. For anything larger than a small fix, open an issue first and agree the approach.
5. Keep each contribution focused on a single concern.

[Back to top](#table-of-contents)

---

## 5. Development Setup

### 5.1 Prerequisites

- Node.js 18 or later
- npm 9 or later
- Git
- A code editor with TypeScript and ESLint support

### 5.2 Fork and Clone

```sh
git clone <YOUR_FORK_URL>
cd <YOUR_PROJECT_NAME>
git remote add upstream <ORIGINAL_REPOSITORY_URL>
npm install
```

Keep your fork current before starting new work:

```sh
git fetch upstream
git checkout main
git merge upstream/main
```

### 5.3 Run the Application

```sh
npm run dev
```

The development server runs on port 8080 with hot module replacement.

[Back to top](#table-of-contents)

---

## 6. Branching Strategy

Create a branch from `main` for every contribution.

| Prefix | Use |
| --- | --- |
| `feature/` | New functionality |
| `fix/` | Bug fixes |
| `docs/` | Documentation only |
| `refactor/` | Internal restructuring with no behaviour change |
| `style/` | Visual and design token changes |
| `chore/` | Tooling, configuration, and dependencies |

Example: `feature/course-filter-by-level`.

[Back to top](#table-of-contents)

---

## 7. Coding Standards

### 7.1 TypeScript and React

- Use functional components with typed props. Avoid the `any` type.
- Keep components small and single-purpose, and extract shared logic into hooks.
- Place route-level views in `src/pages/` and reusable pieces in `src/components/`.
- Register new routes in `src/App.tsx` above the catch-all `*` route.
- Handle loading, empty, and error states in any view that will consume data.
- Provide `aria-label` values for icon-only controls and keep headings in logical order.

### 7.2 Styling and Design Tokens

- Use semantic Tailwind classes backed by tokens, such as `bg-background`, `text-foreground`, and `bg-primary`.
- Do not hardcode colours such as `text-white`, `bg-black`, or arbitrary hex values.
- Add new tokens to `src/index.css` and `tailwind.config.ts` before using them.
- Build variants with `class-variance-authority` and merge class names with the `cn` helper.
- Design mobile first and verify each breakpoint.

### 7.3 File and Folder Conventions

| Item | Convention | Example |
| --- | --- | --- |
| Component file | PascalCase | `CourseCard.tsx` |
| Page file | PascalCase | `Dashboard.tsx` |
| Hook file | camelCase with `use` prefix | `use-mobile.tsx` |
| Utility file | lowercase | `utils.ts` |
| Media asset | lowercase with hyphens | `dashboard-progress.png` |

Store all screenshots and images in the dedicated media folder. Never embed images or emojis in the README file.

[Back to top](#table-of-contents)

---

## 8. Commit Messages

Use the Conventional Commits format:

```text
<type>(<optional scope>): <short summary>
```

| Type | Meaning |
| --- | --- |
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation change |
| `style` | Visual or formatting change |
| `refactor` | Restructuring without behaviour change |
| `perf` | Performance improvement |
| `chore` | Tooling or maintenance |

Examples:

```text
feat(courses): add level filter to the catalogue
fix(navbar): keep language toggle state on mobile
docs(readme): clarify local setup steps
```

Write summaries in the imperative mood, keep them under seventy-two characters, and use the body to explain the reason for the change.

[Back to top](#table-of-contents)

---

## 9. Testing and Verification

Before opening a pull request:

1. Run `npm run lint` and resolve all reported issues.
2. Run `npm run build` and confirm the build completes without errors.
3. Run `npm run preview` and check every affected route.
4. Verify the interface on mobile, tablet, and desktop widths.
5. Navigate the changed interface using the keyboard only.
6. Confirm the browser console shows no errors or warnings.

[Back to top](#table-of-contents)

---

## 10. Documentation Requirements

Update documentation in the same pull request as the code change.

| Change | Document to update |
| --- | --- |
| New route or page | Routing table and page reference in `documentation/documentation.md` |
| New shared component | Component reference in `documentation/documentation.md` |
| New script or dependency | Technology stack and scripts sections |
| Setup or usage change | `README.md` |
| Policy change | `documentation/disclaimer.md` |

Documentation must be written in plain business English, contain no emojis, and include a linked Table of Contents.

[Back to top](#table-of-contents)

---

## 11. Pull Request Process

### 11.1 Checklist

- The branch is current with `main`.
- The change addresses a single concern.
- Linting and the production build both pass.
- Affected routes were verified manually.
- No hardcoded colours were introduced.
- Documentation was updated where required.
- Screenshots, if any, are stored in the media folder and are not embedded in the README file.

### 11.2 Description Template

```text
## Summary
Explain what the change does and why it is needed.

## Related Issue
Closes #<issue number>

## Type of Change
Bug fix / Feature / Documentation / Refactor / Style / Chore

## How It Was Tested
List the steps taken to verify the change.

## Notes for Reviewers
Highlight anything that needs particular attention.
```

### 11.3 Review Expectations

- Maintainers aim to give first feedback within a few working days.
- Respond to review comments with either a change or a short explanation.
- Push follow-up commits to the same branch rather than opening a new pull request.
- A pull request is merged once it is approved and all checks pass.

[Back to top](#table-of-contents)

---

## 12. Reporting Bugs

Open an issue that includes:

- A specific title.
- Steps to reproduce.
- Expected result and actual result.
- Browser, operating system, and Node.js version.
- Console output copied as text.

Do not fix problems silently or outside the project. Every fix should be visible through an issue or a pull request.

[Back to top](#table-of-contents)

---

## 13. Requesting Features

Describe the problem the feature solves, the users who benefit, the proposed behaviour, and any alternatives considered. Wait for maintainer agreement before implementing large features, so that effort is not wasted.

[Back to top](#table-of-contents)

---

## 14. Security Issues

Do not disclose suspected vulnerabilities in a public issue with exploit details. Report them privately to the maintainers first and allow reasonable time for a fix before any public discussion.

[Back to top](#table-of-contents)

---

## 15. Release Process

1. Merge approved pull requests into `main`.
2. Verify the production build and preview.
3. Update documentation affected by the release.
4. Tag the release and summarise the changes.
5. Deploy the static build to the hosting environment.

[Back to top](#table-of-contents)

---

## 16. Getting Help

- Review `documentation/documentation.md` for architecture and setup questions.
- Search closed issues for previously answered questions.
- Open a new issue with the question label if the answer is not available.

Thank you for contributing to the project.

[Back to top](#table-of-contents)
