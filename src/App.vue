<template>
  <div id="app">
    <header-com></header-com>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderCom from './components/publicComponent/HeaderCom'
export default {
  name: 'App',
  components: {
    HeaderCom
  }
}
</script>

<style lang="less">
#app {
  background-color: #fcfcfc;
  min-height: 100vh;
}
</style>
