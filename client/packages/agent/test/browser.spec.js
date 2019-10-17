import test from 'ava'

import puppeteer from 'puppeteer'

import getPort from 'get-port'

import { serve } from './helpers/webpack-dev-server'

// settings

const SERVER_OPTIONS = {
  noInfo: true
}

const BROWSER_OPTIONS = {
  // headless: false,
  // slowMo: 250
}

// hooks

test.before(async t => {
  const host = 'localhost'
  const port = await getPort()

  const server = await serve(port, host, SERVER_OPTIONS)
  const browser = await puppeteer.launch(BROWSER_OPTIONS)

  t.context = {
    address: `http://${host}:${port}`,
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
  const { address, page } = t.context

  await page.goto(address)

  const getAgentProperites = () => {
    const Agent = window.IdemTestLibrary
    const agent = new Agent()

    return Object.keys(agent)
  }

  const results = await page.evaluate(getAgentProperites)

  t.true(results.includes('probes'))
})
