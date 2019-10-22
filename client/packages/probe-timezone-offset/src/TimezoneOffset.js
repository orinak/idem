const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

/**
 * Probe to get timezone offset
 *
 * @signature () => Future Error Trait
 *
 * @returns {Future}
 */

const probe = () => {
  return Future
    .resolve(new Date().getTimezoneOffset())
    .map(Trait.of)
}

// expose probe

module.exports = probe
