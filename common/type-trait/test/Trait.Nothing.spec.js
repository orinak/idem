import test from 'ava'

import Trait from '..'

const { Nothing } = Trait

test('is', t => {
  const trait = Nothing

  t.true(Trait.is(trait))
  t.true(Nothing.is(trait))
})

test('stringify', t => {
  t.is(
    Trait.stringify(Nothing),
    'Trait.Nothing'
  )
})
