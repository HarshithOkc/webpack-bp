const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { optimization } = require('./plugins/optimization');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    optimization: optimization(),
});