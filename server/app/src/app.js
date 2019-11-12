const Koa = require('koa')

const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')

/**
 * Create a Koa app instance
 *
 * @param {Object} opts
 * @param {PouchDB} db
 *
 * @returns {Koa}
 */

function createApp (opts) {
  const app = new Koa()

  app.context.db = opts.db

  app.use(logger())
  app.use(bodyparser())

  app.use(async ctx => {
    ctx.body = await ctx.db.allDocs()
  })

  return app
}

module.exports = createApp
