process.env.BABEL_ENV = 'karma';
var path = require('path');

module.exports = {
    basePath: '',
    frameworks: ['jasmine', 'es6-shim'],
    plugins: [
        'karma-phantomjs-launcher',
        'karma-es6-shim',
        'karma-jasmine',
        'karma-webpack',
        'karma-coverage',
        'karma-junit-reporter',
        'karma-chrome-launcher',
        'karma-sourcemap-loader'
    ],
    files: [
        '../src/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
        '../src/**/*.js': ['webpack', 'sourcemap']
    },
    browsers: ['Chrome', 'Chrome_without_security'],
    customLaunchers: {
        Chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
        }
    },
    port: 9876,
    colors: true,
    browsers: ['Chrome']
};
