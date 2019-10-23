const Daggy = require('daggy')

// variants

const Trait = Daggy.taggedSum('Trait', {
  GenericTrait: ['value'],
  Nothing: []
})

// expose constructor

module.exports = Trait
