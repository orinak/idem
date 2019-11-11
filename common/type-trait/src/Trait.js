const Daggy = require('daggy')

// variants

const Trait = Daggy.taggedSum('Trait', {
  GenericTrait: ['value'],
  CanvasFingerprint: ['dataURI', 'features'],
  SystemFonts: ['fontList', 'isComplete'],
  TimeZone: ['offset', 'name'],
  Nothing: []
})

// expose constructor

module.exports = Trait
