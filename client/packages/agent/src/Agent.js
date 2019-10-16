const Probes = require('@pouk/idem-client-probes')
const encode = require('@pouk/idem-common-encode-java-hashcode')

const serialize = require('./serialize')

function Agent () {
  // use w/o `new` keyword
  if (!(this instanceof Agent)) {
    return new Agent()
  }

  const probes = {}

  for (const name in Probes) {
    const make = Probes[name]
    probes[name] = make()
  }

  this.probes = probes

  return this
}

Agent.prototype.detect = async function () {
  const { probes } = this

  const data = {}

  for (const key in probes) {
    const probe = probes[key]

    data[key] = await probe()
  }

  const id = encode(serialize(data))

  return {
    id,
    data
  }
}

module.exports = Agent

module.exports.encode = encode
module.exports.serialize = serialize
