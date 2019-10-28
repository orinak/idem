<template lang="pug">
  div#app
    sandbox-view
</template>

<script>
import SandboxView from './views/Sandbox'

export default {
  name: 'app',
  components: {
    SandboxView
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 60px auto 0px;
  width: 1000px;
}
</style>
