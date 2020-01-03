// global-setup.js
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')
const ts = require('typescript');
const bundleWorker = require('./bundle.js')

module.exports = async function globalSetup(globalConfig) {
  await setupPuppeteer(globalConfig)
  await bundleWorker()
}
