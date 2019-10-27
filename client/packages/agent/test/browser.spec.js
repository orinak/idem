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

  await page.on('console', msg => console.log(msg.text()))

  t.context.page = page
})

test.afterEach.always(async t => {
  const { page } = t.context
  await page.close()
})

// tests

test('result', async t => {
  const { page } = t.context

  const detect = () => {
    const Agent = window.IdemTestLibrary
    const agent = new Agent()

    const format = ({ id, data }) => ({ id: id.toString(), data })

    return agent
      .detect()
      .map(format)
      .promise()
  }

  const res = await page.evaluate(detect)

  t.is(typeof res.id, 'string')
  t.is(typeof res.data, 'object')
})
