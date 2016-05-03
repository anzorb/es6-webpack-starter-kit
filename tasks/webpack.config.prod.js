var webpack = require('webpack');
var baseConfig = require('./webpack.config.common.js');
var _ = require('lodash');
process.env.BABEL_ENV = 'prod';
var config = require('./config.js');
var path = require('path');

module.exports = _.extend(baseConfig, {
    devtool: 'source-map',
    output: {
        library: config.appName,
        filename: path.join(config.dist, config.appName + '.bundle.min.js')
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', path.join(config.dist, 'vendor.bundle.min.js')),
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false },
        }),
    ]
});
