import test from 'ava'

import Trait from '..'

test('Trait', t => {
  t.is(typeof Trait, 'function')
})

test('Trait.create', t => {
  const { create } = Trait

  t.is(typeof Trait.create, 'function')

  // normal

  t.true(create('k', 'v') instanceof Trait)

  // curried

  const createWithKey = Trait.create('k')
  t.is(typeof createWithKey, 'function')
  t.true(createWithKey('v') instanceof Trait)
})

test('Trait.createCustom', t => {
  const { createCustom } = Trait

  // type

  t.is(typeof createCustom, 'function')

  // normal

  t.true(createCustom('k', 'v', x => x) instanceof Trait)

  // curried

  const createWithKey = Trait.createCustom('k')
  t.is(typeof createWithKey, 'function')
  t.true(createWithKey('v', x => x) instanceof Trait)

  const createWithKV = Trait.createCustom('k', 'v')
  t.is(typeof createWithKV, 'function')
  t.true(createWithKV(x => x) instanceof Trait)
})

test('trait.toString', t => {
  const key = 'SystemFonts'
  const value = [
    'Courier',
    'DejaVu Sans Mono'
  ]
  const serialize = value => '[' + value.join(', ') + ']'

  t.is(
    String(Trait(key, value)),
    '(SystemFonts: Courier,DejaVu Sans Mono)',
    'default toString method'
  )

  t.is(
    String(Trait(key, value, serialize)),
    '(SystemFonts: [Courier, DejaVu Sans Mono])',
    'custom serialize function'
  )
})
