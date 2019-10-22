const Future = require('fluture')

const Trait = require('./Trait')

// helpers

const getNavigatorPlugins = () => window.navigator.plugins

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
 * @returns {Future<Error|Trait>}
 */

function NavigatorPlugins () {
  return Future
    .attempt(getNavigatorPlugins)
    .map(parse)
    .map(Trait.of)
}

// expose probe

module.exports = NavigatorPlugins
