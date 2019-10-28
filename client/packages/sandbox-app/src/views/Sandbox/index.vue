<template lang="pug">
  div
    el-row(
      v-if="traits"
      :gutter="20"
    )
      el-col(:span="10")
        sx-digest(:digest="digest")
      el-col(:span="14")
        sx-trait-list(:traits="traits")
    div.align-center(v-else)
      el-button(@click="run") Run
</template>

<script src="./main.js"></script>
