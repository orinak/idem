import test from 'ava'

import puppeteer from 'puppeteer'

import serveDev from '@pouk/idem-config-webpack-test/src/helpers/serve'

// hooks

test.before(async t => {
  t.context = await serveDev()
})

test.after.always(async t => {
  const { server } = t.context

  await server.close()
})

// tests

test('predefined result (serialized)', async t => {
  const { host } = t.context

  const browser = await puppeteer.launch()

  const page = await browser.newPage()
  await page.goto(host)

  const examine = () => {
    const Probe = window.IdemTestLibrary

    return Probe()
      .map(String)
      .promise()
  }

  await page
    .evaluate(examine)
    .then(res => {
      const re = /^Trait.GenericTrait\("data:image\/png;base64,(.*)"\)$/
      t.regex(res, re)
    })

  await browser.close()
})

test('with disabled reading from canvas', async t => {
  const { host } = t.context

  const args = [
    '--disable-reading-from-canvas'
  ]
  const browser = await puppeteer.launch({ args })

  const page = await browser.newPage()
  await page.goto(host)

  const examine = () => {
    const Probe = window.IdemTestLibrary

    return Probe()
      .map(String)
      .promise()
  }

  await page
    .evaluate(examine)
    .then(res => {
      t.is(res, 'Trait.Nothing')
    })

  // dispose

  await browser.close()
})
