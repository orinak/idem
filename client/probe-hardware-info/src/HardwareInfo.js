const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

// helpers

const getHardwareInfo = () => {
  const { cpuClass, hardwareConcurrency } = window.navigator

  return {
    cpuClass,
    hardwareConcurrency
  }
}

/**
 * Probe to get hardware info
 *
 * @returns {Future<Error|Trait>}
 */

function HardwareInfo () {
  return Future
    .attempt(getHardwareInfo)
    .map(Trait.GenericTrait)
}

// expose probe

module.exports = HardwareInfo
