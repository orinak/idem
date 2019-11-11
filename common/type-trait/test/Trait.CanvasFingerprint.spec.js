import test from 'ava'

import Trait from '..'

test('constructor', t => {
  t.is(typeof Trait.CanvasFingerprint, 'function')
})

test('is', t => {
  const trait = Trait.CanvasFingerprint('base64...', false)

  t.true(Trait.is(trait))
  t.true(Trait.CanvasFingerprint.is(trait))
})

test('stringify', t => {
  const dataURI = 'base64....'
  const features = ['blending', 'winding']

  const trait = Trait.CanvasFingerprint(dataURI, ['winding', 'blending'])

  t.is(
    Trait.stringify(trait),
    `Trait.CanvasFingerprint(${JSON.stringify({ dataURI, features })})`
  )
})
