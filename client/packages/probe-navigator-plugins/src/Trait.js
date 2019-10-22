const Trait = require('@pouk/idem-type-trait')

const getString = plugins => {
  const fromTuple = plugin => {
    const { name, version } = plugin
    return `${name}@v${version}`
  }

  return plugins
    .map(fromTuple)
    .join(',')
}

module.exports.of = Trait.create({ getString })
