<template>
  <div>
    <el-card class="login-form-layout">
      <el-tabs activate-name="type">
        <el-tab-pane label="账户登录" name="0">
          <el-form
            autocomplete="on"
            :model="loginForm"
            :rules="loginRules"
            ref="loginForm"
            label-position="left"
            style="margin-top: 20px"
          >
            <el-form-item prop="account">
              <el-input
                name="account"
                type="text"
                clearable
                v-model="loginForm.account"
                autoComplete="on"
                placeholder="请输入电话/邮箱/用户名"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                name="password"
                type="password"
                clearable
                show-password
                @keyup.enter.native="handleLogin"
                v-model="loginForm.password"
                autoComplete="on"
                placeholder="请输入密码"
              >
              </el-input>
            </el-form-item>
            <div class="extra">
              <el-checkbox v-model="rememberMeOrNot">是否记住我</el-checkbox>
              <el-link type="info">忘记密码</el-link>
            </div>
            <el-form-item>
              <el-button
                style="width: 100%"
                type="primary"
                :loading="loading"
                @click="handleLogin"
              >
                登录
              </el-button>
            </el-form-item>
          </el-form>
          <div class="isRegister">
            <el-link type="info" disabled>还没有账号?</el-link>
            <el-link type="primary" @click="registerHandle">立即注册</el-link>
          </div>
        </el-tab-pane>
        <el-tab-pane label="短信登录" name="1"></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>


<script>
import { validatenull } from '@/utils/validate'

export default {
  name: 'login',
  data () {
    const validateAccount = (rule, value, callback) => {
      if (!validatenull(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的账户'))
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码不能小于3位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        account: '',
        password: '',
      },
      loginRules: {
        account: [
          { required: true, message: '请输入账户', trigger: 'blur', validator: validateAccount },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur', validator: validatePass },
        ],
      },
      loading: false,
      rememberMeOrNot: false,
      type: '0'
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', {
            ...this.loginForm,
            rememberMeOrNot: this.rememberMeOrNot,
            type: Number(this.type)
          }).then((response) => {
            if (response.code === 200) {
              this.$message({
                type: 'success',
                showClose: true,
                message: response.msg
              })
              // this.$router.push({ path: '/' })
            } else {
              this.$message({
                type: 'error',
                showClose: true,
                message: response.msg
              })
            }
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          return false
        }
      })
    },
    registerHandle () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>


<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
}
.extra {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}
.isRegister {
  text-align: right;
}
/*去下划线 */
::v-deep .el-tabs__nav-wrap::after {
  position: static !important;
}

::v-deep .el-tabs__item.is-active {
  font-size: 20px;
}
</style>
