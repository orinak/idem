import test from 'ava'

import { createDatabase } from './helpers/db'

import routeExists from '../src/router/exists'

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

  await routeExists(ctx, noopAsync)

  // check response
  t.is(ctx.status, 200)
})

test('not found', async t => {
  const ctx = t.context

  await t.throwsAsync(() => routeExists(ctx, noopAsync))
    .then(err => t.is(err.status, 404))
})
