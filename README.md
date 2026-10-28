# Math and Language Synergy

An online learning platform for English, Japanese, and Mathematics. It is
a fast, responsive, bilingual single-page web application.

Source note: this README is based solely on the project file
"# Math and Language Synergy.txt". No external sources were used.

## Table of Contents

- [1. Overview](#1-overview)
- [2. Features](#2-features)
- [3. Technology Stack](#3-technology-stack)
- [4. Getting Started](#4-getting-started)
  - [4.1 Prerequisites](#41-prerequisites)
  - [4.2 Installation](#42-installation)
- [5. Available Scripts](#5-available-scripts)
- [6. Project Structure](#6-project-structure)
- [7. Application Routes](#7-application-routes)
- [8. Screenshots](#8-screenshots)
- [9. Editing This Project](#9-editing-this-project)
- [10. Deployment](#10-deployment)
- [11. Custom Domain](#11-custom-domain)
- [12. Documentation](#12-documentation)
- [13. Contributing](#13-contributing)
- [14. Disclaimer](#14-disclaimer)
- [15. Licence](#15-licence)

---

## 1. Overview

Math and Language Synergy helps learners master English, Japanese, and
Mathematics. It provides a structured course catalogue, a guided
enrolment journey, a progress dashboard with achievement badges, a
community forum, and a cultural exchange section. The interface supports
English and Japanese navigation labels.

The application runs entirely in the browser. This repository contains
no back-end service, and demonstration content is supplied by local
sample data.

Project URL: https://lovable.dev/projects/c3971488-8afe-4ac2-a215-2baa3dc9e053

[Back to top](#table-of-contents)

---

## 2. Features

| Feature | Description |
| --- | --- |
| Course catalogue | Browse courses in English, Japanese, and Mathematics |
| Enrolment journey | Guided, validated enrolment form |
| Learner dashboard | Progress bars and achievement badges |
| Community forum | Discussion topics and replies |
| Cultural exchange | Language and culture partnering section |
| Bilingual navigation | Switch navigation labels between English and Japanese |
| Responsive design | Mobile-first layout with a slide-out menu on small screens |
| Themed design system | Semantic design tokens with light and dark support |

[Back to top](#table-of-contents)

---

## 3. Technology Stack

- Vite
- TypeScript
- React 18
- React Router
- Tailwind CSS
- shadcn/ui on Radix UI
- TanStack React Query
- React Hook Form with Zod
- ESLint

[Back to top](#table-of-contents)

---

## 4. Getting Started

### 4.1 Prerequisites

- Node.js 18 or later. You may install it with nvm:
  https://github.com/nvm-sh/nvm#installing-and-updating
- npm 9 or later
- Git

### 4.2 Installation

```sh
git clone https://github.com/HChristopherNaoyuki/math-and-synergy-platform.git
cd math-and-synergy-platform
npm install
npm run dev
```

The development server starts on port 8080 with hot reloading and an
instant preview.

[Back to top](#table-of-contents)

---

## 5. Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimised production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

[Back to top](#table-of-contents)

---

## 6. Project Structure

```text
.
├── documentation/        Technical documentation, disclaimer,
│                         contributing guide
├── public/               Static assets
├── screenshots/          All visual media for this project
├── src/
│   ├── components/       Reusable components and shadcn/ui
│   │                     primitives
│   ├── hooks/            Reusable React hooks
│   ├── lib/              Shared utilities
│   ├── pages/            One component per route
│   ├── App.tsx           Providers and routes
│   ├── main.tsx          Application bootstrap
│   └── index.css         Design tokens and base styles
├── index.html            HTML shell and metadata
└── tailwind.config.ts    Tailwind theme configuration
```

[Back to top](#table-of-contents)

---

## 7. Application Routes

| Path | Description |
| --- | --- |
| `/` | Home |
| `/about` | About the platform |
| `/courses` | Course catalogue |
| `/enroll` | Enrolment form |
| `/dashboard` | Learner progress and badges |
| `/forum` | Community forum |
| `/cultural-exchange` | Cultural exchange |
| `/contact` | Contact and enquiries |
| Any other path | Not found page |

[Back to top](#table-of-contents)

---

## 8. Screenshots

Screenshots are not embedded in this file. All visual media for the
application is stored in the `screenshots/` folder in the project
directory. Refer to that folder for images of the home page, course
catalogue, dashboard, forum, and other views.

[Back to top](#table-of-contents)

---

## 9. Editing This Project

There are several ways to edit this project.

**Use Lovable.** Visit the project URL and start prompting. Changes made
through Lovable are committed automatically to this repository.

**Use your preferred IDE.** Clone the repository, install dependencies,
and push your changes. Pushed changes are reflected in Lovable.

**Edit directly in GitHub.** Open the file, select the edit action, make
the change, and commit.

**Use GitHub Codespaces.** Create a new codespace from the repository,
edit, then commit and push.

[Back to top](#table-of-contents)

---

## 10. Deployment

Open Lovable and select Share, then Publish. Alternatively, run
`npm run build` and host the generated `dist/` folder on any static
host. Configure the host to rewrite unknown paths to `index.html` so
that client-side routing works on direct links and page refreshes.

[Back to top](#table-of-contents)

---

## 11. Custom Domain

Navigate to Project, then Settings, then Domains, and select Connect
Domain. Full instructions are available at
https://docs.lovable.dev/features/custom-domain#custom-domain

[Back to top](#table-of-contents)

---

## 12. Documentation

| Document | Location |
| --- | --- |
| Technical documentation | `documentation/documentation.md` |
| Contributing guide | `documentation/contributing.md` |
| Disclaimer | `documentation/disclaimer.md` |

[Back to top](#table-of-contents)

---

## 13. Contributing

Contributions are welcome. Read `documentation/contributing.md` before
opening a pull request. In summary: work on a focused branch, follow
the coding and design token standards, run linting and the production
build, verify affected routes, and update documentation in the same
pull request.

[Back to top](#table-of-contents)

---

## 14. Disclaimer

This software is provided as is, without warranty of any kind. The
maintainers are not liable for malfunctions, defects, or issues arising
from copying, modifying, or using it. Problems must not be fixed
silently or outside the project. Open an issue or submit a pull request
on the corresponding GitHub repository instead. Images and emojis must
never be placed in this README file, and all visual media must be
stored in the dedicated media folder. The full text is available in
`documentation/disclaimer.md`.

[Back to top](#table-of-contents)

---

## 15. Licence

Refer to the licence file in the repository. If no licence file is
present, all rights are reserved by the project owner.

[Back to top](#table-of-contents)

---

END OF DOCUMENT

---
