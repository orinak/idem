// as Java's hashCode

const hashFromText = text => {
  let hash = 0

  if (text.length === 0) return hash

  for (let i = 0; i < text.length; i++) {
    const chr = text.charCodeAt(i)

    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }

  return hash
}

// 32 bit number to uniform hex string

const hashToHex = n => {
  let hex = n.toString(16)

  // max 32 bit hex `7FFFFFFF` (for 2147483647)
  const maxLength = 8

  while (hex.length < maxLength) {
    hex = '0' + hex
  }

  return hex
}

//

function encode (text) {
  return hashToHex(hashFromText((text)))
}

module.exports = encode
