import Digest from '@pouk/idem-type-digest'

const props = {
  traits: Object
}

const computed = {
  value () {
    const { traits } = this

    if (!traits) return undefined

    return Digest.MurmurHash3.fromObject(traits)
  }
}

export default {
  name: 'SxDigest',
  props,
  computed
}
