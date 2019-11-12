const PouchDB = require('pouchdb')

const adapterMemory = require('pouchdb-adapter-memory')

PouchDB.plugin(adapterMemory)

function createDatabase () {
  const time = Date.now()
  const rand = Math.floor(Math.random() * 1e3)
  const uuid = `records-${time}-${rand}`

  return new PouchDB(uuid, { adapter: 'memory' })
}

module.exports = {
  createDatabase
}
