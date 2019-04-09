# tuan-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

页面：

1.公共结构模板:layout->头部 （导航条、搜索框），，底部信息栏；
    header部分：
        topBar:左右
        searchBar:logo,input&button&a
    footer部分：footer-link，footer-copyright

2.首页：index
        上部部部区域：menu,slider,life
        下部区域container： tab+card
        
3.切换城市：changeCity
    province+select,hot,最近访问,categroys
4.产品搜索列表：crumbs,categroy+select（分类&区域）,productList
5.登录页面：表单验证用户名密码，不通过返回提示，登录成功跳转首页，并隐藏登录注册，欢迎语句变为“hi，userName”
6，注册页面：用户名、密码做长度限制，用户名验证是否重复，密码复杂度判断，注册失败返回提示，成功跳转到登录页面。
