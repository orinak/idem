const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getScreenResolution = () => {
  const { width, height, colorDepth } = window.screen

  return {
    width,
    height,
    colorDepth
  }
}

/**
 * Probe to get screen resolution
 *
 * @returns {Future<Error|Trait>}
 */

function ScreenResolution () {
  return Future
    .attempt(getScreenResolution)
    .map(Trait.GenericTrait)
}

// expose probe

module.exports = ScreenResolution
