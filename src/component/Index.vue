<template>
  <div id="app">
    <img class="logo" src="./src/assets/logo.png">
    <p>
      Welcome to your Vue.js app!
    </p>
    <child></child>
  </div>
</template>

<script>
    import Child from './Child.vue'
    export default {
        components: {
            Child
        }
    }
</script>

<style scoped>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
