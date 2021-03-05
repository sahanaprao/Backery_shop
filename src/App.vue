<template>
  <div id="app">
    <bakery></bakery>
  </div>
</template>

<script>
import bakery  from './components/Bakery.vue'

export default {
  name: 'App',
  components: {
    bakery
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 20px;
  }
</style>
