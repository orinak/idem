const PouchDB = require('pouchdb')

const memoryAdapter = require('pouchdb-adapter-memory')

const createApp = require('.')

//

const PORT = process.env.NODE_PORT || 8080

//

PouchDB.plugin(memoryAdapter)

const db = new PouchDB('records', { adapter: 'memory' })

//

const app = createApp({ db })

//

app.listen(PORT, err => {
  if (err) {
    throw err
  }

  console.log(`Server running on http://localhost:${PORT}`)
})
