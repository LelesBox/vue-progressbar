<template>
  <div id="app">
    <progress-bar background="skyblue"></progress-bar>
    <button type="button" name="button" @click="requst">
      点我访问网络
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    requst: function () {
      console.log('start request')
      this.$http.get('http://localhost:2333/posts/1').then(response => {
        console.log(response)
        console.log('end request')
      })
    }
  }
}
</script>

<style>
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
