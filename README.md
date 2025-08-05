[![Cypress](https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-dark.png)](https://www.cypress.io/)

# ✅ Cypress Test Project – LinkedIn Login Automation

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-4fc08d.svg)](https://www.cypress.io/)

This project demonstrates an **automated login test for LinkedIn** using [Cypress](https://www.cypress.io/). It simulates a real user logging into their account and validates successful login.

---

## Purpose of the Test

The goal is to verify the ability to:

- Access the LinkedIn homepage
- Accept cookies (if the popup appears)
- Navigate to the Sign In page
- Enter valid credentials securely
- Submit the login form
- Handle optional follow-up buttons
- Assert that the user is successfully logged in

---

## What Is Being Tested?

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Visit LinkedIn homepage | Page loads successfully |
| 2 | Accept cookies | Cookie banner disappears |
| 3 | Click "Sign In" | Login form becomes visible |
| 4 | Enter credentials | Inputs accept values |
| 5 | Submit login form | User is redirected to profile |
| 6 | Optional button (.secondary-action-new) | Clicks if available |
| 7 | Check profile name | Element `.profile-card-name` is visible |

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Test

Open Cypress in GUI mode:

```bash
npm run cy:open
```

Or run in headless mode:

```bash
npm run cy:run
```

---

## Sample Test File – `loginLinkedIn.cy.js`

```javascript
describe('LinkedIn test', () => {
  it('Logs into LinkedIn account', () => {

    Cypress.on('uncaught:exception', () => false);

    cy.visit('https://www.linkedin.com/');
    cy.get('[action-type="ACCEPT"]').click();
    cy.contains('a,button', /sign in/i, { timeout: 15000 }).click();

    cy.get('#username').invoke('attr', 'type', 'password');
    cy.get('#password').invoke('attr', 'type', 'password');

    cy.get('#username').type(Cypress.env('linkedin_user'), { log: false });
    cy.get('#password').type(Cypress.env('linkedin_pass'), { log: false });

    cy.get('.btn__primary--large').click();

    cy.get('body').then($body => {
      if ($body.find('.secondary-action-new').length > 0) {
        cy.get('.secondary-action-new').click();
      }
    });

    cy.get('.profile-card-name', { timeout: 10000 }).should('be.visible');
  });
});
```

---

## Using `cypress.env.json`

To keep your credentials secure and out of your test code, you should store them in the `cypress.env.json` file.

### Example:

```json
{
  "linkedin_user": "your_email@example.com",
  "linkedin_pass": "your_secure_password"
}
```

This way, the test file can access them via:

```js
Cypress.env('linkedin_user')
Cypress.env('linkedin_pass')
```

⚠️ **Never commit `cypress.env.json` to a public repository.**

---

## Why This Test Is Useful

This test helps you:

- Practice form handling and login flows with real-world services
- Learn to use environment variables securely
- Handle conditional elements (buttons that may or may not appear)
- Verify login success with DOM assertions

---
