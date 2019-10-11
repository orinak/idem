import test from 'ava'

import { TimezoneOffset } from '../src/probes'

test('signature', t => {
  t.is(typeof TimezoneOffset, 'function')
  t.is(typeof TimezoneOffset(t.context), 'function')
})

test('result', t => {
  const get = TimezoneOffset()

  t.is(get(), new Date().getTimezoneOffset())
})
