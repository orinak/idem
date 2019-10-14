import test from 'ava'

import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import getPort from 'get-port'
import puppeteer from 'puppeteer'

import webpackConfig from '../webpack.config.js'

let server
let url
let browser

test.before(async () => {
  // run server on available port
  server = new WebpackDevServer(webpack(webpackConfig), { noInfo: true })

  url = await new Promise((resolve, reject) => {
    getPort()
      .then(port => {
        const host = 'localhost'

        server.listen(port, host, err => {
          return err
            ? reject(err)
            : resolve(`http://${host}:${port}/`)
        })
      })
  })

  // launch browser instance
  browser = await puppeteer.launch({
    // headless: false,
    // slowMo: 250
  })
})

test.after(async () => {
  browser.close()
  server.close()
})

test.beforeEach(async t => {
  const page = await browser.newPage()

  t.context = {
    url,
    page
  }
})

test.afterEach.always(async t => {
  const { page } = t.context

  await page.close()
})

test('initial', async t => {
  const { url, page } = t.context

  const getFromPage = () => {
    const { Agent } = window.Idem
    return Agent().detect()
  }

  await page.goto(url)

  const { id, data } = await page.evaluate(getFromPage)

  //

  t.is(typeof id, 'string')

  t.not(data.UserAgent, undefined)
  t.not(data.TimezoneOffset, undefined)
  t.not(data.FontList, undefined)
})
