const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const checkCookie = () => {
  const { navigator } = window
  return navigator.cookieEnabled
}

const checkLocalStorage = () => {
  try {
    return !!window.localStorage
  } catch (err) {
    return true // SecurityError when referencing it means it exists
  }
}

const checkSessionStorage = () => {
  try {
    return !!window.sessionStorage
  } catch (err) {
    return true // SecurityError when referencing it means it exists
  }
}

const checkIndexedDB = () => {
  return !!window.indexedDB
}

const getter = () => {
  return {
    cookies: checkCookie(),
    localStorage: checkLocalStorage(),
    sessionStorage: checkSessionStorage(),
    indexedDB: checkIndexedDB()
  }
}

/**
 * Probe to get storage options availability
 *
 * @returns {Future<Error|Trait>}
 */

function StorageOptions () {
  return Future
    .attempt(getter)
    .map(Trait.GenericTrait)
}

// expose probe

module.exports = StorageOptions
