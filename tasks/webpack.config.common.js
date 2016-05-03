var config = require('./config.js');
var path = require('path');

module.exports = {
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,
            loaders: ['eslint'],
        }],
        loaders: [{
            test: /\.jsx|.js$/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
        }],
    },
    entry: {
        app: config.entryPoint,
        vendor: ['react', 'react-dom']
    },
    output: {
        library: config.appName,
        filename: path.join(config.dist, config.appName + '.bundle.js')
    },
    resolve: {
        extensions: [
            '',
            '.js',
        ],
    },
};
