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
2.切换城市：上中下，中间不一样
3.搜索列表：上中下，中间不一样

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
    
