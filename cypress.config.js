const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cypress.io',

    chromeWebSecurity: false, // to allow cross-origin requests

    experimentalOriginDependencies: true,

    setupNodeEvents(on, config) {
      // plugins - we don't use any for now
    }
  }
});
