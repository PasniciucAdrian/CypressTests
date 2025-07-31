# 🧪 Cypress Test Automation – Project Overview

This project contains organized Cypress test examples meant to help understand how Cypress works and how to write functional end-to-end (E2E) tests efficiently.

## 🚀 What is Cypress?

Cypress is a powerful front-end testing tool built for modern web applications. It is especially useful for:

- End-to-end (E2E) testing
- Integration testing
- Unit testing (limited)

Unlike Selenium, Cypress runs directly in the browser, giving it native access to every object, DOM element, and event. This allows for faster and more reliable tests with easy debugging.

## 🎯 Project Purpose

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
navigate-cypress-test/
│
├── cypress/
│   └── e2e/
│       ├── 1-getting-started/           # (Reserved for future basic examples)
│       ├── 2-advanced-examples/         # (Reserved for future advanced usage)
│       └── 3-navigate-on-cypress/       # Current example folder
│           ├── navigate-to-docs.cy.js   # Cypress test file
│           └── README.md                # Documentation for this test
│
├── cypress.config.js                    # Cypress configuration
├── package.json                         # Project dependencies and scripts
├── package-lock.json                    # Lock file for reproducible installs
└── README.md                            # General documentation (this file)
```

---

## 🔗 Test Modules

### ✅ [Test 3 – Navigate on Cypress](./cypress/e2e/3-navigate-on-cypress/README.md)

This test covers basic navigation within Cypress using `cy.visit()` and asserts to verify the URL and page content.

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

3. Choose a test (e.g., from folder `3-navigate-on-cypress`) and run it.

---

