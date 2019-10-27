const Probes = require('@pouk/idem-client-probes')

const runner = require('@pouk/idem-client-runner')

const { MurmurHash3 } = require('@pouk/idem-type-digest')

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
    id: MurmurHash3.fromObject(data),
    data
  })

  return runner(Probes, config || {})
    .map(format)
}

// expose constructor

module.exports = Agent
