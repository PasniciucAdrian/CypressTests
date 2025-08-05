// Define a test suite called "Exemple"
describe('Exemple of', () => {

  // Test using constant and input value verification
  it('Checks a value inside an input field', () => {

    // Step 1: Visit google.com
    cy.visit('https://google.com');

    // Step 2: Accept cookies if present
    cy.get('body').then($body => {
      if ($body.find('#L2AGLb').length) {
        cy.get('#L2AGLb').click();
      }
    });

    // Step 3: Type text directly into the input (click not needed)
    cy.get('.gLFyf').type('123').should('have.value', '123');

  });

});
