const R = require('ramda')

async function routeCreate (ctx, next) {
  const { db } = ctx
  const { id } = ctx.params
  const { body } = ctx.request

  const doc = R.assoc('_id', id, body)

  const respond = res => {
    ctx.status = 204
    return next()
  }

  return db
    .put(doc)
    .then(respond)
}

module.exports = routeCreate
