<template>
  <div class="home">
    <img width="48" height="70" alt="Vue logo" src="../assets/logo.png">
    <h2>Homepage</h2><br>
    <p>Vue.js site boilerplate is a project aimed to have a quick and easy way to jumpstart a modern Vue-based website. This boilerplate includes: basic CSS styling, an example component, routing and two different example views.</p>
    <ExampleComponent msg="Vue.js site boilerplate"/>
    <p class="github-star">
      Fork on GitHub
      <github-button href="https://github.com/nicolasjengler/vue-site-boilerplate/fork" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-size="large" aria-label="Fork nicolasjengler/vue-site-boilerplate on GitHub">Fork</github-button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import ExampleComponent from '@/components/ExampleComponent.vue'
import GithubButton from 'vue-github-button'

export default {
  name: 'Home',
  components: {
    ExampleComponent,
    GithubButton
  }
}
</script>

<style scoped>
  img {
    image-rendering: pixelated;
  }

  .github-star > span {
    vertical-align: middle;
  }
</style>