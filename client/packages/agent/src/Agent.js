const Probes = require('@pouk/idem-client-probes')

const runner = require('@pouk/idem-client-runner')

const { traitsToHash } = require('./helpers')

// main

function Agent (config) {
  // use w/o `new` keyword
  if (!(this instanceof Agent)) {
    return new Agent()
  }

  this.config = config

  return this
}

// prototype methods

Agent.prototype.detect = function () {
  const { config } = this

  const format = data => ({
    id: traitsToHash(data),
    data
  })

  return runner(Probes, config || {})
    .map(format)
}

// expose constructor

module.exports = Agent
