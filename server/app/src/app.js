const Koa = require('koa')

const logger = require('koa-logger')
const bodyparser = require('koa-bodyparser')

function createApp () {
  const app = new Koa()

  app.use(logger())
  app.use(bodyparser())

  return app
}

module.exports = createApp
