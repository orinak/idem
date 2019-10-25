const murmur = require('@pouk/idem-util-murmurhash3')

// helpers

const traitsToHash = traits => {
  const text = JSON.stringify(traits)
  return murmur.x64.hash128(text)
}

const traitsToData = traits => {
  const fn = (acc, { key, value }) => {
    acc[key] = value
    return acc
  }

  return traits.reduce(fn, {})
}

module.exports = {
  traitsToHash,
  traitsToData
}
