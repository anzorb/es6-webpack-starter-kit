var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.common.js');
var _ = require('lodash');
var config = require('./config.js');
var path = require('path');

process.env.BABEL_ENV = 'dev';

module.exports = _.extend(baseConfig, {
    devtool: 'eval-source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: config.demo,
                routes: {
                    '/dist': config.dist,
                    '/node_modules': './node_modules'
                }
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', path.join(config.dist, 'vendor.bundle.js'))
    ]
});
