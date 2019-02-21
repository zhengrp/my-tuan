<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location"/>
            成都
            <router-link class="changCity" :to="{name: 'changeCity'}">切换城市</router-link>
            [
            <a href="#">天府新区</a>
            <a href="#">城关区</a>
            <a href="#">算法镇</a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name: 'login'}">立即登陆</router-link>
            <router-link class="register" :to="{name: 'register'}">注册</router-link>            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>