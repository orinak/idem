const R = require('ramda')

const Trait = require('./Trait')

function create (options, value) {
  return new Trait(value, options)
}

// expose curried

module.exports = R.curry(create)
