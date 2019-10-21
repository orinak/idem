const Trait = require('@pouk/idem-type-trait')

//

const NAME = 'NavigatorPlugins'

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

const serialize = plugins => {
  const fromTuple = ({ name, version }) => `${name}@v${version}`

  return plugins
    .map(fromTuple)
    .join(', ')
}

const traitFrom = value => Trait(NAME, value, serialize)

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
      .then(traitFrom)
  }

  return NavigatorPlugins
}

// expose factory

module.exports = factory
