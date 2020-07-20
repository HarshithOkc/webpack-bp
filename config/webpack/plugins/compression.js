const CompressionPlugin = require('compression-webpack-plugin');

const compressWebpack = () => 
    new CompressionPlugin({
        cache: true,
        test: /\.(js|css|html|svg|png|jpg|ico)$/,
        filename: '[path].gz[query]',
        minRatio: 0.8,
        threshold: 10240,
        algorithm: 'gzip',
    })

module.exports = { compressWebpack };