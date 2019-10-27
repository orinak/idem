import test from 'ava'

import Trait from '@pouk/idem-type-trait'

import { MurmurHash3 } from '..'

test('constructor', t => {
  t.is(typeof MurmurHash3, 'function')
})

test('fromObject', t => {
  const { fromObject } = MurmurHash3

  const A = {
    a: Trait.GenericTrait('x'),
    b: Trait.Nothing
  }

  const B = {
    b: Trait.Nothing,
    a: Trait.GenericTrait('x')
  }

  t.deepEqual(fromObject(A), fromObject(B))
})
