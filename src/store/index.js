//该文件用于创建Vuex中最为核心的store
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作、处理业务逻辑
const actions = {
    getID(context, value) {
        context.commit('GETID', value)
    },
    getNAME(context, value) {
        context.commit('GETNAME', value)
    }
}
//准备mutations对象——修改state中的数据
const mutations = {
    GETID(state, value) {
        state.id = value
    },
    GETNAME(state, value) {
        state.name = value
    }
}
//准备state对象——保存具体的数据
const state = {
    id: '',
    name: '',
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
