const Future = require('fluture')
const Pair = require('sanctuary-pair')
const R = require('ramda')

const Trait = require('@pouk/idem-type-trait')

// helpers

const makeProbes = (factories, config) => {
  config = config || {}

  const probeFor = key => {
    const factory = factories[key]
    const options = config[key]

    return factory(options)
      .fold(Trait.empty, R.identity) // ensafe
      .map(Pair(key)) // embed key in result
  }

  const convert = R.compose(
    R.map(probeFor),
    R.keys
  )

  return convert(factories)
}

const recover = R.compose(
  R.converge(
    R.zipObj, // { a: 2, b: 1 }
    [
      R.map(Pair.fst), // [a, b]
      R.map(Pair.snd) // [2, 1]
    ]
  ),
  R.sortBy(Pair.fst) // [(a, 2), (b, 1)]
  // [(b, 1), (a, 2)]
)

// main

function runner (factories, config) {
  const probes = makeProbes(factories, config)

  return Future
    .parallel(Infinity, probes)
    .map(recover)
}

// expose

module.exports = R.curry(runner)
