import test from 'ava'

import Agent from '..'

test('constructor', t => {
  t.true(new Agent() instanceof Agent)
  t.true(Agent() instanceof Agent)
})
