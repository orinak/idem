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
  const { browser } = t.context
  t.context.page = await browser.newPage()
})

test.afterEach.always(async t => {
  const { page } = t.context
  await page.close()
})

// tests

test('results', async t => {
  const { host, page } = t.context

  await page.goto(host)

  const getFontList = () => {
    const factory = window.IdemTestLibrary
    const probe = factory()

    return probe()
  }

  const results = await page.evaluate(getFontList)

  t.true(Array.isArray(results))
})
