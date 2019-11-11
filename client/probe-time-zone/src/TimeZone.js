const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getTimeZone = () => {
  const offset = new Date().getTimezoneOffset()
  const name = Intl.DateTimeFormat().resolvedOptions().timeZone

  return {
    offset,
    name
  }
}

/**
 * Probe to get timezone offset
 *
 * @returns {Future<Error|Trait>}
 */

function TimeZone () {
  return Future
    .attempt(getTimeZone)
    .map(Trait.TimeZone.from)
}

// expose probe

module.exports = TimeZone
