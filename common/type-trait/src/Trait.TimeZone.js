const { TimeZone } = require('./Trait')

function stringify (trait) {
  if (!TimeZone.is(trait)) {
    throw new TypeError(`Trait ${trait} is not TimeZone`)
  }

  const { offset, name } = trait
  return `Trait.TimeZone(${offset},${JSON.stringify(name)})`
}

// expose

module.exports = TimeZone

module.exports.stringify = stringify
