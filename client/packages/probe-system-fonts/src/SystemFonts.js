const FontDetector = require('font-detect')

const Trait = require('@pouk/idem-type-trait')

// settings

const NAME = 'SystemFonts'

/**
 * incomplete list of popular fonts
 */

const FONTS = require('./fonts.json')

// helpers

const traitFrom = Trait.create(NAME)

/**
 * Factory for probe to get (incomplete) list of available fonts
 *
 * @returns {Function}
 */

const factory = (opts = {}) => {
  const { fonts = FONTS } = opts

  const parse = tbl => {
    const list = []

    for (let i = 0; i < tbl.length; i++) {
      if (tbl[i]) {
        list.push(fonts[i])
      }
    }

    return list
  }

  function SystemFonts () {
    const detector = new FontDetector()

    const detect = (resolve, reject) => {
      const callback = (err, res) =>
        err
          ? reject(err)
          : resolve(res)

      detector.detect(fonts, callback)
    }

    return new Promise(detect)
      .then(parse)
      .then(traitFrom)
  }

  return SystemFonts
}

// expose factory

module.exports = factory

// expose base font names

module.exports.fonts = FONTS
