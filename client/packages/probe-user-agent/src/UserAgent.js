const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getUserAgent = () => window.navigator.userAgent

/**
 * Probe to get User Agent
 *
 * @returns {Future<Trait>}
 */

function UserAgent () {
  return Future
    .attempt(getUserAgent)
    .fold(Trait.empty, Trait.GenericTrait)
}

// expose probe

module.exports = UserAgent
