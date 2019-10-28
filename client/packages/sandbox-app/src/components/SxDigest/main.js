import * as R from 'ramda'

import Digest from '@pouk/idem-type-digest'

// helpers

const tagOf = R.prop('@@tag')

//

const props = {
  digest: {
    validator: Digest.is
  }
}

const filters = {
  slices: R.compose(R.join(' '), R.splitEvery(4))
}

const computed = {
  tag () {
    return tagOf(this.digest)
  },
  value () {
    const { digest } = this

    const valueOf = {
      MurmurHash3: R.identity
    }

    return digest.cata(valueOf)
  }
}

export default {
  name: 'SxDigest',
  props,
  computed,
  filters
}
