const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getNavigatorMimeTypes = () => window.navigator.mimeTypes

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
 * @returns {Future<Error|Trait>}
 */

function MimeTypes () {
  return Future
    .attempt(getNavigatorMimeTypes)
    .map(parse)
    .map(Trait.of)
}

// expose probe

module.exports = MimeTypes
