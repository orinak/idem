const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

const getFingerprint = require('./fingerprint')

/**
 * Probe to get canvas fingerprint
 *
 * @param {Object} [options]
 *
 * @returns {Future<Error|Trait>}
 */

function CanvasFingerprint (options) {
  return Future
    .encase(getFingerprint, options)
    .map(Trait.GenericTrait)
}

// expose probe

module.exports = CanvasFingerprint
