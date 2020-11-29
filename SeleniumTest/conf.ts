// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['MyFirstTest.js'],

    capabilities: {
      browserName: 'chrome'
    },


    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  }