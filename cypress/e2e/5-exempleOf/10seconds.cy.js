// Define a test suite called "Exemple" where:
describe('Exemple of', () => {


    // Wait for 10 seconds
    it ('wait 10 seconds', () => {

        // Step 1: Visit google.com
        cy.visit('https://google.com');

        // Step 2: Accept cookies if the button is present
        cy.get('#L2AGLb').click(); 

        // Step 3: Wait for 10 seconds
        cy.wait(10000); 
        cy.get('.gLFyf').type('10 seconds have passed')

    });

  
});
