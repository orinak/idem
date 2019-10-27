const runner = require('@pouk/idem-client-runner')
const probes = require('@pouk/idem-client-probes')

const { MurmurHash3 } = require('@pouk/idem-type-digest')

//

const CONFIG = {}

// helpers

const formatResult = data => ({
  id: MurmurHash3.fromObject(data),
  data
})

// main

function detect (config) {
  return runner(probes, config || CONFIG)
    .map(formatResult)
}

// expose main methods

module.exports = {
  detect
}
