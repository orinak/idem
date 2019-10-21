import test from 'ava'

import puppeteer from 'puppeteer'

import serveDev from '@pouk/idem-config-webpack-test/src/helpers/serve'

// settings

const BROWSER_OPTIONS = {
  // headless: false,
  // slowMo: 250
}

const MIME_TYPES = [
  {
    description: '',
    suffixes: 'pdf',
    type: 'application/pdf'
  },
  {
    description: 'Native Client Executable',
    suffixes: '',
    type: 'application/x-nacl'
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

test('predefined result (serialized)', async t => {
  const { page } = t.context

  await page.evaluate(plugins => {
    const stub = { get: () => plugins }
    Object.defineProperty(navigator, 'mimeTypes', stub)
  }, MIME_TYPES)

  const examine = () => {
    const factory = window.IdemTestLibrary
    const probe = factory()

    return probe().then(String)
  }

  await page
    .evaluate(examine)
    .then(res => {
      t.regex(res, /(MimeTypes: (.*))/)
    })
})
