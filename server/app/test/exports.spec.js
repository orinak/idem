import test from 'ava'

import createApp from '..'

test('createApp', t => {
  t.is(typeof createApp, 'function')
})
