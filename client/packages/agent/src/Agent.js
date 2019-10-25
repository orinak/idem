const Probes = require('@pouk/idem-client-probes')

const { traitsToHash } = require('./helpers')

// main

function Agent () {
  // use w/o `new` keyword
  if (!(this instanceof Agent)) {
    return new Agent()
  }

  // derive probes
  const it = pkg => {
    const [name, create] = pkg
    const format = result => ({ name, result })
    return create().map(format)
  }
  const probes = Object
    .entries(Probes)
    // order by name
    .sort(([a], [b]) => a > b ? 1 : -1)
    .map(it)

  this.probes = probes

  return this
}

// prototype methods

Agent.prototype.detect = async function () {
  const { probes } = this

  const invoke = probe => probe.promise()
  const results = await Promise
    .all(probes.map(invoke))

  const traits = results.reduce((acc, { name, result }) => {
    acc[name] = result
    return acc
  })

  return {
    id: traitsToHash(traits),
    data: traits
  }
}

// expose constructor

module.exports = Agent
