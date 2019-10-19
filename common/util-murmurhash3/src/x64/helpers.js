/**
 * Given two 64bit ints (as an array of two 32bit ints) returns the two
 * added together as a 64bit int (as an array of two 32bit ints).
 */

function add (m, n) {
  m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
  n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]

  const o = [0, 0, 0, 0]

  o[3] += m[3] + n[3]
  o[2] += o[3] >>> 16
  o[3] &= 0xffff

  o[2] += m[2] + n[2]
  o[1] += o[2] >>> 16
  o[2] &= 0xffff

  o[1] += m[1] + n[1]
  o[0] += o[1] >>> 16
  o[1] &= 0xffff

  o[0] += m[0] + n[0]
  o[0] &= 0xffff

  return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
}

/**
 * Given two 64bit ints (as an array of two 32bit ints) returns the two
 * multiplied together as a 64bit int (as an array of two 32bit ints).
 */

function multiply (m, n) {
  m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
  n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]

  const o = [0, 0, 0, 0]

  o[3] += m[3] * n[3]
  o[2] += o[3] >>> 16
  o[3] &= 0xffff

  o[2] += m[2] * n[3]
  o[1] += o[2] >>> 16
  o[2] &= 0xffff

  o[2] += m[3] * n[2]
  o[1] += o[2] >>> 16
  o[2] &= 0xffff

  o[1] += m[1] * n[3]
  o[0] += o[1] >>> 16
  o[1] &= 0xffff

  o[1] += m[2] * n[2]
  o[0] += o[1] >>> 16
  o[1] &= 0xffff

  o[1] += m[3] * n[1]
  o[0] += o[1] >>> 16
  o[1] &= 0xffff

  o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
  o[0] &= 0xffff

  return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
}

/**
 * Given a 64bit int (as an array of two 32bit ints) and an int
 * representing a number of bit positions, returns the 64bit int (as an
 * array of two 32bit ints) rotated left by that number of positions.
 */

function rotl (m, n) {
  n %= 64

  if (n === 32) {
    return [m[1], m[0]]
  } else if (n < 32) {
    const a = (m[0] << n) | (m[1] >>> (32 - n))
    const b = (m[1] << n) | (m[0] >>> (32 - n))
    return [a, b]
  } else {
    n -= 32
    const a = (m[1] << n) | (m[0] >>> (32 - n))
    const b = (m[0] << n) | (m[1] >>> (32 - n))
    return [a, b]
  }
}

/**
 * Given a 64bit int (as an array of two 32bit ints) and an int
 * representing a number of bit positions, returns the 64bit int (as an
 * array of two 32bit ints) shifted left by that number of positions.
 */

function leftShift (m, n) {
  n %= 64

  if (n === 0) {
    return m
  } else if (n < 32) {
    return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
  } else {
    return [m[1] << (n - 32), 0]
  }
}

/**
 * Given two 64bit ints (as an array of two 32bit ints) returns the two
 * xored together as a 64bit int (as an array of two 32bit ints).
 */

function xor (m, n) {
  return [m[0] ^ n[0], m[1] ^ n[1]]
}

/**
 * Given a block, returns murmurHash3's final x64 mix of that block.
 * (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
 * only place where we need to right shift 64bit ints.)
 */

function fmix (h) {
  h = xor(h, [0, h[0] >>> 1])
  h = multiply(h, [0xff51afd7, 0xed558ccd])
  h = xor(h, [0, h[0] >>> 1])
  h = multiply(h, [0xc4ceb9fe, 0x1a85ec53])
  h = xor(h, [0, h[0] >>> 1])

  return h
}

module.exports = {
  add,
  multiply,
  rotl,
  leftShift,
  xor,
  fmix
}
