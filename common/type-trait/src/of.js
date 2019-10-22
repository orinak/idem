const Trait = require('./Trait')

function of (value) {
  return new Trait(value)
}

// expose

module.exports = of
