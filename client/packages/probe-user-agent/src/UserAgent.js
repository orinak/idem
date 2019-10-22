const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

/**
 * Probe to get User Agent
 *
 * @signature () => Future Error Trait
 *
 * @returns {Future}
 */

const probe = () => {
  return Future
    .resolve(window.navigator.userAgent)
    .map(Trait.of)
}

// expose probe

module.exports = probe
