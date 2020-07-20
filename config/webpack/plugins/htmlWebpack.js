const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = () => 
    new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        favicon: 'public/favicon.ico'
    })

module.exports = {htmlWebpackPlugin};