const { defineConfig } = require("cypress");



module.exports = defineConfig({

  e2e: {
    specPattern: "**/*.cy.js",
    reporter: "cypress-multi-reporters",
    screenshotOnRunFailure: true,
    video: false,
    projectId: 'xy9pnq',//128076ed-9868-4e98-9cef-98dd8b705d75,
    defaultCommandTimeout : 40000,
    pageLoadTimeout: 90000,
    followRedirect: false,
    retries : {
      openMode : 1,
      runMode : 0
    },
    setupNodeEvents(on, config) {

    }
  },

});
