<template>
    <div class="page-product">
        <el-row>
            <crumbs/>
        </el-row>
        <el-row>
            <el-col :span="19"></el-col>
            <el-col :span="5">
                map + fav
            </el-col>
        </el-row>
    </div>
</template>
<script>
import crumbs from '@/components/products/crumbs.vue'
export default {
    components:{
        crumbs
    }
}
</script>
<style lang="sass">
    @import '@/assets/css/products/index.scss';
</style>
