const dotenv = require('dotenv');

dotenv.config();

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        login: [
            './test/specs/login.js',
        ],
        account: [
            './test/specs/account.js',
        ],
        bank_account: [
            './test/specs/bank_account.js',
        ],
        transaction: [
            './test/specs/transaction.js',
        ],
    },
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'error',

    bail: 0,

    baseUrl: 'http://localhost:3000/',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
