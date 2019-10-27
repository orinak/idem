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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
