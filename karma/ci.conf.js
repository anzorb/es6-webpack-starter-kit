var _ = require('lodash');
var path = require('path');

module.exports = function(config) {
    var configObject = {
        reporters: ['progress', 'coverage', 'junit'],
        coverageReporter: {
            dir: '../coverage',
            includeAllSources: true,
            reporters: [{
                type: 'cobertura'
            }, {
                type: 'html'
            }]
        },
        singleRun: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        files: [
            '../test/index.js'
        ],
        preprocessors: {
            '../test/index.js': ['webpack', 'sourcemap']
        },
        isparta: {
            babel: {
                plugins: ['rewire']
            }
        },
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            debug: true,
            module: {
                preLoaders: [{
                    test: /\.js$/,
                    exclude: /(spec|third-party|node_modules|test)/,
                    loader: 'isparta'
                }],
                loaders: [{
                    test: /\.js$/,
                    exclude: /(bower_components|node_modules)/,
                    loader: 'babel'
                }]
            },
            node: {
                fs: 'empty'
            }
        },
        junitReporter: {
            outputDir: 'results',
            outputFile: 'test_results.xml',
            suite: 'es6-webpack-starter-kit'
        }
    };
    config.set(_.extend(require('./common.js'), configObject));
};
