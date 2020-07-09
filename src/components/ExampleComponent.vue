<template>
  <div class="hello">
    <h3>Example Component</h3><br>
    <p>
      Here's a message set up via props for this component in particular: <code>{{ msg }}</code>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
