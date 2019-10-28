<template lang="pug">
  el-card(shadow="hover")
    div.clearfix(slot="header")
      span Digest
      span.pull-right
        el-tooltip(
          :content="tag"
          placement="left"
        )
          i.el-icon-info
    code.text {{ value | slices }}
</template>

<script src="./main.js"></script>

<style scoped>
.text {
  font-size: 14px;
  text-align: center;
  display: block;
  line-height: 2.0;
}
</style>
