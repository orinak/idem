import * as R from 'ramda'

import runner from '@pouk/idem-client-runner'
import probes from '@pouk/idem-client-probes'

import SxTraitList from '@/components/SxTraitList'
import SxDigest from '@/components/SxDigest'

const data = R.always({
  probes,
  config: {},
  traits: undefined
})

const methods = {
  run () {
    const { probes, config } = this

    const set = results => {
      this.traits = results
    }

    return runner(probes, config)
      .promise()
      .then(set)
  }
}

export default {
  name: 'SandboxView',
  data,
  methods,
  components: {
    SxTraitList,
    SxDigest
  }
}
