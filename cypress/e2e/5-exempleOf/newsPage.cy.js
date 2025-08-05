// Define a test suite called "Exemple" where:
describe('Exemple of', () => {


    // Visit the Digi24 news page
    it('should visit the news page', () => {


        // Step 1: Visit a specific news article on Digi24's website
        cy.visit('https://www.digi24.ro/stiri/actualitate/trafic-intens-pe-podul-prieteniei-de-la-giurgiu-ce-rute-alternative-au-soferii-romani-care-merg-in-bulgaria-pentru-a-evita-aglomeratia-3356255');

        // Step 2: Handle cookie consent if the button is present
        cy.get('#onetrust-accept-btn-handler').click(); // Accept cookies if the button is present
    
        // Step 3: Assert that the URL contains '/stiri/' to verify we're on the correct section
        cy.url().should('include', '/stiri/');

    });
    
  
});
