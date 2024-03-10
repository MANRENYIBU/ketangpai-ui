import { getToken } from "@/utils/auth"
import { login } from "@/api/login"

const user = {
  state: {
    id: 0,
    account: '',
    email: '',
    telephone: '',
    token: getToken(),
    roles: []
  },
  //修改user数据
  mutations: {
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_ACCOUNT: (state, account) => {
      state.account = account
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_TELEPHONE: (state, telephone) => {
      state.telephone = telephone
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.id = user.id
      state.name = user.name
      state.email = user.email
      state.telephone = user.telephone
      state.roles = user.roles
    }
  },
  actions: {
    // 登录
    Login ({ commit }, userInfo) {
      const valus = {
        account: userInfo.account.trim(),
        password: userInfo.password,
        rememberMeOrNot: userInfo.rememberMeOrNot,
        type: userInfo.type
      }
      return new Promise((resolve, reject) => {
        login(valus).then(response => {
          if (response.code === 200) {
            const data = response.data
            commit('SET_USER', data)
            commit('SET_TOKEN', getToken())
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}


export default user