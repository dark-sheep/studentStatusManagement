<template>
  <div class="login-wrap">
    <el-form class="login-form" ref="loginForm" :rules="loginFormRules" :model="loginFormData" label-width="80px">
      <el-form-item label="用户名" prop="userId">
        <el-input v-model.number="loginFormData.userId"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input v-model="loginFormData.passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="loginFormData.userType">
          <el-option label="老师" :value="0"></el-option>
          <el-option label="学生" :value="1"></el-option>
          <el-option label="管理员" :value="2"></el-option>
        </el-select>
        <el-button class="login-button" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        loginFormData: {
          userId: '',
          passWord: '',
          userType: 0
        },
        loginFormRules: {
          userId: { required: true, type: 'number', message: '请输入正确的用户名', trigger: 'blur' },
          passWord: { required: true, message: '请输入密码', trigger: 'blur' }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.login-wrap {
  .login-form {
    padding: 100px 0;
    width: 600px;
    margin: 0 auto;
    .login-button {
      float: right;
    }
  }
}
</style>
