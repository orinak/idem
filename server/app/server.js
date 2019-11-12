const createApp = require('.')

const PORT = process.env.NODE_PORT || 8080

const app = createApp()

app.listen(PORT, err => {
  if (err) {
    throw err
  }

  console.log(`Server running on http://localhost:${PORT}`)
})
