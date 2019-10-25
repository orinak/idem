const murmur = require('@pouk/idem-util-murmurhash3')

// helpers

const traitsToHash = traits => {
  const text = JSON.stringify(traits)
  return murmur.x64.hash128(text)
}

module.exports = {
  traitsToHash
}
