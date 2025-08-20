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

## Using `cypress.env.json`

To keep your credentials secure and out of your test code, you should store them in the `cypress.env.json` file.

### Example:

```json
{
  "linkedin_user": "your_email@example.com",
  "linkedin_pass": "your_secure_password"
}
```


⚠️ Never commit `cypress.env.json` to a public repository.**

---

## Why This Test Is Useful

This test helps you:

- Practice form handling and login flows with real-world services
- Learn to use environment variables securely
- Handle conditional elements (buttons that may or may not appear)
- Verify login success with DOM assertions

---
