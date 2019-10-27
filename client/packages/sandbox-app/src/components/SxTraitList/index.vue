<template lang="pug">
  el-collapse
    sx-trait-list-item(
      v-for="(trait, name) in traits"
      :key="name"
      :name="name"
      :trait="trait"
    )
</template>

<script src="./main.js"></script>
