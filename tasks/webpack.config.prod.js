var webpack = require('webpack');
var baseConfig = require('./webpack.config.common.js');
var _ = require('lodash');
process.env.BABEL_ENV = 'prod';

module.exports = _.extend(baseConfig, {
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false },
        }),
    ]
});
