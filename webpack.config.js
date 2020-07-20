module.exports = () => {
    const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
    return require(`./config/webpack/webpack.config.${env}.js`)
}