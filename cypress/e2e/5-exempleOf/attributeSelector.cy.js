// Define a test suite called "Examples"
describe('Examples of', () => {

  it('Verifies the Google search box is visible', () => {
    // Step 1: Visit Google (force English to keep DOM stable)
    cy.visit('https://www.google.com/?hl=en');

    // Step 2: Accept cookies if the button is present (EU consent)
    cy.get('body').then($body => {
      if ($body.find('#L2AGLb').length) {
        cy.get('#L2AGLb').click();
      }
    });

    // Step 3: Wait for the search box (it’s a <textarea>, not <input>)
    cy.get('textarea[name="q"]', { timeout: 10000 })
      .should('exist')
      .and('be.visible');
  });

});
