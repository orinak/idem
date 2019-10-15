const probes = require('@pouk/idem-client-probes')

function detect () {
  console.log(Object.keys(probes))

  return Promise.resolve({ id: 'xxx' })
}

module.exports = function () {
  return {
    detect
  }
}
