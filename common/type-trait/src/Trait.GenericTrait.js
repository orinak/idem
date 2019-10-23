const stringifyToJSON = require('json-stringify-deterministic')
const sortKeysRecursive = require('sort-keys-recursive')

const { GenericTrait } = require('./Trait')

function stringify (trait) {
  if (!GenericTrait.is(trait)) {
    throw new TypeError(`Trait ${trait} is not GenericTrait`)
  }

  const { value } = trait
  const str = stringifyToJSON(sortKeysRecursive(value))
  return `Trait.GenericTrait(${str})`
}

// expose

module.exports = GenericTrait

module.exports.stringify = stringify
