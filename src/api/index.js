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
    // 热门城市
    getHotCity(params){
        return axios.get('/city/hot.json',params)
    },
    // 最近访问城市
    getLastCity(params){
        return axios.get('/city/recents.json',params)
    },
    // 
    getCityList(params){
        return axios.get('/city/cityList.json',params)
    },
    // 分类列表
    getGroupList(params){
        return axios.get('/list/classify.json',params)
    },
    // getAreaList 接口数据格式异常暂不调用
    // getAreaList(params){
    //     return axios.get('/list/areaList.json',params)
    // },
    // 
    // 按省份列表
    getProcinceList(params){
        return axios.get('/city/province.json',params)
    },
    //  当前位置信息
    getCurPosition(params){
        return axios.get('/city/getPosition.json',params)
    },
    // 登录
    login(params){
        return axios.get('/login', params )
    },
    // 注册
    register(params){
        return axios.get('/register',params)
    }
}
export default api