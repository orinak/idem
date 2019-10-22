// constructor

function Trait (value, options = {}) {
  this.value = value
  this.options = options

  return this
}

// prototype methods

Trait.prototype.toString = function () {
  const { options, value } = this

  const parse = typeof options.getString === 'function'
    ? options.getString
    : value => String(value)

  return parse(value)
}

Trait.prototype['@@show'] = function () {
  const text = this.toString()
  return `Trait (${text})`
}

Trait.prototype.toJSON = function () {
  const { options, value } = this

  const parse = typeof options.getJSON === 'function'
    ? options.getJSON
    : value => value

  return parse(value)
}

// expose constructor

module.exports = Trait
