import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://angular2-5dafvog5ta-uc.a.run.app',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
});
