# ✅ Cypress Test Project – UI Interactions and Page Assertions

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-4fc08d.svg)](https://www.cypress.io/)

This project demonstrates multiple **UI-based tests** using [Cypress](https://www.cypress.io/). It covers common use cases such as input validation, page verification, DOM inspection, screenshot capture, and waiting for actions.

---

## Purpose of the Tests

The main goals are to:

- Interact with real web pages (Google, Bookzone, Digi24)
- Demonstrate common Cypress commands and patterns
- Learn how to deal with cookie banners
- Validate classes, attributes, and field values
- Use wait commands and page assertions
- Take full-page screenshots

---

## What Is Being Tested?

| Test File | Description |
|-----------|-------------|
| `attributeSelector.cy.js` | Checks visibility of the Google search input using attribute selectors |
| `checkClass.cy.js` | Verifies that a button on Bookzone has a specific class |
| `constantAndInput.cy.js` | Types a value into Google search and verifies it |
| `10seconds.cy.js` | Waits 10 seconds before typing into Google search |
| `screenshot.cy.js` | Takes a screenshot of the Google homepage |
| `newsPage.cy.js` | Visits a Digi24 news article, accepts cookies, and validates the URL path |

---

## Why These Tests Are Useful

These examples help you:

- Understand Cypress syntax and command chaining
- Practice real-world page interactions
- Work with cookie consent modals
- Test both static and dynamic content
- Write maintainable and reliable test scripts

---
