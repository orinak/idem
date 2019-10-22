const Trait = require('@pouk/idem-type-trait')

/**
 * Factory for probe to get User Agent
 *
 * @returns {Function}
 */

const factory = () => {
  function UserAgent () {
    const value = window.navigator.userAgent

    return Promise
      .resolve(value)
      .then(Trait.of)
  }

  return UserAgent
}

// expose factory

module.exports = factory
