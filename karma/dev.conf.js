var _ = require('lodash');

module.exports = function(config) {
    var configObject = {
        reporters: ['progress'],
        singleRun: false,
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            debug: true,
            module: {
                preLoaders: [{
                    test: /\.js$/,
                    exclude: /(bower_components|node_modules)/,
                    loader: 'eslint',
                }],
                loaders: [{
                    test: /\.js$/,
                    exclude: /(bower_components|node_modules)/,
                    loader: 'babel',
                }]
            },
        },
        logLevel: config.LOG_INFO
    };
    config.set(_.extend(configObject, require('./common.js')));
};
