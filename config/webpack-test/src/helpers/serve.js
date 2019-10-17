const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const getPort = require('get-port')

const config = require('../..')

// settings

const OPTIONS = {
  noInfo: true
}

/**
 * Create and launch a webpack-dev-server
 *
 * @param {Number} [port]
 * @param {String} [host]
 * @param {Object} [opts]
 *
 * @returns {Promise<WebpackDevServer>}
 */

async function serve (port, hostname, opts = {}) {
  port = port || process.env.NODE_PORT || await getPort()
  hostname = hostname || 'localhost'

  const host = `http://${hostname}:${port}`

  const assets = webpack(config)
  const options = Object.assign({}, OPTIONS, opts)
  const server = new WebpackDevServer(assets, options)

  const listen = (resolve, reject) => {
    const callback = (err, ok) => {
      return err
        ? reject(err)
        : resolve({ host, server })
    }

    server.listen(port, hostname, callback)
  }

  return new Promise(listen)
}

// expose `serve`

module.exports = serve
