const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/awesome' : '',
  rewrites() {
    return [
      { source: isProd ? '/awesome/:path*' : '_next/:path*', destination: isProd ? '/awesome/_next/:path*' : '/_next/:path*' }
    ]
  }
}