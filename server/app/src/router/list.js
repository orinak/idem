const R = require('ramda')

async function routeList (ctx, next) {
  const { db } = ctx

  const recover = R.compose(
    R.identity,
    R.pluck('doc'),
    R.prop('rows')
  )

  const respond = res => {
    ctx.status = 200
    ctx.body = res

    return next()
  }

  return db
    .allDocs({ include_docs: true })
    .then(recover)
    .then(respond)
}

module.exports = routeList
