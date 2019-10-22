const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const parse = mimeTypeArray => {
  const it = (acc, mimeType) => {
    const { type } = mimeType
    return acc.concat([type])
  }

  return Array
    .from(mimeTypeArray)
    .reduce(it, [])
}

/**
 * Probe to get (incomplete) list of supported MIME Types
 *
 * @signature () => Future Error Trait
 *
 * @returns {Future}
 */

const probe = () => {
  return Future
    .resolve(window.navigator.mimeTypes)
    .map(parse)
    .map(Trait.of)
}

// expose probe

module.exports = probe
