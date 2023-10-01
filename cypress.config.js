const { defineConfig } = require("cypress");

module.exports = defineConfig({
  failOnStatusCode: false,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 15000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },


  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
  },
})

