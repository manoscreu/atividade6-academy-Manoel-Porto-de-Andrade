const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    env: {
      TAGS: 'not @ignore'
    },
    specPattern: "cypress/e2e/**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
