<template>
  <div id="app">
    <img src="./imgui.png">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  height: 100vh;
  background-color: #d5e9ed;
}
</style>
