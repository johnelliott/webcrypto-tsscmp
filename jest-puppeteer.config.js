// jest-puppeteer.config.js
module.exports = {
  launch: {
    dumpio: true,
    headless: process.env.HEADLESS !== 'false',
    args: ['--disable-web-security', '--no-sandbox']
  },
  server: {
    command: 'node fixture/static-server.js',
    port: 3003,
  },
}
