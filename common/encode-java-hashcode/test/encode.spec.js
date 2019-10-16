import test from 'ava'

import encode from '..'

test('basic', t => {
  t.is(typeof encode('text'), 'string')
})
