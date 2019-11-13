import test from 'ava'

import { createDatabase } from './helpers/db'

import routeRead from '../src/router/read'

const ID = 'xxx'

const BODY = {
  TimeZone: {
    offset: -240,
    name: 'Asia/Yerevan'
  },
  SystemFonts: [
    'Arial',
    'Arial Black',
    'DejaVu Sans'
  ]
}

const noopAsync = async x => x

test.beforeEach(async t => {
  t.context.db = createDatabase()
  t.context.params = { id: ID }
  t.context.status = 404
})

test('ok', async t => {
  const ctx = t.context

  await ctx.db.put(Object.assign({ _id: ID }, BODY))

  await routeRead(ctx, noopAsync)

  // check response
  t.is(ctx.status, 200)

  for (const key in BODY) {
    t.deepEqual(ctx.body[key], BODY[key])
  }
})

test('not found', async t => {
  const ctx = t.context

  await t.throwsAsync(() => routeRead(ctx, noopAsync))
    .then(err => t.is(err.status, 404))
})
