<template lang="pug">
el-collapse-item(:disabled="isDisabled")
  template(slot="title")
    | {{ name }}
  code
    pre {{ trait }}
</template>

<script src="./main.js"></script>
