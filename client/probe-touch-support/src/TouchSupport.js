const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getMaxTouchPoints = () => {
  const { navigator } = window

  if (typeof navigator.maxTouchPoints !== 'undefined') {
    return navigator.maxTouchPoints
  }

  if (typeof navigator.msMaxTouchPoints !== 'undefined') {
    return navigator.msMaxTouchPoints
  }

  return 0
}

const checkTouchEvent = () => {
  try {
    document.createEvent('TouchEvent')
    return true
  } catch (err) {
    return false
  }
}

const getter = () => {
  return {
    maxTouchPoints: getMaxTouchPoints(),
    hasTouchEvent: checkTouchEvent()
  }
}

/**
 * Probe to get touch support
 *
 * @returns {Future<Error|Trait>}
 */

function LanguageInfo () {
  return Future
    .attempt(getter)
    .map(Trait.GenericTrait)
}

// expose probe

module.exports = LanguageInfo
