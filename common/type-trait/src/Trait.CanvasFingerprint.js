const stringifyToJSON = require('json-stringify-deterministic')
const sortKeysRecursive = require('sort-keys-recursive')

const { CanvasFingerprint } = require('./Trait')

function stringify (trait) {
  if (!CanvasFingerprint.is(trait)) {
    throw new TypeError(`Trait ${trait} is not CanvasFingerprint`)
  }

  const { dataURI, features } = trait
  const str = stringifyToJSON(sortKeysRecursive({ dataURI, features }))
  return `Trait.CanvasFingerprint(${str})`
}

// expose

module.exports = CanvasFingerprint

module.exports.stringify = stringify
