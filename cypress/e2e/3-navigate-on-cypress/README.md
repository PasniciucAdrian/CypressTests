# ✅ Cypress Test Project – Navigation and Cross-Domain Verification

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-4fc08d.svg)](https://www.cypress.io/)

This project demonstrates a simple **end-to-end (E2E)** test using [Cypress](https://www.cypress.io/), focused on navigating between domains and verifying UI behavior.

---

## Purpose of the Test


The goal is to simulate a real user journey that includes:

- Visiting the official Cypress homepage: `https://www.cypress.io`
- Accepting cookie preferences (if the popup appears)
- Clicking on the "Docs" link which redirects the user to another domain: `https://docs.cypress.io`
- Verifying that the **Docs page loads successfully** and the Cypress logo (`.navbar__brand`) is visible

This test showcases **cross-origin navigation** using `cy.origin()` introduced in Cypress v10+.

---

## What Is Being Tested?


| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Visit homepage | Page loads without errors |
| 2 | Handle cookie popup | Button is visible and clicked |
| 3 | Click Docs link | Switches to `docs.cypress.io` |
| 4 | Wait for Docs page to load | Cypress logo is present on screen |

---


## Why This Test Is Useful


This test helps you:

- Learn to handle cookie banners
- Practice switching between different domains in Cypress
- Understand real-world navigation scenarios in UI testing
- Verify important branding/identity elements are visible


---
