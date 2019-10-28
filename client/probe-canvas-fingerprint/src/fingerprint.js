/**
 * Create a HTML5 canvas element
 *
 * @returns {Canvas}
 */

const createCanvas = () => {
  return document.createElement('canvas')
}

/**
 *
 */

const getContext2D = canvas => {
  if (typeof canvas.getContext !== 'function') {
    throw new Error('No Canvas API')
  }

  return canvas.getContext('2d')
}

/**
 *
 */

const getDataURL = (canvas) => {
  if (typeof canvas.toDataURL !== 'function') {
    throw new Error('No Canvas.toDataURL')
  }

  return canvas.toDataURL()
}

/**
 *  from Valve/fingerprint2.js
 */

function main (opts = {}) {
  const canvas = createCanvas()

  // Very simple now, need to make it more complex (geo shapes etc)
  canvas.width = 2000
  canvas.height = 200
  canvas.style.display = 'inline'

  const ctx = getContext2D(canvas)

  // detect browser support of canvas winding
  // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
  // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
  ctx.rect(0, 0, 10, 10)
  ctx.rect(2, 2, 6, 6)
  // console.log('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

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

  // return base64 string
  return getDataURL(canvas)
}

// expose

module.exports = main
