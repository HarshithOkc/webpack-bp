const webpack = require('webpack');
const path = require('path');
const { htmlWebpackPlugin } = require('./plugins/htmlWebpack');
const { cleanWebpackPlugin } = require('./plugins/cleanWebpack');
const { manifestPlugin } = require('./plugins/manifest');
const { compressWebpack } = require('./plugins/compression');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css)/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
                use: { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'assets/img' } }
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                type: "javascript/auto"
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './../../dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        compress: true,
        port: 8090,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        htmlWebpackPlugin(),
        cleanWebpackPlugin(),
        manifestPlugin(),
        compressWebpack(),
        new webpack.DefinePlugin({
            // Dynamically access local environment variables based on the environment
            ENV: JSON.stringify(require(`../keys/${process.env.NODE_ENV==='production' ? 'prod.js' : 'dev.js'}`))
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
        }),
    ]
}