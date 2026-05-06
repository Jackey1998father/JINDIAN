<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
}
</style>