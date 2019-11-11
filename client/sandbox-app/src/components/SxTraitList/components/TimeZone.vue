<template lang="pug">
  el-collapse-item
    template(slot="title")
      span {{ name }}
      el-divider(direction="vertical")
      span TimeZone
    dl
      dt Offset
      dd {{ zoneOffset }}

      dt Name
      dd {{ zoneName }}
</template>

<script>
import { TimeZone } from '@pouk/idem-type-trait'

const props = {
  name: String,
  trait: {
    validator: TimeZone.is
  }
}

const computed = {
  zoneName () {
    return this.trait.name
  },
  zoneOffset () {
    const { trait } = this
    return trait.offset
  }
}

export default {
  name: 'SxTraitTimeZone',
  props,
  computed
}
</script>
