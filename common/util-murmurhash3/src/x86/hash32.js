const { multiply, rotl, fmix } = require('./helpers')

/**
 * Given a string and an optional seed as an int, returns a 32 bit hash
 * using the x86 flavor of MurmurHash3, as an unsigned int.
 */

function hash32 (key, seed = 0) {
  var remainder = key.length % 4
  var bytes = key.length - remainder

  var h1 = seed

  var k1 = 0

  var c1 = 0xcc9e2d51
  var c2 = 0x1b873593

  for (var i = 0; i < bytes; i = i + 4) {
    k1 = ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)

    k1 = multiply(k1, c1)
    k1 = rotl(k1, 15)
    k1 = multiply(k1, c2)

    h1 ^= k1
    h1 = rotl(h1, 13)
    h1 = multiply(h1, 5) + 0xe6546b64
  }

  k1 = 0

  /* eslint no-fallthrough: 0 */

  switch (remainder) {
    case 3:
      k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16
    case 2:
      k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8
    case 1:
      k1 ^= (key.charCodeAt(i) & 0xff)
      k1 = multiply(k1, c1)
      k1 = rotl(k1, 15)
      k1 = multiply(k1, c2)
      h1 ^= k1
  }

  h1 ^= key.length
  h1 = fmix(h1)

  return h1 >>> 0
}

//

module.exports = hash32
