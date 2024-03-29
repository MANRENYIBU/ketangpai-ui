//该文件用于创建Vuex中最为核心的store
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules: {
        user
    },
    getters
})
