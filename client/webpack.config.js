const Path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const SRC_PATH = Path.resolve(__dirname, 'index.js')
const DIST_DIR = Path.resolve(__dirname, 'dist')
const DEMO_TPL = Path.resolve(__dirname, 'assets/demo.html')

const BUILD_MODE = 'development'

module.exports = {
  mode: BUILD_MODE,
  entry: SRC_PATH,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST_DIR,
    stats: {
      children: false, // Hide children information
      maxModules: 0 // Set the maximum number of modules to be shown
    }
  },
  output: {
    filename: 'Idem.js',
    path: DIST_DIR,
    library: 'Idem'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: DEMO_TPL
    })
  ]
}
