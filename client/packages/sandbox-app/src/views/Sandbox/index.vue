<template lang="pug">
  div
    h3 Sandbox
    div
      el-button(@click="run") Run
    div(v-if="traits")
      el-card
        div(slot="header")
          span Digest
        sx-digest(:traits="traits")
      el-card
        div(slot="header")
          span TraitList
        sx-trait-list(:traits="traits")
</template>

<script src="./main.js"></script>
