const { Nothing } = require('./Trait')

function stringify (trait) {
  if (!Nothing.is(trait)) {
    throw new TypeError(`Trait ${trait} in not Nothing`)
  }

  return 'Trait.Nothing'
}

// expose

module.exports = Nothing

module.exports.stringify = stringify
