import test from 'ava'

import Digest from '..'

test('@@tags', t => {
  t.is(typeof Digest.MurmurHash3, 'function')
})
