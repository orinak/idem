const Future = require('fluture')

const Trait = require('@pouk/idem-type-trait')

//

const ACTIONS = [
  ['threshold', -50],
  ['knee', 40],
  ['ratio', 12],
  ['reduction', -20],
  ['attack', 0],
  ['release', 0.25]
]

const TIMEOUT = 5000

// helpers

function getAudioBack (opts = {}, done) {
  const AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

  if (AudioContext == null) {
    return done()
  }

  const context = new AudioContext(1, 44100, 44100)

  var oscillator = context.createOscillator()
  oscillator.type = 'triangle'
  oscillator.frequency.setValueAtTime(10000, context.currentTime)

  var compressor = context.createDynamicsCompressor()

  ACTIONS.forEach(pair => {
    const [key, value] = pair
    const prop = compressor[key]
    if (prop !== undefined && typeof prop.setValueAtTime === 'function') {
      prop.setValueAtTime(value, context.currentTime)
    }
  })

  oscillator.connect(compressor)
  compressor.connect(context.destination)
  oscillator.start(0)
  context.startRendering()

  const timeout = opts.timeout || TIMEOUT

  const audioTimeoutId = setTimeout(function () {
    context.oncomplete = () => {}
    return done()
  }, timeout)

  context.oncomplete = function (event) {
    try {
      clearTimeout(audioTimeoutId)
      const fingerprint = event.renderedBuffer
        .getChannelData(0)
        .slice(4500, 5000)
        .reduce((acc, val) => acc + Math.abs(val), 0)
        .toString()

      oscillator.disconnect()
      compressor.disconnect()

      return done(null, fingerprint)
    } catch (err) {
      return done(err)
    }
  }
}

/**
 * Probe to get hardware info
 *
 * @returns {Future<Error|Trait>}
 */

function HardwareInfo (opts) {
  const recover = key => {
    return key
      ? Trait.GenericTrait(key)
      : Trait.Nothing
  }

  return Future
    .node(done => getAudioBack(opts, done))
    .map(recover)
}

// expose probe

module.exports = HardwareInfo
