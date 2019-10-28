<template lang="pug">
  el-collapse-item
    template(slot="title")
      span {{ name }}
      el-divider(direction="vertical")
      span GenericTrait
    code
      pre {{ value }}
</template>

<script>
import { GenericTrait } from '@pouk/idem-type-trait'

const props = {
  name: String,
  trait: {
    validator: GenericTrait.is
  }
}

const computed = {
  value () {
    const { trait } = this
    return trait.value
  }
}

export default {
  name: 'SxTraitGenericTrait',
  props,
  computed
}
</script>
