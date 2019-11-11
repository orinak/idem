const Future = require('fluture')

// TODO: implement locally
const FontDetector = require('font-detect')

const Trait = require('@pouk/idem-type-trait')

/**
 * incomplete list of popular fonts
 */

const FONTS = require('./fonts.json')

/**
 * Probe to get (incomplete) list of available fonts
 *
 * @param {Array<String>} fonts - fonts to check
 *
 * @returns {Future<Error|Trait>}
 */

function SystemFonts (opts = {}) {
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

  const toTrait = fontList => Trait.SystemFonts(fontList, false)

  return Future
    .node(detect)
    .map(parse)
    .map(toTrait)
}

// expose probe

module.exports = SystemFonts
