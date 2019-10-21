const Trait = require('@pouk/idem-type-trait')

//

const NAME = 'CanvasFingerprint'

// helpers

/**
 * from https://github.com/Valve/fingerprintjs2
 */

const fingerprintFrom = function (canvas, opts = {}) {
  // const result = []

  if (typeof canvas.toDataURL !== 'function') {
    return undefined
  }

  // Very simple now, need to make it more complex (geo shapes etc)
  canvas.width = 2000
  canvas.height = 200
  canvas.style.display = 'inline'

  const ctx = canvas.getContext('2d')
  // detect browser support of canvas winding
  // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
  // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
  ctx.rect(0, 0, 10, 10)
  ctx.rect(2, 2, 6, 6)

  // result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

  ctx.textBaseline = 'alphabetic'
  ctx.fillStyle = '#f60'
  ctx.fillRect(125, 1, 62, 20)
  ctx.fillStyle = '#069'

  // https://github.com/Valve/fingerprintjs2/issues/66

  if (opts.dontUseFakeFontInCanvas) {
    ctx.font = '11pt Arial'
  } else {
    ctx.font = '11pt no-real-font-123'
  }
  ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
  ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'

  ctx.font = '18pt Arial'
  ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

  // canvas blending
  // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
  // http://jsfiddle.net/NDYV8/16/
  ctx.globalCompositeOperation = 'multiply'
  ctx.fillStyle = 'rgb(255,0,255)'
  ctx.beginPath()
  ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.fill()
  ctx.fillStyle = 'rgb(0,255,255)'
  ctx.beginPath()
  ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.fill()
  ctx.fillStyle = 'rgb(255,255,0)'
  ctx.beginPath()
  ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.fill()
  ctx.fillStyle = 'rgb(255,0,255)'

  // canvas winding
  // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
  // http://jsfiddle.net/NDYV8/19/
  ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
  ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
  ctx.fill('evenodd')

  return canvas.toDataURL()
}

const serialize = dataUrl => {
  return String(dataUrl)
}

const traitFrom = value => Trait(NAME, value, serialize)

/**
 * Factory for probe to get (incomplete) list of supported MIME Types
 *
 * @returns {Function}
 */

const factory = () => {
  function CanvasFingerprint () {
    const canvas = document.createElement('canvas')

    return Promise
      .resolve(canvas)
      .then(fingerprintFrom)
      .then(traitFrom)
  }

  return CanvasFingerprint
}

// expose factory

module.exports = factory
