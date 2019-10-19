const Trait = require('@pouk/idem-type-trait')

//

const NAME = 'UserAgent'

// helpers

const traitFrom = Trait.create(NAME)

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
      .then(traitFrom)
  }

  return UserAgent
}

// expose factory

module.exports = factory
