const R = require('ramda')

const Trait = require('./Trait')

function create (key, value) {
  return new Trait(key, value)
}

// expose curried

module.exports = R.curry(create)
