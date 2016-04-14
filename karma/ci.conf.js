var _ = require('lodash');
var path = require('path');

module.exports = function(config) {
    var configObject = {
        reporters: ['progress', 'coverage', 'junit'],
        coverageReporter: {
            dir: '../coverage',
            type: 'cobertura',
            includeAllSources: true
        },
        singleRun: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            debug: true,
            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /(bower_components|node_modules)/,
                    loader: 'babel',
                }]
            },
        },
        // webpack: {
        //     //cache: true,
        //     //devtool: 'inline-source-map',
        //     //debug: true,
        //     module: {
        //         // preLoaders: [{
        //         //     test: /spec\.js$/,
        //         //     include: /src/,
        //         //     exclude: /(bower_components|node_modules)/,
        //         //     loader: 'babel',
        //         //     query: {
        //         //         cacheDirectory: true,
        //         //     },
        //         // }, {
        //         //     test: /\.js?$/,
        //         //     include: /src/,
        //         //     exclude: /(node_modules|bower_components|spec)/,
        //         //     loader: 'babel-istanbul',
        //         //     query: {
        //         //         cacheDirectory: true,
        //         //     },
        //         // }, ],
        //         loaders: [{
        //             test: /\.js$/,
        //             include: path.resolve(__dirname, '../src'),
        //             exclude: /(bower_components|node_modules)/,
        //             loader: 'babel',
        //             // query: {
        //             //     cacheDirectory: true,
        //             // },
        //         }, ],
        //     },
        // },
        junitReporter: {
            outputDir: 'results',
            outputFile: 'test_results.xml',
            suite: 'es6-webpack-starter-kit'
        }
    };
    config.set(_.extend(require('./common.js'), configObject));
};
