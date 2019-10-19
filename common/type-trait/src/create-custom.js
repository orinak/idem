const R = require('ramda')

const Trait = require('./Trait')

function create (key, value, serialize) {
  return new Trait(key, value, serialize)
}

// expose curried

module.exports = R.curry(create)
