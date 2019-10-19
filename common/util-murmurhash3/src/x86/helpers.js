/**
 * Given two 32bit ints, returns the two multiplied together as a 32bit int.
 */

function multiply (m, n) {
  return ((m & 0xffff) * n) + ((((m >>> 16) * n) & 0xffff) << 16)
}

/**
 * Given a 32bit int and an int representing a number of bit positions,
 * returns the 32bit int rotated left by that number of positions.
 */

function rotl (m, n) {
  return (m << n) | (m >>> (32 - n))
}

/**
 * Given a block, returns murmurHash3's final x86 mix of that block.
 */

function fmix (h) {
  h ^= h >>> 16
  h = multiply(h, 0x85ebca6b)
  h ^= h >>> 13
  h = multiply(h, 0xc2b2ae35)
  h ^= h >>> 16

  return h
}

module.exports = {
  multiply,
  rotl,
  fmix
}
