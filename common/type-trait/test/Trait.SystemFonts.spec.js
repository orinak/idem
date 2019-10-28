import test from 'ava'

import Trait from '..'

test('constructor', t => {
  t.is(typeof Trait.SystemFonts, 'function')
})

test('is', t => {
  const trait = Trait.SystemFonts(['Arial'], false)

  t.true(Trait.is(trait))
  t.true(Trait.SystemFonts.is(trait))
})

test('stringify', t => {
  const get = value => {
    const trait = Trait.SystemFonts(value, false)
    return Trait.stringify(trait)
  }

  t.is(
    get([]),
    'Trait.SystemFonts([],false)'
  )

  t.is(
    get(['Arial']),
    'Trait.SystemFonts(["Arial"],false)'
  )

  t.is(
    get(['DejaVu Sans', 'Arial']),
    'Trait.SystemFonts(["Arial","DejaVu Sans"],false)'
  )
})
