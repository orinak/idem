const { add, multiply, rotl, leftShift, xor, fmix } = require('./helpers')

/**
 * Given a string and an optional seed as an int, returns a 128 bit hash using
 * the x64 flavor of MurmurHash3, as an unsigned hex.
 */

function hash128 (key, seed = 0) {
  var remainder = key.length % 16
  var bytes = key.length - remainder

  var h1 = [0, seed]
  var h2 = [0, seed]

  var k1 = [0, 0]
  var k2 = [0, 0]

  var c1 = [0x87c37b91, 0x114253d5]
  var c2 = [0x4cf5ad43, 0x2745937f]

  for (var i = 0; i < bytes; i = i + 16) {
    k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
    k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]

    k1 = multiply(k1, c1)
    k1 = rotl(k1, 31)
    k1 = multiply(k1, c2)
    h1 = xor(h1, k1)

    h1 = rotl(h1, 27)
    h1 = add(h1, h2)
    h1 = add(multiply(h1, [0, 5]), [0, 0x52dce729])

    k2 = multiply(k2, c2)
    k2 = rotl(k2, 33)
    k2 = multiply(k2, c1)
    h2 = xor(h2, k2)

    h2 = rotl(h2, 31)
    h2 = add(h2, h1)
    h2 = add(multiply(h2, [0, 5]), [0, 0x38495ab5])
  }

  k1 = [0, 0]
  k2 = [0, 0]

  /* eslint no-fallthrough: 0 */

  switch (remainder) {
    case 15:
      k2 = xor(k2, leftShift([0, key.charCodeAt(i + 14)], 48))

    case 14:
      k2 = xor(k2, leftShift([0, key.charCodeAt(i + 13)], 40))

    case 13:
      k2 = xor(k2, leftShift([0, key.charCodeAt(i + 12)], 32))

    case 12:
      k2 = xor(k2, leftShift([0, key.charCodeAt(i + 11)], 24))

    case 11:
      k2 = xor(k2, leftShift([0, key.charCodeAt(i + 10)], 16))

    case 10:
      k2 = xor(k2, leftShift([0, key.charCodeAt(i + 9)], 8))

    case 9:
      k2 = xor(k2, [0, key.charCodeAt(i + 8)])
      k2 = multiply(k2, c2)
      k2 = rotl(k2, 33)
      k2 = multiply(k2, c1)
      h2 = xor(h2, k2)

    case 8:
      k1 = xor(k1, leftShift([0, key.charCodeAt(i + 7)], 56))

    case 7:
      k1 = xor(k1, leftShift([0, key.charCodeAt(i + 6)], 48))

    case 6:
      k1 = xor(k1, leftShift([0, key.charCodeAt(i + 5)], 40))

    case 5:
      k1 = xor(k1, leftShift([0, key.charCodeAt(i + 4)], 32))

    case 4:
      k1 = xor(k1, leftShift([0, key.charCodeAt(i + 3)], 24))

    case 3:
      k1 = xor(k1, leftShift([0, key.charCodeAt(i + 2)], 16))

    case 2:
      k1 = xor(k1, leftShift([0, key.charCodeAt(i + 1)], 8))

    case 1:
      k1 = xor(k1, [0, key.charCodeAt(i)])
      k1 = multiply(k1, c1)
      k1 = rotl(k1, 31)
      k1 = multiply(k1, c2)
      h1 = xor(h1, k1)
  }

  h1 = xor(h1, [0, key.length])
  h2 = xor(h2, [0, key.length])

  h1 = add(h1, h2)
  h2 = add(h2, h1)

  h1 = fmix(h1)
  h2 = fmix(h2)

  h1 = add(h1, h2)
  h2 = add(h2, h1)

  return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) +
    ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) +
    ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) +
    ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
}

// expose

module.exports = hash128
