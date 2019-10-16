import test from 'ava'

import { UserAgent } from '../src/Probes'

const WINDOW = {
  navigator: { userAgent: 'Mozilla/5.0 ...' }
}

test.beforeEach(t => {
  global.window = WINDOW
})

test('signature', t => {
  t.is(typeof UserAgent, 'function')
  t.is(typeof UserAgent(t.context), 'function')
})

test('result', t => {
  const get = UserAgent()

  t.is(get(), WINDOW.navigator.userAgent)
})
