<template>
    <div class="page-changeCity">
        <el-row>
            <province/>
        </el-row>
        <el-row>
            热门城市
        </el-row>
        <el-row>
            最近访问
        </el-row>
        <el-row>
            城市列表
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
export default {
    components: {
        Province
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss';
</style>
