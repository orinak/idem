<template lang="pug">
  el-collapse-item
    template(slot="title")
      span {{ name }}
      el-divider(direction="vertical")
      span SystemFonts
    div
      dl
        dt Is complete
        dd {{ isComplete }}
      ul
        li(
          v-for="font in fontList"
          :key="font"
        )
          | {{ font }}
</template>

<script>
import { SystemFonts } from '@pouk/idem-type-trait'

const props = {
  name: String,
  trait: {
    validator: SystemFonts.is
  }
}

const computed = {
  isComplete () {
    return this.trait.isComplete
  },
  fontList () {
    const { fontList } = this.trait
    return fontList
  }
}

export default {
  name: 'SxTraitSystemFonts',
  props,
  computed
}
</script>
