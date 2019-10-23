import test from 'ava'

import Trait from '..'

test('constructor', t => {
  t.is(typeof Trait.GenericTrait, 'function')
})

test('is', t => {
  const trait = Trait.GenericTrait('value')

  t.true(Trait.is(trait))
  t.true(Trait.GenericTrait.is(trait))
})

test('stringify', t => {
  const get = value => {
    const trait = Trait.GenericTrait(value)
    return Trait.stringify(trait)
  }

  t.is(
    get(1),
    'Trait.GenericTrait(1)'
  )

  t.is(
    get('one'),
    'Trait.GenericTrait("one")'
  )

  t.is(
    get({ a: 1, b: 2 }),
    'Trait.GenericTrait({"a":1,"b":2})',
    'object'
  )

  t.is(
    get({ b: 2, a: 1 }),
    'Trait.GenericTrait({"a":1,"b":2})',
    'serialize object stable'
  )

  t.is(
    get([{ b: 2, a: 1 }]),
    'Trait.GenericTrait([{"a":1,"b":2}])',
    'serialize object stable recursive'
  )
})
