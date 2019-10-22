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
 * Factory for probe to get (incomplete) list of supported MIME Types
 *
 * @returns {Function}
 */

const factory = () => {
  function MimeTypes () {
    const { navigator } = window

    return Promise
      .resolve(navigator.mimeTypes)
      .then(parse)
      .then(Trait.of)
  }

  return MimeTypes
}

// expose factory

module.exports = factory
