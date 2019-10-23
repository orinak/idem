import test from 'ava'

import Trait from '..'

test('variants', t => {
  t.is(typeof Trait.GenericTrait, 'function')
  t.is(typeof Trait.Nothing, 'object')
})
