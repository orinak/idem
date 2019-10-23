const Future = require('fluture')

const Maybe = require('sanctuary-maybe')

const Trait = require('@pouk/idem-type-trait')

const getFingerprint = require('./fingerprint')

// helpers

const trait = Trait.of

const just = Maybe.Just
const nothing = () => Maybe.Nothing

/**
 * Probe to get canvas fingerprint
 *
 * @param {Object} [options]
 *
 * @returns {Future<Error|Maybe<Trait>>}
 */

function CanvasFingerprint (options) {
  return Future
    .encase(getFingerprint, options)
    .map(trait)
    .fold(nothing, just)
}

// expose probe

module.exports = CanvasFingerprint
