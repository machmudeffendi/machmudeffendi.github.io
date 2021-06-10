const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: '',
  assetPrefix: '',
  rewrites() {
    return [
      { source: '/_next/:path*', destination: '/awesome/:path*' }
    ]
  }
}