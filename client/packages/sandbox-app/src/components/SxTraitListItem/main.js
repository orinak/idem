import Trait from '@pouk/idem-type-trait'

const props = {
  name: String,
  trait: Object
}

const computed = {
  isDisabled () {
    const { trait } = this
    return Trait.Nothing.is(trait)
  }
}

export default {
  name: 'SxTraitListItem',
  props,
  computed
}
