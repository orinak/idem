const Probes = require('@pouk/idem-client-probes')
const encode = require('@pouk/idem-common-encode-java-hashcode')

// helpers

const traitsToString = traits => traits.join('\n')

const traitsToObject = traits => {
  const fn = (acc, { key, value }) => {
    acc[key] = value
    return acc
  }

  return traits.reduce(fn, {})
}

// main

function Agent () {
  // use w/o `new` keyword
  if (!(this instanceof Agent)) {
    return new Agent()
  }

  const probes = []

  for (const name in Probes) {
    const make = Probes[name]
    probes.push(make())
  }

  this.probes = probes

  return this
}

Agent.prototype.detect = async function () {
  const { probes } = this

  const invoke = fn => fn()
  const traits = await Promise
    .all(probes.map(invoke))

  const id = encode(traitsToString(traits))
  const data = traitsToObject(traits)

  return {
    id,
    data
  }
}

module.exports = Agent

module.exports.encode = encode
