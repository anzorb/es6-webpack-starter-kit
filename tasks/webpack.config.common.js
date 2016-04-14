var config = require('./config.js');

module.exports = {
    module: {
        preLoaders: [{
            test: /(\.js)$/,
            exclude: /(bower_components|node_modules)/,
            loaders: ['eslint'],
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
        }],
    },
    output: {
        libraryTarget: 'umd',
        library: config.appName,
    },
    resolve: {
        extensions: [
            '',
            '.js',
        ],
    },
};
