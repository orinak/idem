import test from 'ava'

import Trait from '..'

test('@@tags', t => {
  t.is(typeof Trait.GenericTrait, 'function')
  t.is(typeof Trait.CanvasFingerprint, 'function')
  t.is(typeof Trait.SystemFonts, 'function')
  t.is(typeof Trait.Nothing, 'object')
})

test('empty', t => {
  t.is(Trait.empty(), Trait.Nothing)

  t.is(Trait['fantasy-land/empty'](), Trait.Nothing, 'fantasy alias')
})
