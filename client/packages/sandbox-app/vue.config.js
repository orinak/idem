module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/idem/'
    : '/',
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  }
}
