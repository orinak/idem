/**
 * Factory for probe to get timezone offset
 *
 * @returns {Function}
 */

const factory = () => {
  function TimezoneOffset () {
    return new Date().getTimezoneOffset()
  }

  return TimezoneOffset
}

// expose factory

module.exports = factory
