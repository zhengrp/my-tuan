import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 公共数据池
const state ={
    position:'成都'
}
// 
const mutation ={
    setPosition(state,val){
        state.position = val
    }
}
// 
const actions = {
    setPosition({ commit },val){
        // 异步请求获取当前位置数据
        commit('setPosition',val);
    }
}

export default new Vuex.Store({
    state,
    mutation,
    actions
})