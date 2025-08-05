describe('LinkedIn test', () => {

  it('Logs into LinkedIn account', () => {

    // Prevent Cypress from failing on uncaught exceptions from the app
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    // Visit the LinkedIn homepage
    cy.visit('https://www.linkedin.com/');

    // Accept cookies if the accept button exists
    cy.get('[action-type="ACCEPT"]').click();

    // Click on the "Sign in" button using a text-based selector (more stable)
    cy.contains('a,button', /sign in/i, { timeout: 15000 }).click();

    // Mask the username and password inputs for better visual clarity (optional)
    cy.get('#username').invoke('attr', 'type', 'password');
    cy.get('#password').invoke('attr', 'type', 'password');

    // Enter login credentials from environment variables, hidden from logs
    cy.get('#username').type(Cypress.env('linkedin_user'), { log: false });
    cy.get('#password').type(Cypress.env('linkedin_pass'), { log: false });

    // Submit the login form
    cy.get('.btn__primary--large').click();

    // Optional: Click on the secondary action button only if it exists
    cy.get('body').then($body => {
      if ($body.find('.secondary-action-new').length > 0) {
        cy.get('.secondary-action-new').click();
      }
    });

    // Assert that login was successful
    cy.get('.profile-card-name', { timeout: 10000 }).should('be.visible');
  });

});
