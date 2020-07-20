const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const cleanWebpackPlugin = () => 
    new CleanWebpackPlugin({
        // Simulate the removal of files
        dry: true,
        // Write Logs to Console
        verbose: true,
    })

module.exports = {cleanWebpackPlugin};