const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

const getFingerprint = require('./fingerprint')

/**
 * Probe to get canvas fingerprint
 *
 * @param {Object} [options]
 *
 * @returns {Future<Trait>}
 */

function CanvasFingerprint (options) {
  return Future
    .encase(getFingerprint, options)
    .fold(Trait.empty, Trait.GenericTrait)
}

// expose probe

module.exports = CanvasFingerprint
