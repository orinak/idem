import test from 'ava'

import puppeteer from 'puppeteer'

import serveDev from '@pouk/idem-config-webpack-test/src/helpers/serve'

const BROWSER_OPTIONS = {
  // headless: false,
  // slowMo: 250
}

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

test('initial', async t => {
  const { host, page } = t.context

  const getFromPage = () => {
    const { Agent } = window.IdemTestLibrary
    return Agent().detect()
  }

  await page.goto(host)

  const { id, data } = await page.evaluate(getFromPage)

  //

  t.is(typeof id, 'string')

  t.not(data.UserAgent, undefined)
  t.not(data.TimezoneOffset, undefined)
  t.not(data.SystemFonts, undefined)
  t.not(data.NavigatorPlugins, undefined)
})
