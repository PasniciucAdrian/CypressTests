# ✅ Cypress Test Project – SauceDemo E2E (Login, Cart, Checkout)

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-4fc08d.svg)](https://www.cypress.io/)

This folder contains an end‑to‑end (E2E) Cypress flow for **https://www.saucedemo.com/** that covers login, adding to cart, checkout, and order confirmation. The scope aligns with the provided assignment (Tema Automation).

---

## Purpose of the Tests

The main goals are to:

- Validate **invalid and valid authentication** (error handling and success state)
- Verify **logout** and **side-menu open/close**
- Ensure users can **add** and **remove** products from the cart
- Complete a full **checkout** flow and assert the **success message**
- Open a **product details page** and navigate **Back to products**

> ℹ️ The current spec demonstrates the complete purchase flow. You can keep it as a single E2E test or split it into smaller tests (recommended for maintainability).

---

## What Is Being Tested?

| Scenario | Description |
|---------|-------------|
| Invalid login | Enter wrong credentials and assert the error message (to be added) |
| Valid login | Log in with `standard_user` / `secret_sauce` and assert landing on **Products** |
| Open/close side menu | Toggle the hamburger menu (to be added) |
| Add product to cart | Add **Sauce Labs Backpack** and verify it in the cart |
| Remove product from cart | Remove item and validate empty cart or absence (to be added) |
| Checkout flow | Provide user info, continue, and **Finish** order |
| Product details page | Open a product details page (to be added) |
| Back to products | Use the **Back to products** button to return to listing (to be added) |
| Logout | Log out from the side menu (to be added) |

---


## Why This Test Is Useful

- Exercises a realistic e‑commerce path: **login → add to cart → checkout → confirmation**
- Provides reliable **assertions** on each critical step
- Can be expanded to cover all assignment points (invalid login, details page, back button, logout)

---
