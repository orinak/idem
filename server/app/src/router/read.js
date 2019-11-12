async function routeCreate (ctx, next) {
  const { db } = ctx
  const { id } = ctx.params

  const respond = res => {
    ctx.status = 200
    ctx.body = res

    return next()
  }

  return db
    .get(id)
    .then(respond)
}

module.exports = routeCreate
