const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getScreenInfo = () => {
  const { screen, devicePixelRatio } = window

  const { width, height, colorDepth, availWidth, availHeight } = screen

  return {
    size: {
      width,
      height
    },
    availableSize: {
      width: availWidth,
      height: availHeight
    },
    colorDepth,
    devicePixelRatio
  }
}

/**
 * Probe to get screen info
 *
 * @returns {Future<Error|Trait>}
 */

function ScreenInfo () {
  return Future
    .attempt(getScreenInfo)
    .map(Trait.GenericTrait)
}

// expose probe

module.exports = ScreenInfo
