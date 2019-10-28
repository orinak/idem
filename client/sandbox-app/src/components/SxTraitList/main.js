import * as components from './components'

const props = {
  traits: Object
}

const computed = {
  variantOf () {
    return trait => trait['@@tag']
  }
}

export default {
  name: 'SxTraitList',
  components,
  props,
  computed
}
