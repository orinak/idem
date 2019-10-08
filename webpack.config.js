const Path = require('path')

const SRC_PATH = Path.resolve(__dirname, 'src')
const DIST_DIR = Path.resolve(__dirname, 'dist')

module.exports = {
  entry: SRC_PATH,
  output: {
    filename: 'main.js',
    path: DIST_DIR
  }
}
