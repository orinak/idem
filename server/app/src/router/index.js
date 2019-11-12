const Router = require('koa-router')

const routeCreate = require('./create')
const routeExists = require('./exists')

function createRouter () {
  const router = new Router()

  router
    .post('/:id', routeCreate)
    .head('/:id', routeExists)

  return router.routes()
}

module.exports = createRouter
