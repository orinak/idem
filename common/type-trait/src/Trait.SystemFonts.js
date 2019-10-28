const stringifyToJSON = require('json-stringify-deterministic')
const sortKeysRecursive = require('sort-keys-recursive')

const { SystemFonts } = require('./Trait')

function stringify (trait) {
  if (!SystemFonts.is(trait)) {
    throw new TypeError(`Trait ${trait} is not SystemFonts`)
  }

  const { fontList, isComplete } = trait
  const a = stringifyToJSON(sortKeysRecursive(fontList))
  const b = String(isComplete)
  return `Trait.SystemFonts(${a},${b})`
}

// expose

module.exports = SystemFonts

module.exports.stringify = stringify
