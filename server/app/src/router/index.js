const Router = require('koa-router')

const routeCreate = require('./create')

function createRouter () {
  const router = new Router()

  router.post('/:id', routeCreate)

  return router.routes()
}

module.exports = createRouter
