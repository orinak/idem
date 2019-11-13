import test from 'ava'

import { createDatabase } from './helpers/db'

import routeList from '../src/router/list'

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
  t.context.params = {}
  t.context.status = 404
})

test('ok', async t => {
  const ctx = t.context

  await ctx.db.put(Object.assign({ _id: ID }, BODY))

  await routeList(ctx, noopAsync)

  // check response
  t.is(ctx.status, 200)

  t.true(Array.isArray(ctx.body))
  t.is(ctx.body.length, 1)
})
