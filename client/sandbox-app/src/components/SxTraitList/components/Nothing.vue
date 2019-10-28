<template lang="pug">
  el-collapse-item(:disabled="true")
    template(slot="title")
      span {{ name }}
      el-divider(direction="vertical")
      span Nothing
</template>

<script>
import { Nothing } from '@pouk/idem-type-trait'

const props = {
  name: String,
  trait: {
    validator: Nothing.is
  }
}

export default {
  name: 'SxTraitNothing',
  props
}
</script>
