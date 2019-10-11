import test from 'ava'

import Fingerprint from '../src/Fingerprint'

test.beforeEach(t => {
  global.window = {
    navigator: { userAgent: 'Mozilla/5.0 ...' }
  }
})

test('constructor', t => {
  t.is(typeof Fingerprint, 'function')

  t.true(new Fingerprint() instanceof Fingerprint, 'w/ `new`')
  t.true(Fingerprint() instanceof Fingerprint, 'w/o `new`')
})

test('toString', t => {
  const fx = new Fingerprint()

  t.is(typeof fx.toString, 'function')
  t.is(typeof fx.toString(), 'string')
})

test('toJSON', t => {
  const data = { key: 'value' }
  const fx = new Fingerprint(data)

  t.is(typeof fx.toJSON, 'function')

  t.deepEqual(fx.toJSON(), data)
})
