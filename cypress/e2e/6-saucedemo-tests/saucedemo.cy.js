describe('SauceDemo - End to End Test', () => {

  it('should complete a full purchase flow', () => {

    // Step 1: Visit the login page
    cy.visit('https://www.saucedemo.com/');

    // Step 2: Login with valid credentials
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Step 3: Verify login was successful by checking the page title
    cy.get('.title').should('have.text', 'Products');

    // Step 4: Add a product to the cart (first one)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Step 5: Go to the cart
    cy.get('.shopping_cart_link').click();

    // Step 6: Verify the product is in the cart
    cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Backpack');

    // Step 7: Click Checkout
    cy.get('[data-test="checkout"]').click();

    // Step 8: Fill in user information
    cy.get('[data-test="firstName"]').type('Oliv');
    cy.get('[data-test="lastName"]').type('Tester');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Step 9: Finish the order
    cy.get('[data-test="finish"]').click();

    // Step 10: Verify the confirmation message
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');

  });

});
