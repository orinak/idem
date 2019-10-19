const { multiply, rotl, fmix } = require('./helpers')

/**
 * Given a string and an optional seed as an int, returns a 128 bit hash using
 * the x86 flavor of MurmurHash3, as an unsigned hex.
 */

function hash128 (key, seed = 0) {
  var remainder = key.length % 16
  var bytes = key.length - remainder

  var h1 = seed
  var h2 = seed
  var h3 = seed
  var h4 = seed

  var k1 = 0
  var k2 = 0
  var k3 = 0
  var k4 = 0

  var c1 = 0x239b961b
  var c2 = 0xab0e9789
  var c3 = 0x38b34ae5
  var c4 = 0xa1e38b93

  for (var i = 0; i < bytes; i = i + 16) {
    k1 = ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)
    k2 = ((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24)
    k3 = ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)
    k4 = ((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24)

    k1 = multiply(k1, c1)
    k1 = rotl(k1, 15)
    k1 = multiply(k1, c2)
    h1 ^= k1

    h1 = rotl(h1, 19)
    h1 += h2
    h1 = multiply(h1, 5) + 0x561ccd1b

    k2 = multiply(k2, c2)
    k2 = rotl(k2, 16)
    k2 = multiply(k2, c3)
    h2 ^= k2

    h2 = rotl(h2, 17)
    h2 += h3
    h2 = multiply(h2, 5) + 0x0bcaa747

    k3 = multiply(k3, c3)
    k3 = rotl(k3, 17)
    k3 = multiply(k3, c4)
    h3 ^= k3

    h3 = rotl(h3, 15)
    h3 += h4
    h3 = multiply(h3, 5) + 0x96cd1c35

    k4 = multiply(k4, c4)
    k4 = rotl(k4, 18)
    k4 = multiply(k4, c1)
    h4 ^= k4

    h4 = rotl(h4, 13)
    h4 += h1
    h4 = multiply(h4, 5) + 0x32ac3b17
  }

  k1 = 0
  k2 = 0
  k3 = 0
  k4 = 0

  /* eslint no-fallthrough: 0 */

  switch (remainder) {
    case 15:
      k4 ^= key.charCodeAt(i + 14) << 16

    case 14:
      k4 ^= key.charCodeAt(i + 13) << 8

    case 13:
      k4 ^= key.charCodeAt(i + 12)
      k4 = multiply(k4, c4)
      k4 = rotl(k4, 18)
      k4 = multiply(k4, c1)
      h4 ^= k4

    case 12:
      k3 ^= key.charCodeAt(i + 11) << 24

    case 11:
      k3 ^= key.charCodeAt(i + 10) << 16

    case 10:
      k3 ^= key.charCodeAt(i + 9) << 8

    case 9:
      k3 ^= key.charCodeAt(i + 8)
      k3 = multiply(k3, c3)
      k3 = rotl(k3, 17)
      k3 = multiply(k3, c4)
      h3 ^= k3

    case 8:
      k2 ^= key.charCodeAt(i + 7) << 24

    case 7:
      k2 ^= key.charCodeAt(i + 6) << 16

    case 6:
      k2 ^= key.charCodeAt(i + 5) << 8

    case 5:
      k2 ^= key.charCodeAt(i + 4)
      k2 = multiply(k2, c2)
      k2 = rotl(k2, 16)
      k2 = multiply(k2, c3)
      h2 ^= k2

    case 4:
      k1 ^= key.charCodeAt(i + 3) << 24

    case 3:
      k1 ^= key.charCodeAt(i + 2) << 16

    case 2:
      k1 ^= key.charCodeAt(i + 1) << 8

    case 1:
      k1 ^= key.charCodeAt(i)
      k1 = multiply(k1, c1)
      k1 = rotl(k1, 15)
      k1 = multiply(k1, c2)
      h1 ^= k1
  }

  h1 ^= key.length
  h2 ^= key.length
  h3 ^= key.length
  h4 ^= key.length

  h1 += h2
  h1 += h3
  h1 += h4
  h2 += h1
  h3 += h1
  h4 += h1

  h1 = fmix(h1)
  h2 = fmix(h2)
  h3 = fmix(h3)
  h4 = fmix(h4)

  h1 += h2
  h1 += h3
  h1 += h4
  h2 += h1
  h3 += h1
  h4 += h1

  return ('00000000' + (h1 >>> 0).toString(16)).slice(-8) +
    ('00000000' + (h2 >>> 0).toString(16)).slice(-8) +
    ('00000000' + (h3 >>> 0).toString(16)).slice(-8) +
    ('00000000' + (h4 >>> 0).toString(16)).slice(-8)
}

module.exports = hash128
