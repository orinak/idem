import test from 'ava'

import * as R from 'ramda'

import show from 'sanctuary-show'

import Trait from '..'

test('Trait.create', t => {
  const { create } = Trait

  const options = {
    toString: JSON.stringify,
    toJSON: R.identity
  }

  const value = { a: 1 }

  // normal

  t.true(create(options, value) instanceof Trait)

  // curried

  const createExtended = Trait.create(options)
  t.is(typeof createExtended, 'function')
  t.true(createExtended(value) instanceof Trait)
})

test('Trait.of', t => {
  const { of } = Trait

  const value = { a: 1 }

  t.true(of(value) instanceof Trait)
})

test('trait.toString', t => {
  const getString = JSON.stringify

  const primitiveValue = 'ok'
  const complexValue = {
    a: 1,
    b: 2
  }

  t.is(
    Trait.of(primitiveValue).toString(),
    primitiveValue,
    'default `getString` on primitive'
  )

  t.is(
    Trait.of(complexValue).toString(),
    '[object Object]',
    'default `getString` on complex'
  )

  t.is(
    Trait.create({ getString }, complexValue).toString(),
    getString(complexValue),
    'custom `getString` on complex'
  )
})

test('trait[\'@@show\']', t => {
  const getString = JSON.stringify

  const primitiveValue = 'ok'
  const complexValue = {
    a: 1,
    b: 2
  }

  t.is(
    show(Trait.of(primitiveValue)),
    `Trait (${primitiveValue})`,
    'show w/ default `toString`'
  )

  t.is(
    show(Trait.create({ getString }, complexValue)),
    `Trait (${getString(complexValue)})`,
    'show w/ custom `toString`'
  )
})

test('trait.toJSON', t => {
  const getJSON = R.filter(x => x % 2)

  const value = {
    a: 1,
    b: 2
  }

  t.deepEqual(
    Trait.of(value).toJSON(),
    value,
    'default `getValue` method'
  )

  t.deepEqual(
    Trait.create({ getJSON }, value).toJSON(),
    { a: 1 },
    'with ext. toString'
  )
})
