<template lang="pug">
  el-card
    div(slot="header")
      span TraitList
    el-collapse
      component(
        v-for="(trait, key) in traits"
        :is="variantOf(trait)"
        :key="key"
        :name="key"
        :trait="trait"
      )
</template>

<script src="./main.js"></script>
