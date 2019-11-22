const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

const LanguageDetector = require('./LanguageDetector')

// helpers

const getInstalledLanguages = () => {
  const detector = new LanguageDetector()
  const languages = detector.detect()

  return Promise.resolve(languages)
}

const getLanguage = () => {
  const { navigator } = window
  return navigator.language ||
    navigator.userLanguage ||
    navigator.browserLanguage ||
    navigator.systemLanguage
}

const getter = () => {
  return {
    language: getLanguage(),
    installed: getInstalledLanguages()
  }
}

/**
 * Probe to get language information
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
