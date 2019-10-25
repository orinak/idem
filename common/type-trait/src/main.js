const R = require('ramda')

const Trait = require('./Trait')
const variants = require('./variants')

// static methods

/**
 * For fantasy monoid
 *
 * @returns {Trait.Nothing}
 */

function empty () {
  return Trait.Nothing
}

function stringify (trait) {
  const pluck = variant => () => variant.stringify(trait)
  const cases = R.map(pluck, variants)

  return trait.cata(cases)
}

// prototype methods

Trait.prototype.toString = function () {
  return stringify(this)
}

// expose

module.exports = Object.assign(Trait, variants)

module.exports.empty = empty
module.exports['fantasy-land/empty'] = empty

module.exports.stringify = stringify
