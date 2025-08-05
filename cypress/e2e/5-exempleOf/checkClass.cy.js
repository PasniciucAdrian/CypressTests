// Define a test suite called "Exemple"
describe('Exemple of', () => {
    

  // Test to check if a class exists on a selected element
  it('Checks if an element has a specific class', () => {

    // Step 1: Visit bookzone.ro
    cy.visit('https://bookzone.ro/');

    // Step 2: Verify that the search button has the class 'nav__search-go'
    cy.get('button[title="Cauta in site"]')
      .should('have.class', 'nav__search-go');

  });


});
