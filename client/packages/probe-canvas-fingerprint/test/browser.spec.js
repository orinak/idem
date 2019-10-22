import test from 'ava'

import puppeteer from 'puppeteer'

import serveDev from '@pouk/idem-config-webpack-test/src/helpers/serve'

// settings

const BROWSER_OPTIONS = {
  // headless: false,
  // slowMo: 250
}

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

  const examine = () => {
    const factory = window.IdemTestLibrary
    const probe = factory()

    return probe().then(String)
  }

  await page
    .evaluate(examine)
    .then(res => {
      t.regex(res, /data:image\/png;base64,(.*)/)
    })
})
