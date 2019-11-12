import test from 'ava'

import { createDatabase } from './helpers/db'

import routeCreate from '../src/router/create'

const DATA = {
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
  t.context.params = { id: 'xxx' }
  t.context.status = 404
  t.context.request = { body: DATA }
})

test('ok', async t => {
  const ctx = t.context

  await routeCreate(ctx, noopAsync)

  // check response
  t.is(ctx.status, 204)

  // check db
  await ctx.db
    .get(ctx.params.id)
    .then(doc => {
      const { body } = ctx.request
      for (const key in body) {
        t.deepEqual(doc[key], body[key])
      }
    })
})

test('conflict', async t => {
  const ctx = t.context

  await t.notThrowsAsync(() => routeCreate(ctx, noopAsync))
  await t.throwsAsync(() => routeCreate(ctx, noopAsync))
    .then(err => t.is(err.status, 409))
})
