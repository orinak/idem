const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getUserAgent = () => window.navigator.userAgent

/**
 * Probe to get User Agent
 *
 * @returns {Future<Error|Trait>}
 */

function UserAgent () {
  return Future
    .attempt(getUserAgent)
    .map(Trait.of)
}

// expose probe

module.exports = UserAgent
