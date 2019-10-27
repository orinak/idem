const Daggy = require('daggy')

// variants

const Digest = Daggy.taggedSum('Digest', {
  MurmurHash3: ['value']
})

// expose constructor

module.exports = Digest
