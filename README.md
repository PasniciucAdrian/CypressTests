<div align="center">
  <a href="https://www.cypress.io/">
    <img src="logoCypress-final.png" alt="Cypress" width="300"/>
  </a>
</div>



#  Cypress Test Automation – Project Overview

This project contains organized Cypress test examples meant to help understand how Cypress works and how to write functional end-to-end (E2E) tests efficiently.

##  What is Cypress?

Cypress is a powerful front-end testing tool built for modern web applications. It is especially useful for:

- End-to-end (E2E) testing  
- Integration testing  
- Unit testing (limited)

Unlike Selenium, Cypress runs directly in the browser, giving it native access to every object, DOM element, and event. This allows for faster and more reliable tests with easy debugging.

##  Project Purpose

The goal of this project is to:

1. Learn and demonstrate Cypress fundamentals.
2. Create reusable and well-structured test cases.
3. Document each test individually with dedicated `README.md` files.
4. Maintain a scalable and understandable folder structure.

Each test example resides in its own folder under `cypress/e2e/`, and each has:
- A `.cy.js` test file  
- A local `README.md` explaining that specific test

This general `README.md` helps you understand the overall structure and navigate through the examples easily.

---

## 📁 Folder Structure

```
CypressTests/
│
├── cypress/
│   └── e2e/
│       ├── 1-getting-started/            # Reserved for Cypress example specs
│       ├── 2-advanced-examples/          # Reserved for Cypress example specs
│       ├── 3-navigate-on-cypress/        # Navigation test example
│       │   └── README.md
│       ├── 4-linkedIn-tests/             # Login test using env variables
│       │   └── README.md
│       ├── 5-exempleOf/                  # Miscellaneous test examples
│       │   └── README.md
│       └── 6-saucedemo-tests/            # SauceDemo automation suite
│           └── README.md
│
├── cypress.config.js                     # Cypress configuration
├── cypress.env.json                      # Environment variables (not tracked by Git)
├── package.json                          # Project dependencies and scripts
├── package-lock.json                     # Lock file for reproducible installs
└── README.md                             # General documentation (this file)
```

---

## 🔗 Test Modules

> ℹ️ **Note**: Folders `1-getting-started` and `2-advanced-examples` are included as reserved placeholders for Cypress examples.

### ✅ [Test 3 – Navigate on Cypress](./cypress/e2e/3-navigate-on-cypress/README.md)

This test covers basic navigation within Cypress using `cy.visit()` and asserts to verify the URL and page content.

### ✅ [Test 4 – LinkedIn Login (using env variables)](./cypress/e2e/4-linkedIn-tests/README.md)

This test automates a login flow for LinkedIn using `cy.get()` and reads secure credentials from the `cypress.env.json` file.

### ✅ [Test 5 – Miscellaneous Examples](./cypress/e2e/5-exempleOf/README.md)

This folder contains several standalone examples:
- Verifying constants and inputs
- Attribute selectors
- Screenshot generation
- DOM class checks
- Timed waits
- News page element tests

### ✅ [Test 6 – SauceDemo Automation Suite](./cypress/e2e/6-saucedemo-tests/README.md)
Full flow on **https://www.saucedemo.com/**:
- Invalid login (error message)
- Valid login with `standard_user` / `secret_sauce`
- Logout
- Open/close side menu
- Add product to cart
- Remove product from cart / verify empty cart
- Complete checkout (Finish order)
- Open product details page
- **Back to products** navigates back to listing


---

## 📦 How to Run This Project

1. Install dependencies:

```bash
npm install
```

2. Open Cypress Test Runner:

```bash
npx cypress open
```

3. Choose a test folder (e.g., `4-linkedin-tests` or `5-exempleOf`) and run the test cases.

---

## 🛡️ Note on Environment Variables

The file `cypress.env.json` is **excluded from version control** via `.gitignore`. Be sure to create this file locally and provide your own environment credentials if needed.
