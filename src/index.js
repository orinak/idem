const Fingerprint = require('./Fingerprint')

const probes = require('./probes')

// generate fingerprint

async function render () {
  const data = {}

  for (const key in probes) {
    const fn = probes[key]()
    data[key] = await fn()
  }

  return Fingerprint(data)
}

module.exports = {
  Fingerprint,
  render
}
