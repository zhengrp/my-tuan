// 请求数据

import axios from '@/axios.js'

var api = {
    // 请求热搜词
    getSerchHotWord(params){
        return axios.get('/header/searchHotWords.json',params)
    },
    // 请求搜索框下拉词
    getSerchWord(params){
        return axios.get('/header/search.json',params)
    },
    // 请求菜单列表
    getMenuList(params){
        return axios.get('/index/nav.json',params)
    },
    // /index/resultsByKeywords.json
    // 有格调区域数据
    getResultProducts(params){
        return axios.get('/index/resultsByKeywords.json',params)
    },
    getProductsList(params){
        return axios.get('/list/goodsList.json',params)
    },
}
export default api