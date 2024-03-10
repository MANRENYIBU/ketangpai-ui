<template>
  <div>
    <el-card class="login-form-layout">
      <h2>注册账号</h2>
      <p>请选择您在日常教学中的实际身份</p>
      <div style="margin-top: 20px">
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="6">
            <div>
              <i class="el-icon-s-custom icon"></i>
            </div>
          </el-col>
          <el-col :span="18">
            <el-button type="primary" style="width: 100%" @click="handleRole(2)"
              >我是老师/助教</el-button
            ></el-col
          >
        </el-row>
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="6">
            <div>
              <i class="el-icon-user-solid icon"></i>
            </div>
          </el-col>
          <el-col :span="18">
            <el-button type="primary" style="width: 100%" @click="handleRole(3)"
              >我是学生</el-button
            ></el-col
          >
        </el-row>
        <div class="isLogin">
          <el-link type="info" disabled>已有帐户?</el-link>
          <el-link type="primary" @click="registerHandle">去登录</el-link>
        </div>
      </div>
    </el-card>
  </div>
</template>


<script>
export default {
  name: 'register',
  data () {
    return {
      role: null,
    }
  },
  methods: {
    handleRole (role) {
      this.role = role
    },
  },
}
</script>


<style scoped>
.el-row {
  margin-bottom: 20px;
}
.icon {
  font-size: 50px;
  color: rgb(50, 186, 240);
}
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
}
.isLogin {
  text-align: right;
}
</style>