const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getTimezoneOffset = () => new Date().getTimezoneOffset()

/**
 * Probe to get timezone offset
 *
 * @returns {Future<Error|Trait>}
 */

function TimezoneOffset () {
  return Future
    .attempt(getTimezoneOffset)
    .map(Trait.GenericTrait)
}

// expose probe

module.exports = TimezoneOffset
