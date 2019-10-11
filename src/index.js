const Fingerprint = require('./Fingerprint')

const probes = require('./probes')

// generate fingerprint

function render (ctx = window) {
  const keys = Object.keys(probes)

  const data = keys.reduce((acc, key) => {
    const fn = probes[key]()
    acc[key] = fn(ctx)
    return acc
  }, {})

  return Fingerprint(data)
}

module.exports = {
  Fingerprint,
  render
}
