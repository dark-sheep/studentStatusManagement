<template>
  <div id="app">
    <header-com></header-com>
    <router-view class="router-view"></router-view>
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
  font-size: 14px;
  color: #555;
  .router-view {
    width: 1000px;
    margin: 50px auto 0;
  }
}
</style>
