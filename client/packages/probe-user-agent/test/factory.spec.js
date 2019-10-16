import test from 'ava'

import factory from '..'

test('signature', t => {
  t.is(typeof factory, 'function')
  t.is(typeof factory(), 'function')
})
