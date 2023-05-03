const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  // ☝️ load the built-in Redwood Jest configuration
  setupFiles: ['./web/setupMock.js'],
}

module.exports = config
