const TerserPlugin = require('terser-webpack-plugin');

const optimization = () => ({
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                // cacheGroupKey here is `commons` as the key of the cacheGroup
                name(module, chunks, cacheGroupKey) {
                    const moduleFileName = module
                        .identifier()
                        .split('/')
                        .reduceRight((item) => item)
                    const allChunksNames = chunks.map((item) => item.name).join('~')
                    return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`
                },
                chunks: 'all'
            }
        }
    },
    runtimeChunk: true,
    minimize: true,
    minimizer: [new TerserPlugin({
        cache: true
    })]
})

module.exports = {optimization};