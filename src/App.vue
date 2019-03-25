<template>
  <div id="app">
    <header-com></header-com>
    <div class="main">
      <div class="side">
        <div class="side-item active"><i class="iconfont iconzhuye"></i>首页</div>
        <div class="side-item"><i class="iconfont icongerenxinxi"></i>个人信息</div>
        <div class="side-item"><i class="iconfont iconxueshengchengjibiao"></i>成绩表</div>
        <div class="side-item"><i class="iconfont iconkechengbiao"></i>课程表</div>
        <div class="side-item"><i class="iconfont iconbanji1"></i>班级成绩</div>
      </div>
      <div class="router">
        <router-view class="router-view"></router-view>
      </div>
    </div>
    
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
  min-height: 100vh;
  font-size: 14px;
  color: #555;
  .main {
    background-color: #fcfcfc;
    position: fixed;
    top: 59px;
    left: 0;
    right: 0;
    bottom: 0;
    .side {
      width: 150px;
      height: 100%;
      background-color: rgb(32, 51, 93);
      color: #fff;
      .side-item {
        padding: 0 20px;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        position: relative;
        .iconfont {
          display: inline-block;
          font-size: 12px;
          padding-right: 5px;
          transform: translateY(-1px);
        }
        &:hover {
          background-color: rgb(26, 41, 74);
        }
        &.active {
          background-color: rgb(26, 41, 74);
          &::after {
            position: absolute;
            content: "";
            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-right: 6px solid #fcfcfc;
            right: 0;
            top: 50%;
            transform: translateY(-50%)
          }
        }
      }
    }
    .router {
      position: absolute;
      top: 0;
      left: 150px;
      right: 0;
      bottom: 0;
      overflow: auto;
      padding: 0 20px;
      .router-view {
        width: 1000px;
        margin: 50px auto 0;
      }
    }
    
  }
  
}
</style>
