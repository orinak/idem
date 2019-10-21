const Trait = require('@pouk/idem-type-trait')

//

const NAME = 'MimeTypes'

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

const serialize = plugins => {
  return plugins.join(', ')
}

const traitFrom = value => Trait(NAME, value, serialize)

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
      .then(traitFrom)
  }

  return MimeTypes
}

// expose factory

module.exports = factory
