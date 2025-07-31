# ✅ Cypress Test Project – Navigation and Cross-Domain Verification

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-4fc08d.svg)](https://www.cypress.io/)

This project demonstrates a simple **end-to-end (E2E)** test using [Cypress](https://www.cypress.io/), focused on navigating between domains and verifying UI behavior.

---

<<<<<<< HEAD
## Purpose of the Test
=======
##  Purpose of the Test
>>>>>>> 221d8e5ea361e59d005e6574a2566596276d6690

The goal is to simulate a real user journey that includes:

- Visiting the official Cypress homepage: `https://www.cypress.io`
- Accepting cookie preferences (if the popup appears)
- Clicking on the "Docs" link which redirects the user to another domain: `https://docs.cypress.io`
- Verifying that the **Docs page loads successfully** and the Cypress logo (`.navbar__brand`) is visible

This test showcases **cross-origin navigation** using `cy.origin()` introduced in Cypress v10+.

---

<<<<<<< HEAD
## What Is Being Tested?
=======
##  What Is Being Tested?
>>>>>>> 221d8e5ea361e59d005e6574a2566596276d6690

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Visit homepage | Page loads without errors |
| 2 | Handle cookie popup | Button is visible and clicked |
| 3 | Click Docs link | Switches to `docs.cypress.io` |
| 4 | Wait for Docs page to load | Cypress logo is present on screen |

---

## 🗂 Folder Structure

```
<<<<<<< HEAD
navigate-cypress-test/
├── cypress/
│   ├── e2e/
│   │   └── 3-navigate-on-cypress/
│   │       └── navigate-to-docs.cy.js
│   ├── fixtures/
│   └── support/
├── cypress.config.js
├── package.json
=======
my-cypress-project/
├── cypress/
│   └── e2e/
│       └── TestCypress/
│           └── cypress.cy.js
├── cypress.config.js
├── package.json
├── .gitignore
>>>>>>> 221d8e5ea361e59d005e6574a2566596276d6690
└── README.md
```

---

<<<<<<< HEAD
## Getting Started
=======
##  Getting Started
>>>>>>> 221d8e5ea361e59d005e6574a2566596276d6690

### 1. Install Dependencies

```bash
npm install
```

### 2. Open the Cypress Test Runner (GUI mode)

```bash
npm run cy:open
```

Or run the test in headless mode:

```bash
npm run cy:run
```

---

<<<<<<< HEAD
## Sample Test File – `navigate-to-docs.cy.js`
=======
##  Sample Test File – `cypress.cy.js`
>>>>>>> 221d8e5ea361e59d005e6574a2566596276d6690

```javascript
describe('Navigate to Docs and verify element on a different domain', () => {
  it('Visits the site and accesses the Docs page', () => {
    cy.visit('https://www.cypress.io/');

    // Accept cookies if the popup is visible
    cy.get('button:contains("Accept All")', { timeout: 10000 }).then(($btn) => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click();
      }
    });

    // Navigate to Docs (different domain)
    cy.get('#dropdownDocs')
      .should('have.attr', 'href')
      .then((href) => {
        cy.origin('https://docs.cypress.io', () => {
          cy.visit('/app/get-started/why-cypress');
          cy.get('.navbar__brand').should('exist');
        });
      });
  });
});
```

---

<<<<<<< HEAD
## Why This Test Is Useful
=======
##  Why This Test Is Useful
>>>>>>> 221d8e5ea361e59d005e6574a2566596276d6690

This test helps you:
- Learn to handle cookie banners
- Practice switching between different domains in Cypress
- Understand real-world navigation scenarios in UI testing
<<<<<<< HEAD
- Verify important branding/identity elements are visible
=======
- Verify important branding/identity elements are visible

---

>>>>>>> 221d8e5ea361e59d005e6574a2566596276d6690
