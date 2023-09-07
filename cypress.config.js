const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'u4pf4d',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
