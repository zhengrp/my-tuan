import axios from 'axios'
// 配置基础接口

axios.defaults.baseURL = "http://api.duyiedu.com/api/meituan"

//添加请求数据拦截器
axios.interceptors.request.use(function(config){
    // 发出请求之前做的
    config.params = {
        ...config.params,
        appkey:'zhengrp_1550991532874'
    }
    return config;
},function(error){
    return Promise.reject(error)
});

export default axios



