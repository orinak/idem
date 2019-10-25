import test from 'ava'

import Future from 'fluture'

import runner from '..'

import Trait from '@pouk/idem-type-trait'

test('signature', t => {
  t.is(typeof runner, 'function')
  t.is(typeof runner({}), 'function', 'curried')

  const task = runner({}, {})
  t.true(Future.isFuture(task))
})

test('results', async t => {
  const config = {
    b: { x: 2 }
  }

  const probeFactories = {
    b: ({ x }) => Future.resolve(x * 2),
    a: () => Future.resolve(1)
  }

  await runner(probeFactories, config)
    .promise()
    .then(res => {
      t.deepEqual(res, { a: 1, b: 4 })
      t.deepEqual(Object.keys(res), ['a', 'b'], 'key order')
    })
})

test('handle failed', async t => {
  const probeFactories = {
    b: () => Future.reject(2),
    a: () => Future.resolve(1)
  }

  await runner(probeFactories, null)
    .promise()
    .then(res => {
      t.true(Trait.Nothing.is(res.b))
    })
})
