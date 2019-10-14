import test from 'ava'

import { FontList } from '../src/Probes'

test('signature', t => {
  t.is(typeof FontList, 'function')
  t.is(typeof FontList(), 'function')
})
