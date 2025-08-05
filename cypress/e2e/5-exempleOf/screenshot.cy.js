// Define a test suite called "Exemple" where:
describe('Exemple of', () => {


    // Page screenshot test
    it('Takes a screenshot of the page', () => {

        // Step 1: Visit google.com
        cy.visit('https://google.com');

        // Step 2: Take a screenshot of the page
        cy.screenshot();

    });
    

});
