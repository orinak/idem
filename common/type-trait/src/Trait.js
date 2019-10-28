const Daggy = require('daggy')

// variants

const Trait = Daggy.taggedSum('Trait', {
  GenericTrait: ['value'],
  CanvasFingerprint: ['dataURI', 'features'],
  SystemFonts: ['fontList', 'isComplete'],
  Nothing: []
})

// expose constructor

module.exports = Trait
