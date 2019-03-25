<template>
    <div class="header">
      <div class="left">
        学籍管理系统
      </div>
      <div class="right">
        <div class="user">
          <img src="../../../assets/images/avatar.png" alt="">
          <span class="username">张知洋</span>
          <span class="logout">退出</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'index.vue'
    }
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
  line-height: 59px;
  height: 59px;
  display: flex;
  width: 100vw;
  .left {
    width: 150px;
    font-size: 18px;
    text-align: center;
    font-family: "黑体";
    background-color: #357dcf;
    border-bottom: 1px solid #357dcf;
    color: #fff;
  }
  .right {
    flex: 1;
    border-bottom: 1px solid #ccc;
    .user {
      float: right;
      padding-right: 50px;
      img {
        width: 20px;
        transform: translateY(5px)
      }
      .username {
        padding-right: 20px;
      }
      .logout {
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
