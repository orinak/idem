const Router = require('koa-router')

const routeCreate = require('./create')
const routeExists = require('./exists')
const routeRead = require('./read')

function createRouter () {
  const router = new Router()

  router
    .post('/:id', routeCreate)
    .head('/:id', routeExists)
    .get('/:id', routeRead)

  return router.routes()
}

module.exports = createRouter
