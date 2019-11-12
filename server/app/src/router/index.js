const Router = require('koa-router')

const routeList = require('./list')
const routeCreate = require('./create')
const routeExists = require('./exists')
const routeRead = require('./read')

function createRouter () {
  const router = new Router()

  router
    .get('/', routeList)
    .post('/:id', routeCreate)
    .head('/:id', routeExists)
    .get('/:id', routeRead)

  return router.routes()
}

module.exports = createRouter
