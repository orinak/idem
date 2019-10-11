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
 * Convert to primitive
 *
 * @returns {String}
 */

Fingerprint.prototype.toString = function () {
  return JSON.stringify(this.data)
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
