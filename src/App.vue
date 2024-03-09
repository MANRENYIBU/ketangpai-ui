<template>
  <div id="app">
    
    <keep-alive include="LoginPage,RegisterPage">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
