# Math and Language Synergy - Technical Documentation

Complete technical reference for the Math and Language Synergy web application.

## Table of Contents

- [1. Introduction](#1-introduction)
  - [1.1 Purpose of This Document](#11-purpose-of-this-document)
  - [1.2 Intended Audience](#12-intended-audience)
  - [1.3 Product Summary](#13-product-summary)
- [2. System Overview](#2-system-overview)
  - [2.1 Application Type](#21-application-type)
  - [2.2 Key Capabilities](#22-key-capabilities)
  - [2.3 Current Limitations](#23-current-limitations)
- [3. Technology Stack](#3-technology-stack)
- [4. Project Structure](#4-project-structure)
- [5. Application Architecture](#5-application-architecture)
  - [5.1 Entry Points](#51-entry-points)
  - [5.2 Provider Hierarchy](#52-provider-hierarchy)
  - [5.3 Routing Table](#53-routing-table)
  - [5.4 State Management](#54-state-management)
- [6. Page Reference](#6-page-reference)
- [7. Component Reference](#7-component-reference)
- [8. Design System](#8-design-system)
  - [8.1 Token Model](#81-token-model)
  - [8.2 Usage Rules](#82-usage-rules)
  - [8.3 Responsive Behaviour](#83-responsive-behaviour)
- [9. Bilingual Support](#9-bilingual-support)
- [10. Local Development](#10-local-development)
  - [10.1 Prerequisites](#101-prerequisites)
  - [10.2 Installation](#102-installation)
  - [10.3 Available Scripts](#103-available-scripts)
- [11. Build and Deployment](#11-build-and-deployment)
- [12. Search Engine Optimisation](#12-search-engine-optimisation)
- [13. Accessibility](#13-accessibility)
- [14. Quality Assurance](#14-quality-assurance)
- [15. Troubleshooting](#15-troubleshooting)
- [16. Roadmap](#16-roadmap)
- [17. Glossary](#17-glossary)
- [18. Related Documents](#18-related-documents)

---

## 1. Introduction

### 1.1 Purpose of This Document

This document describes how the Math and Language Synergy application is built, how it is organised, and how to run, extend, and maintain it. It is the single authoritative technical reference for the project.

### 1.2 Intended Audience

| Audience | What this document provides |
| --- | --- |
| Developers | Architecture, folder layout, coding conventions, local setup |
| Designers | Design token model and responsive rules |
| Product owners | Feature scope, limitations, roadmap |
| Contributors | Context required before opening a pull request |

### 1.3 Product Summary

Math and Language Synergy is an online learning platform for English, Japanese, and Mathematics. It presents courses, an enrolment journey, a learner dashboard with progress and badges, a community forum, and a cultural exchange section. The interface can be switched between English and Japanese labels.

[Back to top](#table-of-contents)

---

## 2. System Overview

### 2.1 Application Type

The product is a single-page application that runs entirely in the browser. There is no server component in this repository. All content is rendered from React components and local sample data.

### 2.2 Key Capabilities

| Capability | Description |
| --- | --- |
| Marketing pages | Home, About, and Contact pages that explain the offering |
| Course catalogue | Course listings presented through a reusable course card |
| Enrolment journey | A guided enrolment form and confirmation flow |
| Learner dashboard | Progress bars and achievement badges |
| Community forum | Discussion threads presented as sample content |
| Cultural exchange | Section dedicated to language and culture partnering |
| Bilingual labels | Navigation labels switch between English and Japanese |

### 2.3 Current Limitations

- No authentication, database, or payment processing is implemented.
- Content shown on the dashboard, forum, and course catalogue is sample data held in the front end.
- The language switch covers navigation labels and is not a full internationalisation layer.
- State is not persisted between page reloads.

[Back to top](#table-of-contents)

---

## 3. Technology Stack

| Layer | Technology | Version family |
| --- | --- | --- |
| Language | TypeScript | 5.x |
| UI library | React | 18.x |
| Build tool | Vite | 5.x |
| Styling | Tailwind CSS | 3.x |
| Component primitives | shadcn/ui on Radix UI | Current |
| Routing | React Router DOM | 6.x |
| Server state | TanStack React Query | 5.x |
| Forms and validation | React Hook Form with Zod | 7.x / 3.x |
| Icons | lucide-react | Current |
| Notifications | shadcn Toaster and Sonner | Current |
| Charts | Recharts | 2.x |
| Linting | ESLint with typescript-eslint | 9.x |

[Back to top](#table-of-contents)

---

## 4. Project Structure

```text
.
├── documentation/            Project documentation set
│   ├── documentation.md      This technical reference
│   ├── disclaimer.md         Legal and usage disclaimer
│   └── contributing.md       Contribution guide
├── public/                   Static assets served as-is
├── src/
│   ├── assets/               Imported images and media
│   ├── components/
│   │   ├── ui/               shadcn/ui primitives
│   │   ├── BadgeDisplay.tsx  Achievement badge presentation
│   │   ├── CourseCard.tsx    Course summary card
│   │   ├── Navbar.tsx        Bilingual site navigation
│   │   └── ProgressBar.tsx   Learning progress indicator
│   ├── hooks/                Reusable React hooks
│   ├── lib/utils.ts          Class name helper
│   ├── pages/                One component per route
│   ├── App.tsx               Providers and route definitions
│   ├── main.tsx              React root bootstrap
│   └── index.css             Design tokens and base styles
├── index.html                HTML shell and metadata
├── tailwind.config.ts        Tailwind theme configuration
└── vite.config.ts            Build and dev server configuration
```

Screenshots and other visual media belong in a dedicated media folder such as `screenshots/`, never inline in the README file.

[Back to top](#table-of-contents)

---

## 5. Application Architecture

### 5.1 Entry Points

1. `index.html` provides the HTML shell, page metadata, and the `#root` mount node.
2. `src/main.tsx` creates the React root and renders `App`.
3. `src/App.tsx` composes global providers and declares all routes.

### 5.2 Provider Hierarchy

```text
QueryClientProvider
└── TooltipProvider
    ├── Toaster (shadcn)
    ├── Sonner (toast notifications)
    └── BrowserRouter
        └── Routes
```

### 5.3 Routing Table

| Path | Page component | Purpose |
| --- | --- | --- |
| `/` | `Home` | Landing page and value proposition |
| `/about` | `About` | Mission, teaching approach, and team |
| `/courses` | `Courses` | Course catalogue |
| `/enroll` | `Enroll` | Enrolment form |
| `/dashboard` | `Dashboard` | Progress and achievements |
| `/forum` | `Forum` | Community discussion |
| `/contact` | `Contact` | Contact details and enquiry form |
| `/cultural-exchange` | `CulturalExchange` | Language and culture exchange |
| `*` | `NotFound` | Fallback for unknown routes |

Add new routes above the catch-all `*` route, otherwise they will never match.

### 5.4 State Management

| Concern | Approach |
| --- | --- |
| Local UI state | `useState` inside the owning component |
| Cross-page navigation state | React Router |
| Asynchronous data | TanStack React Query, configured and ready for future APIs |
| Form state | React Hook Form with Zod schema validation |

[Back to top](#table-of-contents)

---

## 6. Page Reference

| Page | File | Notes |
| --- | --- | --- |
| Home | `src/pages/Home.tsx` | Hero section, feature highlights, and calls to action leading to the courses and enrolment pages |
| About | `src/pages/About.tsx` | Background, teaching philosophy, and credibility content |
| Courses | `src/pages/Courses.tsx` | Renders the catalogue using `CourseCard` |
| Enroll | `src/pages/Enroll.tsx` | Collects learner details through a validated form |
| Dashboard | `src/pages/Dashboard.tsx` | Uses `ProgressBar` and `BadgeDisplay` to show learner progress |
| Forum | `src/pages/Forum.tsx` | Lists discussion topics and replies |
| Cultural Exchange | `src/pages/CulturalExchange.tsx` | Explains partner matching and exchange sessions |
| Contact | `src/pages/Contact.tsx` | Enquiry form and contact information |
| Not Found | `src/pages/NotFound.tsx` | Friendly error page with a route back to Home |

Each page includes the shared `Navbar` so that navigation is consistent across the application.

[Back to top](#table-of-contents)

---

## 7. Component Reference

| Component | File | Responsibility |
| --- | --- | --- |
| `Navbar` | `src/components/Navbar.tsx` | Sticky header, desktop links, mobile sheet menu, and the English and Japanese label switch |
| `CourseCard` | `src/components/CourseCard.tsx` | Presents one course summary in a consistent card layout |
| `ProgressBar` | `src/components/ProgressBar.tsx` | Displays completion percentage for a course or skill |
| `BadgeDisplay` | `src/components/BadgeDisplay.tsx` | Renders earned and unearned achievement badges |
| `src/components/ui/*` | Generated | shadcn/ui primitives such as button, card, dialog, sheet, and toast |

Guidelines for new components:

- Keep components focused on a single responsibility.
- Type all props explicitly with TypeScript interfaces.
- Compose shadcn/ui primitives rather than recreating them.
- Place files in `src/components/` and route-level views in `src/pages/`.

[Back to top](#table-of-contents)

---

## 8. Design System

### 8.1 Token Model

All colours, gradients, and shadows are defined as semantic HSL design tokens in `src/index.css` and mapped into Tailwind through `tailwind.config.ts`. Component variants consume these tokens, which keeps light and dark themes consistent.

### 8.2 Usage Rules

- Use semantic utility classes such as `bg-background`, `text-foreground`, `bg-primary`, and `text-muted-foreground`.
- Do not hardcode colour utilities such as `text-white`, `bg-black`, or arbitrary hex values in components, because they bypass theming.
- Introduce a new token in `index.css` and `tailwind.config.ts` before using a new colour.
- Express variants through `class-variance-authority` rather than conditional class strings scattered across files.

### 8.3 Responsive Behaviour

The layout follows a mobile-first approach using Tailwind breakpoints. The navigation collapses into a slide-out sheet below the `md` breakpoint and expands into a horizontal menu above it. Grids reduce column counts progressively on smaller screens.

[Back to top](#table-of-contents)

---

## 9. Bilingual Support

The `Navbar` component holds a `language` state value of `EN` or `JP` and renders the matching label for each navigation entry. The globe button toggles this value.

To extend bilingual coverage:

1. Move label pairs into a shared dictionary module.
2. Provide the active language through a React context so every page can read it.
3. Replace hardcoded page text with dictionary lookups.
4. Keep the toggle control in the navigation bar so behaviour remains predictable.

[Back to top](#table-of-contents)

---

## 10. Local Development

### 10.1 Prerequisites

- Node.js 18 or later
- npm 9 or later, or an equivalent package manager
- Git

### 10.2 Installation

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

The development server starts on port 8080 with hot module replacement enabled.

### 10.3 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reloading |
| `npm run build` | Produce an optimised production build in `dist/` |
| `npm run build:dev` | Produce a development-mode build for debugging |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

[Back to top](#table-of-contents)

---

## 11. Build and Deployment

The production build is a static bundle in `dist/` and can be hosted on any static host or content delivery network.

Deployment checklist:

1. Run `npm run lint` and resolve reported issues.
2. Run `npm run build` and confirm it completes without errors.
3. Run `npm run preview` and verify every route, including deep links.
4. Configure the host to rewrite unknown paths to `index.html` so client-side routing works.
5. Publish and confirm metadata renders correctly when a link is shared.

[Back to top](#table-of-contents)

---

## 12. Search Engine Optimisation

Current measures in `index.html`:

- Descriptive page title under sixty characters.
- Meta description under one hundred and sixty characters.
- Keyword, author, Open Graph, and Twitter card metadata.
- A canonical link element.

Ongoing rules:

- Exactly one `h1` element per page.
- Use semantic elements such as `main`, `nav`, `section`, and `footer`.
- Provide meaningful `alt` text for every image.
- Lazy load images that appear below the fold.
- Update the canonical URL when the production domain changes.

[Back to top](#table-of-contents)

---

## 13. Accessibility

- Interactive icon-only controls carry `aria-label` attributes.
- Radix UI primitives supply keyboard navigation and focus management.
- Colour tokens are chosen to maintain readable contrast in both themes.
- Headings follow a logical order and are not used purely for styling.

Before merging a change, confirm the new interface is reachable by keyboard alone and that focus indicators remain visible.

[Back to top](#table-of-contents)

---

## 14. Quality Assurance

| Check | Method |
| --- | --- |
| Type safety | TypeScript compilation during build |
| Code style | ESLint with the React Hooks and React Refresh plugins |
| Visual review | Manual review across mobile, tablet, and desktop widths |
| Route verification | Navigate every route and confirm the fallback page for unknown paths |
| Console health | Confirm no errors or warnings appear in the browser console |

[Back to top](#table-of-contents)

---

## 15. Troubleshooting

| Symptom | Likely cause | Resolution |
| --- | --- | --- |
| Blank page after build | Incorrect base path or missing rewrite rule | Configure the host to serve `index.html` for all routes |
| Route returns a 404 on refresh | Static host is not configured for single-page applications | Add a catch-all rewrite to `index.html` |
| Styles missing | Class names built dynamically and removed during purge | Use complete class strings that Tailwind can detect |
| New route not reachable | Route declared after the catch-all `*` route | Move the route above the catch-all entry |
| Dependency errors after pulling | Stale local packages | Delete `node_modules`, then run `npm install` |

[Back to top](#table-of-contents)

---

## 16. Roadmap

1. Introduce authentication and learner accounts.
2. Persist course, progress, and badge data in a managed backend.
3. Complete full bilingual coverage across all pages.
4. Add payment handling for paid enrolments.
5. Add automated component and end-to-end tests.
6. Add analytics to measure enrolment conversion.

[Back to top](#table-of-contents)

---

## 17. Glossary

| Term | Meaning |
| --- | --- |
| SPA | Single-page application that updates content without full page reloads |
| Design token | Named design value such as a colour, mapped to a semantic role |
| Route | URL path mapped to a page component |
| Primitive | Low-level unstyled component that supplies behaviour and accessibility |
| HMR | Hot module replacement, which updates modules in the browser during development |

[Back to top](#table-of-contents)

---

## 18. Related Documents

| Document | Location |
| --- | --- |
| Contribution guide | `documentation/contributing.md` |
| Disclaimer | `documentation/disclaimer.md` |
| Project overview | `README.md` |

[Back to top](#table-of-contents)
