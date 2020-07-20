var ManifestPlugin = require('webpack-manifest-plugin');

const manifestPlugin = () =>
    new ManifestPlugin({
        fileName: 'webapp-manifest.json',
        basePath: '/src/',
        seed: {
          name: 'Stats Manifest'
        }
      })

module.exports = {manifestPlugin}