import test from 'ava'

import Trait from '..'

test('constructor', t => {
  t.is(typeof Trait.TimeZone, 'function')
})

test('is', t => {
  const trait = Trait.TimeZone(-240, 'Asia/Yerevan')

  t.true(Trait.is(trait))
  t.true(Trait.TimeZone.is(trait))
})

test('stringify', t => {
  const get = (offset, name) => {
    const trait = Trait.TimeZone(offset, name)
    return Trait.stringify(trait)
  }

  t.is(
    get(-240),
    'Trait.TimeZone(-240,undefined)'
  )

  t.is(
    get(-240, 'Asia/Yerevan'),
    'Trait.TimeZone(-240,"Asia/Yerevan")'
  )
})
