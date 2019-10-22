const Future = require('fluture')

const FontDetector = require('font-detect')

const Trait = require('@pouk/idem-type-trait')

/**
 * incomplete list of popular fonts
 */

const FONTS = require('./fonts.json')

/**
 * Probe to get (incomplete) list of available fonts
 *
 * @signature () => Future Error Trait
 *
 * @returns {Future}
 */

const probe = (opts = {}) => {
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

  const detect = done => {
    const detector = new FontDetector()
    return detector.detect(fonts, done)
  }

  return Future
    .node(detect)
    .map(parse)
    .map(Trait.of)
}

// expose probe

module.exports = probe

// expose base font names

module.exports.fonts = FONTS
