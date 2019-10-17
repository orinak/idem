import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import config from '@pouk/idem-config-webpack-test'

async function serve (port, host, opts) {
  const assets = webpack(config)

  const server = new WebpackDevServer(assets, opts)

  const listen = (resolve, reject) => {
    const callback = (err, ok) => {
      return err
        ? reject(err)
        : resolve(server)
    }

    server.listen(port, host, callback)
  }

  return new Promise(listen)
}

export { serve }
