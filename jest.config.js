module.exports = {
  preset: 'jest-puppeteer',
  "globalSetup": "./fixture/setup.js",
  "globalTeardown": "./fixture/teardown.js"
};
