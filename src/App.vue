<!--
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-07-06 09:07:03
 * @LastEditors: superDragon
 * @LastEditTime: 2019-07-06 09:07:03
 -->
<template>
  <div id="app">
    <encode />
  </div>
</template>

<script>
import encode from './components/encode.vue'

export default {
  name: 'app',
  components: {
    encode
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
