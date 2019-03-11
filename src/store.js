import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 公共数据池
const state ={
    position:'北京'
}
// 操作state
const mutation ={
    setPosition(state,val){
        state.position = val
    }
}
// 异步操作state
const actions = {
    setPosition({ commit },val){
        // 异步请求后端获取当前位置数据
        commit('setPosition',val);
    }
}
// 导出vuex实例
export default new Vuex.Store({
    state,
    mutation,
    actions
})