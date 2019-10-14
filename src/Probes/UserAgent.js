/**
 * Factory for probe to get User Agent
 *
 * @returns {Function}
 */

const factory = () => {
  function UserAgent () {
    return window.navigator.userAgent
  }

  return UserAgent
}

// expose factory

module.exports = factory
