/**
 * Create a fingerprint
 *
 * @returns {Fingerprint}
 */

function Fingerprint (data) {
  // so may omit `new`
  if (!(this instanceof Fingerprint)) {
    return new Fingerprint(data)
  }

  this.data = data || {}

  return this
}

/**
 * Convert to hex (32 bit)
 *
 * @returns {String}
 */

Fingerprint.prototype.toString = function () {
  // serialize data

  const textFromObj = JSON.stringify

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

  return hashToHex(hashFromText(textFromObj(this.data)))
}

/**
 * Get as serializable JSON
 *
 * @returns {Object}
 */

Fingerprint.prototype.toJSON = function () {
  return Object.assign({}, this.data)
}

// export

module.exports = Fingerprint
