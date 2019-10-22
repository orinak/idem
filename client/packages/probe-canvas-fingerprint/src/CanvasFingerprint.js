const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

const getFingerprint = require('./fingerprint')

/**
 * Probe to get canvas fingerprint
 *
 * @returns {Future<Error|Trait>}
 */

function CanvasFingerprint (opts) {
  return Future
    .encase(getFingerprint, opts)
    .map(Trait.of)
}

// expose probe

module.exports = CanvasFingerprint
