const FontDetector = require('font-detect')

// incomplete list of popular fonts
const FONTS = require('./fonts.json')

/**
 * Factory for probe to get (incomplete) list of available fonts
 *
 * @returns {Function}
 */

const factory = (opts = {}) => {
  const { fonts = FONTS } = opts

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

module.exports.fonts = FONTS
