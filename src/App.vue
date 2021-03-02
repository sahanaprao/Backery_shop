<template>
  <div id="app">
  <backery></backery>
  </div>
</template>

<script>
import backery  from './components/Backery.vue'

export default {
  name: 'App',
  components: {
    backery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
