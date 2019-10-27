const stringifyToJSON = require('json-stringify-deterministic')

const { x64 } = require('@pouk/idem-util-murmurhash3')

const { MurmurHash3 } = require('./Digest')

function fromObject (obj) {
  const replacer = (key, value) => {
    return key
      ? value.toString()
      : value
  }
  const str = stringifyToJSON(obj, { replacer })

  const value = x64.hash128(str)

  return MurmurHash3(value)
}

// expose

module.exports = MurmurHash3

module.exports.fromObject = fromObject
