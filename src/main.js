// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false
// 自定义指令绑定事件
Vue.directive('document-click',{
  bind(el,binding,vnode){
    // console.log('-bind',el,binding,vnode);
    // binding.value为select传过来的事件处理函数
    document.addEventListener('click',binding.value,false)
  },
  inserted(){
    // console.log('-insert');
    
  },
  update(){
    // console.log('-update');
    
  }
})
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
