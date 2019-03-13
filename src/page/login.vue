<template>
    <div class="page-login">
        <div class="login-header">
            <router-link :to="{name: 'index'}">logo<img src="" alt=""></router-link>
        </div>
        <div class="login-panel">
            <div class="banner">
                <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
            </div>
            <div class="form">
                <p><span>账号登录</span></p>
                <el-input v-model="userName" placeholder="用户名/手机号/邮箱" prefix-icon="profile"></el-input>
                <el-input v-model="password" type="password" placeholder="  密码" prefix-icon="password"></el-input>
                <div class="foot">
                    <a href="#">忘记密码?</a>
                </div>
                <el-button class="btn-login">登录</el-button>
                <p class="reg">
                    <span>还没有账号？</span>
                    <router-link :to="{name: 'register'}">免费注册</router-link>
                </p>
                <div class="oauth-wrapper J-oauth-wrapper">
            <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
            <div class="oauth cf">
                <a class="oauth__link oauth__link--qq" href="#" target="_blank"></a>
                <a class="oauth__link oauth__link--weibo" href="#"  target="_blank"></a>
            </div>
        </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            userName: '',
            password: ''
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/login/index.scss";
</style>
