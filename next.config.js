const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://machmudeffendi.github.io/awesome' : '',
}