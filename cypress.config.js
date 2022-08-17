const { defineConfig } = require('cypress');



// Populate process.env with values from .env file


module.exports = defineConfig({
  env: {

    baseUrl: 'http://localhost:4200'
  },

  chromeWebSecurity: false,
  retries: { runMode: 2, openMode: 1 },
  screenshotOnRunFailure: true,
  video: false,
  //experimentalSessionAndOrigin: true,


  defaultCommandTimeout: 20000,



  viewportWidth: 1000,
  viewportHeight: 600,

  e2e: {


    specPattern:
      ["cypress/e2e/user/festivals_api.js",
      ],

    supportFile: 'cypress/support/index.js'
  },
});


