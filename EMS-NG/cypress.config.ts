import { defineConfig } from "cypress";

export default defineConfig({
  // videosFolder: '',
  // screenshotsFolder:'',
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    baseUrl: 'http://localhost:4200',

    setupNodeEvents(on, config) {
      
    },
  }
});
