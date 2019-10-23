const R = require('ramda')

const Trait = require('./Trait')
const variants = require('./variants')

// static methods

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

module.exports.stringify = stringify
