const Future = require('fluture')

const Trait = require('./Trait')

// helpers

const parse = pluginArray => {
  const it = (plugins, pluginItem) => {
    const { name, version } = pluginItem
    return plugins.concat([{ name, version }])
  }

  return Array
    .from(pluginArray)
    .reduce(it, [])
}

/**
 * Probe to get browser plugins w/ versions
 *
 * @signature () => Future Error Trait
 *
 * @returns {Future}
 */

const probe = () => {
  return Future
    .resolve(window.navigator.plugins)
    .map(parse)
    .map(Trait.of)
}

// expose probe

module.exports = probe
