import test from 'ava'

import { FontList } from '../src/probes'

test('signature', t => {
  t.is(typeof FontList, 'function')
  t.is(typeof FontList(), 'function')
})
