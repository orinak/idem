// helpers

const toString = value => value.toString()

// constructor

function Trait (key, value, serialize = toString) {
  if (!(this instanceof Trait)) {
    return new Trait(key, value, serialize)
  }

  this.key = key
  this.value = value
  this.serialize = serialize

  return this
}

// prototype methods

Trait.prototype.toString = function () {
  const { key, value, serialize } = this
  return `(${key}: ${serialize(value)})`
}

// expose constructor

module.exports = Trait
