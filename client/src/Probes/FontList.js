const FontDetector = require('font-detect')

// incomplete list of popular fonts
const FONT_LIST = [
  'Helvetica',
  'Lucida Grande',
  'Lucida Sans',
  'Tahoma',
  'Arial',
  'Geneva',
  'Monaco',
  'Verdana',
  'Microsoft Sans Serif',
  'Trebuchet MS',
  'Courier New',
  'Times New Roman',
  'Courier',
  'Lucida Bright',
  'Lucida Sans Typewriter',
  'URW Chancery L',
  'Comic Sans MS',
  'Georgia',
  'Palatino Linotype',
  'Lucida Sans Unicode',
  'Times',
  'Century Schoolbook L',
  'URW Gothic L',
  'Franklin Gothic Medium',
  'Lucida Console',
  'Impact',
  'URW Bookman L',
  'Helvetica Neue',
  'Nimbus Sans L',
  'URW Palladio L',
  'Nimbus Mono L',
  'Nimbus Roman No9 L',
  'Arial Black',
  'Sylfaen',
  'MV Boli',
  'Estrangelo Edessa',
  'DejaVu Sans',
  'Liberation Sans',
  'Hiragino Sans GB',
  'Source Han Sans CN Normal',
  'Microsoft YaHei',
  'Wenquanyi Micro Hei',
  'WenQuanYi Zen Hei',
  'ST Heiti',
  'SimHei',
  'WenQuanYi Zen Hei Sharp'
]

/**
 * Factory for probe to get (incomplete) list of available fonts
 *
 * @returns {Function}
 */

const factory = (opts = {}) => {
  const { fonts = FONT_LIST } = opts

  const compile = tbl => {
    const list = []

    for (let i = 0; i < tbl.length; i++) {
      if (tbl[i]) {
        list.push(fonts[i])
      }
    }

    return list
  }

  return function FontList () {
    const detector = new FontDetector()

    const detect = (resolve, reject) => {
      const callback = (err, res) =>
        err
          ? reject(err)
          : resolve(compile(res))

      detector.detect(fonts, callback)
    }

    return new Promise(detect)
  }
}

// expose factory

module.exports = factory

// expose base font names

module.exports.fonts = FONT_LIST
