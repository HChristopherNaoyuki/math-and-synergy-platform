# Disclaimer

Legal notice, usage terms, and documentation rules for the Math and Language Synergy project.

## Table of Contents

- [1. Purpose](#1-purpose)
- [2. Formal Disclaimer](#2-formal-disclaimer)
- [3. Media and Documentation Policy](#3-media-and-documentation-policy)
  - [3.1 Rule](#31-rule)
  - [3.2 Required Folder Structure](#32-required-folder-structure)
  - [3.3 Correct and Incorrect Practice](#33-correct-and-incorrect-practice)
- [4. Limitation of Liability](#4-limitation-of-liability)
- [5. Reporting Problems](#5-reporting-problems)
  - [5.1 Required Process](#51-required-process)
  - [5.2 Information to Include](#52-information-to-include)
- [6. Use at Your Own Risk](#6-use-at-your-own-risk)
- [7. Accuracy of Content](#7-accuracy-of-content)
- [8. Third-Party Dependencies](#8-third-party-dependencies)
- [9. External Links](#9-external-links)
- [10. Trademarks and Attribution](#10-trademarks-and-attribution)
- [11. Privacy and Data](#11-privacy-and-data)
- [12. Changes to This Disclaimer](#12-changes-to-this-disclaimer)
- [13. Contact](#13-contact)

---

## 1. Purpose

This document sets out the conditions under which the project may be copied, modified, and used. It also defines the mandatory rule for storing visual media in the repository. Anyone who clones, forks, deploys, or contributes to this project is expected to read and follow it.

[Back to top](#table-of-contents)

---

## 2. Formal Disclaimer

UNDER NO CIRCUMSTANCES SHOULD IMAGES OR EMOJIS BE INCLUDED DIRECTLY IN THE README FILE. ALL VISUAL MEDIA, INCLUDING SCREENSHOTS AND IMAGES OF THE APPLICATION, MUST BE STORED IN A DEDICATED FOLDER WITHIN THE PROJECT DIRECTORY. THIS FOLDER SHOULD BE CLEARLY STRUCTURED AND NAMED ACCORDINGLY TO INDICATE THAT IT CONTAINS ALL VISUAL CONTENT RELATED TO THE APPLICATION (FOR EXAMPLE, A FOLDER NAMED IMAGES, SCREENSHOTS, OR MEDIA). I AM NOT LIABLE OR RESPONSIBLE FOR ANY MALFUNCTIONS, DEFECTS, OR ISSUES THAT MAY OCCUR AS A RESULT OF COPYING, MODIFYING, OR USING THIS SOFTWARE. IF YOU ENCOUNTER ANY PROBLEMS OR ERRORS, PLEASE DO NOT ATTEMPT TO FIX THEM SILENTLY OR OUTSIDE THE PROJECT. INSTEAD, KINDLY SUBMIT A PULL REQUEST OR OPEN AN ISSUE ON THE CORRESPONDING GITHUB REPOSITORY, SO THAT IT CAN BE ADDRESSED APPROPRIATELY BY THE MAINTAINERS OR CONTRIBUTORS.

[Back to top](#table-of-contents)

---

## 3. Media and Documentation Policy

### 3.1 Rule

The README file must contain text only. Images and emojis must not be embedded in it. Every screenshot, diagram, logo, and other visual asset must live in a dedicated media folder inside the project directory.

### 3.2 Required Folder Structure

```text
.
├── README.md
├── screenshots/
│   ├── home.png
│   ├── courses.png
│   └── dashboard.png
└── documentation/
    ├── documentation.md
    ├── disclaimer.md
    └── contributing.md
```

Acceptable folder names are `screenshots`, `images`, or `media`. Choose one name and use it consistently. Use descriptive lowercase file names separated by hyphens, and prefer compressed formats such as PNG or WebP.

### 3.3 Correct and Incorrect Practice

| Practice | Status |
| --- | --- |
| Storing screenshots in `screenshots/` and referencing them from documentation pages | Correct |
| Embedding an image directly in the README file | Not permitted |
| Using emojis in the README file or in documentation | Not permitted |
| Keeping media files scattered across source folders | Not permitted |
| Naming files clearly, for example `dashboard-progress.png` | Correct |

[Back to top](#table-of-contents)

---

## 4. Limitation of Liability

The software is provided on an as-is basis, without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.

The author and maintainers are not liable or responsible for:

- Malfunctions, defects, or errors arising from copying, modifying, or using the software.
- Data loss, service interruption, or financial loss connected to its use.
- Consequences of deploying the project to a production environment without independent review and testing.
- Behaviour introduced by forks, third-party modifications, or unsupported configurations.

[Back to top](#table-of-contents)

---

## 5. Reporting Problems

### 5.1 Required Process

Problems must not be fixed silently or outside the project. Use the public process instead:

1. Search existing issues to confirm the problem has not already been reported.
2. Open a clear issue on the corresponding GitHub repository.
3. If you have a fix, submit a pull request that references the issue.
4. Allow maintainers and contributors to review the change before it is merged.

### 5.2 Information to Include

- A short and specific title.
- Steps to reproduce the problem.
- Expected result and actual result.
- Browser, operating system, and Node.js version.
- Console errors, copied as text rather than as an inline image in the README.

[Back to top](#table-of-contents)

---

## 6. Use at Your Own Risk

Any person or organisation using this project accepts full responsibility for evaluating it, testing it, and confirming that it is suitable for the intended purpose. Independent security review, accessibility review, and legal review are recommended before production use.

[Back to top](#table-of-contents)

---

## 7. Accuracy of Content

Course descriptions, dashboard figures, forum threads, and other content shown in the application are sample data used for demonstration. They do not represent live services, guaranteed learning outcomes, or verified statistics.

[Back to top](#table-of-contents)

---

## 8. Third-Party Dependencies

The project depends on open-source packages that are governed by their own licences and release cycles. Maintainers of this project do not control those packages and accept no responsibility for defects, vulnerabilities, or breaking changes originating from them. Review dependency licences before commercial use.

[Back to top](#table-of-contents)

---

## 9. External Links

Documentation may reference external websites for convenience. Those references do not imply endorsement, and the maintainers are not responsible for the availability, accuracy, or content of external resources.

[Back to top](#table-of-contents)

---

## 10. Trademarks and Attribution

Product names, logos, and trademarks referenced in this repository remain the property of their respective owners. Their use is descriptive only and does not indicate affiliation or sponsorship.

[Back to top](#table-of-contents)

---

## 11. Privacy and Data

The application in this repository does not include a backend, database, or payment processing. Forms are for demonstration purposes. If you extend the project to collect personal data, you are solely responsible for complying with applicable data protection law, including consent, retention, and disclosure requirements.

[Back to top](#table-of-contents)

---

## 12. Changes to This Disclaimer

This disclaimer may be updated as the project evolves. The version stored in the repository at the time of use is the version that applies. Review it after pulling significant updates.

[Back to top](#table-of-contents)

---

## 13. Contact

For questions related to this disclaimer, open an issue on the project repository. Do not report defects through private channels, because they cannot be tracked or resolved there.

[Back to top](#table-of-contents)
