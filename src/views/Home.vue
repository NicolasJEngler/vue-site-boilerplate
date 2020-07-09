<template>
  <div class="home">
    <img width="48" height="70" alt="Vue logo" src="../assets/logo.png">
    <h2>Homepage</h2><br>
    <p>Vue.js site boilerplate is a project aimed to have a quick and easy way to jumpstart a modern Vue-based website. This boilerplate includes: basic CSS styling, an example component, routing and two different example views.</p>
    <ExampleComponent msg="Vue.js site boilerplate"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExampleComponent from '@/components/ExampleComponent.vue'

export default {
  name: 'Home',
  components: {
    ExampleComponent
  }
}
</script>

<style scoped>
  img {
    image-rendering: pixelated;
  }
</style>