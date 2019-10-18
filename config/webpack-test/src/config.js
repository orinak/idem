const Path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_MODE = 'development'

const htmlPlugin = new HtmlWebpackPlugin({
  template: Path.resolve(__dirname, 'template.html')
})

module.exports = {
  mode: BUILD_MODE,
  entry: './index.js',
  output: {
    library: 'IdemTestLibrary',
    libraryTarget: 'umd'
  },
  plugins: [
    htmlPlugin
  ]
}
