import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import goodsList from '@/page/goodsList.vue'
import index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import Login from '@/page/login.vue'
import Register from '@/page/register.vue'
import ProductDeatil from '@/page/productDeatil.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect:'/index',
      children:[{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      },
      {
        path: '/index',
        name: 'index',
        component: index
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      },
      {
        path: '/productDeatil',
        name: 'productDeatil',
        component: ProductDeatil
      }]
    },
    {
      path: '/balnk',
      name: 'blankPage',
      component: blankPage,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ],
  mode: "history"
})
