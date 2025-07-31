const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cypress.io',

    experimentalOriginDependencies: true,


    setupNodeEvents(on, config) {
      // plugins - we don't use any for now
    }
  }
});
