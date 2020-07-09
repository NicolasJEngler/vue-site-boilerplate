<template>
  <div id="app">
    <header>
      <h1>Vue.js site boilerplate</h1>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<!-- This style tag in particular supports Sass because of the lang attribute assigned -->
<style lang="scss">
  $black: #000;
</style>
