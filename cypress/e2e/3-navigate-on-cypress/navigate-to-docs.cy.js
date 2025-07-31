describe('Navigate to Docs and verify element on a different domain', () => {

  it('Visits the site and accesses the Docs page', () => {

    cy.visit('https://www.cypress.io/');

    // Accept cookies if the button appears
    cy.get('button:contains("Accept All")', { timeout: 10000 }).then(($btn) => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click();
      }
    });

    // Get the Docs link and navigate directly to it using cy.origin
    cy.get('#dropdownDocs')
      .should('have.attr', 'href')
      .then((href) => {
        cy.origin('https://docs.cypress.io', () => {
          cy.visit('/app/get-started/why-cypress');

        // Verify that the Docs navbar logo is visible  
          cy.get('.navbar__brand').should('exist');
        });
      });

  });
  
});
