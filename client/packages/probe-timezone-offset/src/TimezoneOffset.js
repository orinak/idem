const Trait = require('@pouk/idem-type-trait')

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
      .then(Trait.of)
  }

  return TimezoneOffset
}

// expose factory

module.exports = factory
