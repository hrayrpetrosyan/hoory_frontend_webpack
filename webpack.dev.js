/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].bundle.js',
    },
});
