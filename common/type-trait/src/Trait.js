const Daggy = require('daggy')

// variants

const Trait = Daggy.taggedSum('Trait', {
  GenericTrait: ['value'],
  CanvasFingerprint: ['dataURI', 'features'],
  Nothing: []
})

// expose constructor

module.exports = Trait
