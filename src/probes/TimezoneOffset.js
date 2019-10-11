/**
 * Get timezone offset
 *
 * @returns {number}
 */

function main () {
  return () => new Date().getTimezoneOffset()
}

module.exports = main
