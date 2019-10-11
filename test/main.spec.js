import test from 'ava'

import { Fingerprint, render } from '../src'

const WINDOW = {
  navigator: { userAgent: 'Mozilla/5.0 ...' }
}

test.beforeEach(t => {
  global.window = WINDOW
})

test('render', t => {
  const res = render()

  t.true(res instanceof Fingerprint)
})
