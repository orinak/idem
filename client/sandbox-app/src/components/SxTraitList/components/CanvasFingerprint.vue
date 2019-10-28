<template lang="pug">
  el-collapse-item
    template(slot="title")
      span {{ name }}
      el-divider(direction="vertical")
      span CanvasFingerprint
    div
      el-tabs
        el-tab-pane(label="Image")
          el-image(
            :src="dataURI"
            :preview-src-list="[dataURI]"
          )
        el-tab-pane(label="Source")
          code {{ dataURI }}
      div
        el-tag(
          v-for="feature in features"
          :key="feature"
          theme="plain"
          type="success"
        )
          | {{ feature }}
</template>

<script>
import { CanvasFingerprint } from '@pouk/idem-type-trait'

const props = {
  name: String,
  trait: {
    validator: CanvasFingerprint.is
  }
}

const computed = {
  dataURI () {
    const { dataURI } = this.trait
    return dataURI
  },
  features () {
    const { features } = this.trait
    return features
  }
}

export default {
  name: 'SxTraitCanvasFingerprint',
  props,
  computed
}
</script>
