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
 * Factory for probe to get browser plugins w/ versions
 *
 * @returns {Function}
 */

const factory = () => {
  function NavigatorPlugins () {
    const { navigator } = window

    return Promise
      .resolve(navigator.plugins)
      .then(parse)
      .then(Trait.of)
  }

  return NavigatorPlugins
}

// expose factory

module.exports = factory
