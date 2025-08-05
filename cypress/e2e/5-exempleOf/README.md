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

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Open the Cypress Test Runner

```bash
npm run cy:open
```

Or run the tests headlessly:

```bash
npm run cy:run
```

---

## Sample Test Examples

### `constantAndInput.cy.js`
```javascript
describe('Exemple of', () => {
  it('Checks a value inside an input field', () => {
    cy.visit('https://google.com');
    cy.get('body').then($body => {
      if ($body.find('#L2AGLb').length) {
        cy.get('#L2AGLb').click();
      }
    });
    cy.get('.gLFyf').type('123').should('have.value', '123');
  });
});
```

### `attributeSelector.cy.js`
```javascript
describe('Examples of', () => {
  it('Verifies the Google search box is visible', () => {
    cy.visit('https://www.google.com/?hl=en');
    cy.get('body').then($body => {
      if ($body.find('#L2AGLb').length) {
        cy.get('#L2AGLb').click();
      }
    });
    cy.get('textarea[name="q"]', { timeout: 10000 })
      .should('exist')
      .and('be.visible');
  });
});
```

### `checkClass.cy.js`
```javascript
describe('Exemple of', () => {
  it('Checks if an element has a specific class', () => {
    cy.visit('https://bookzone.ro/');
    cy.get('button[title="Cauta in site"]')
      .should('have.class', 'nav__search-go');
  });
});
```

### `10seconds.cy.js`
```javascript
describe('Exemple of', () => {
  it('wait 10 seconds', () => {
    cy.visit('https://google.com');
    cy.get('#L2AGLb').click();
    cy.wait(10000);
    cy.get('.gLFyf').type('10 seconds have passed');
  });
});
```

### `screenshot.cy.js`
```javascript
describe('Exemple of', () => {
  it('Takes a screenshot of the page', () => {
    cy.visit('https://google.com');
    cy.screenshot();
  });
});
```

### `newsPage.cy.js`
```javascript
describe('Exemple of', () => {
  it('should visit the news page', () => {
    cy.visit('https://www.digi24.ro/stiri/actualitate/trafic-intens-pe-podul-prieteniei-de-la-giurgiu-ce-rute-alternative-au-soferii-romani-care-merg-in-bulgaria-pentru-a-evita-aglomeratia-3356255');
    cy.get('#onetrust-accept-btn-handler').click();
    cy.url().should('include', '/stiri/');
  });
});
```

---

## Why These Tests Are Useful

These examples help you:

- Understand Cypress syntax and command chaining
- Practice real-world page interactions
- Work with cookie consent modals
- Test both static and dynamic content
- Write maintainable and reliable test scripts

---
