<template>
  <div id="app">
    <keep-alive include="LoginPage,RegisterPage">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
