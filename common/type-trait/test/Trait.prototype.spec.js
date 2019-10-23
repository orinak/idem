import test from 'ava'

import Trait from '..'

test('toString', t => {
  t.is(
    Trait.GenericTrait([{ b: 2, a: 1 }]).toString(),
    'Trait.GenericTrait([{"a":1,"b":2}])',
    'GenericTrait (complex)'
  )

  t.is(
    Trait.Nothing.toString(),
    'Trait.Nothing',
    'Nothing'
  )
})
