const Trait = require('@pouk/idem-type-trait')

//

const NAME = 'TimezoneOffset'

// helpers

const traitFrom = Trait.create(NAME)

/**
 * Factory for probe to get timezone offset
 *
 * @returns {Function}
 */

const factory = () => {
  function TimezoneOffset () {
    const value = new Date().getTimezoneOffset()

    return Promise
      .resolve(value)
      .then(traitFrom)
  }

  return TimezoneOffset
}

// expose factory

module.exports = factory
