import test from 'ava'

import puppeteer from 'puppeteer'

import serveDev from '@pouk/idem-config-webpack-test/src/helpers/serve'

// settings

const BROWSER_OPTIONS = {
  // headless: false,
  // slowMo: 250
}

const PLUGINS = [
  {
    name: 'Chrome PDF Viewer',
    description: '',
    filename: 'mhjfbmdgcfjbbpaeojofohoefgiehjai'
  },
  {
    description: '',
    filename: 'internal-nacl-plugin',
    name: 'Native Client',
    version: '0.1.0'
  }
]

// hooks

test.before(async t => {
  const { host, server } = await serveDev()
  const browser = await puppeteer.launch(BROWSER_OPTIONS)

  t.context = {
    host,
    server,
    browser
  }
})

test.after.always(async t => {
  const { browser, server } = t.context

  await browser.close()
  await server.close()
})

test.beforeEach(async t => {
  const { host, browser } = t.context

  const page = await browser.newPage()
  await page.goto(host)

  t.context.page = page
})

test.afterEach.always(async t => {
  const { page } = t.context
  await page.close()
})

// tests

test('predefined result', async t => {
  const { page } = t.context

  await page.evaluate(plugins => {
    const stub = { get: () => plugins }
    Object.defineProperty(navigator, 'plugins', stub)
  }, PLUGINS)

  const examine = () => {
    const Probe = window.IdemTestLibrary

    return Probe()
      .map(res => ({
        str: res.toString(),
        val: res.toJSON()
      }))
      .promise()
  }

  await page
    .evaluate(examine)
    .then(res => {
      t.is(typeof res.str, 'string')
      t.true(Array.isArray(res.val))
    })
})
