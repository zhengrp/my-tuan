<template>
    <div class="m-life">
        <el-row>
            <ul class="nav">
            <li>
                <routerLink to="/" class="takeout">美团外卖</routerLink>
            </li>
            <li>
                <routerLink to="/" class="">猫眼电影</routerLink>
            </li>
            <li>
                <routerLink to="/" class="">美团酒店</routerLink>
            </li>
            <li>
                <routerLink to="/" class="apartment">名宿公寓</routerLink>
            </li>
            <li>
                <routerLink to="/" class="business">商家入驻</routerLink>
            </li>
            <li>
                <routerLink to="/" class="">美团公益</routerLink>
            </li>
        </ul>
        </el-row>
        <el-row>
            <el-col :span="14">
                <slider/>
            </el-col>
            <el-col :span="4">
                <div class="m-life-pic"></div>
            </el-col>
            <el-col :span="6">
                <div class="m-life-login">
                    <h4>
                        <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">                        
                    </h4>
                    <p class="m-life-login-name">Hi,你好</p>
                    <p>
                        <router-link :to="{name: 'register'}">
                            <el-button round>注册</el-button>
                        </router-link >
                    </p>
                    <p>
                        <router-link :to="{name: 'login'}">
                            <el-button round>登录</el-button>
                        </router-link>
                    </p>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="m-life-hotel"></div>
            </el-col>
            <el-col :span="7">
                <div class="m-life-music"></div>
                
            </el-col>
            <el-col :span="4">
                <div class="m-life-coop"></div>

            </el-col>
            <el-col :span="6">
                <div class="m-life-downapp">
                    <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
                    <p>美团app手机版</p>
                    <p class="last-p">
                        <span class="red">1元起</span>
                    <em>吃喝玩乐</em>
                        
                    </p>
                </div>

            </el-col>
        </el-row>
    </div>
</template>
<script>
import Slider from './slider.vue'
export default {
    components: {
        Slider
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/index/life.scss'
</style>
