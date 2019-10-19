const Probes = require('@pouk/idem-client-probes')

const { traitsToHash, traitsToData } = require('./helpers')

// main

function Agent () {
  // use w/o `new` keyword
  if (!(this instanceof Agent)) {
    return new Agent()
  }

  // derive probes
  const probes = Object
    .entries(Probes)
    // order by name
    .sort(([a], [b]) => a > b ? 1 : -1)
    .map(([_, factory]) => factory())

  this.probes = probes

  return this
}

// prototype methods

Agent.prototype.detect = async function () {
  const { probes } = this

  const invoke = fn => fn()
  const traits = await Promise
    .all(probes.map(invoke))

  return {
    id: traitsToHash(traits),
    data: traitsToData(traits)
  }
}

// expose constructor

module.exports = Agent
