<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <container></container>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'

export default {
    components:{
        MMenu,
        MLife,
        Container
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/index/index.scss'
</style>
