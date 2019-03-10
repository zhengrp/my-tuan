<template>
    <div class="page-product">
        <el-row>
            <crumbs/>
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy/>   
                </el-row>  
                <el-row>
                    <list/>    
                </el-row>           
            </el-col>
            <el-col :span="5">
                <div class="tencent_map">
                    <img src="@/assets/img/ditu.png" alt="腾讯地图">
                </div>
                猜你喜欢
            </el-col>
        </el-row>
    </div>
</template>
<script>
import crumbs from '@/components/products/crumbs.vue'
import Categroy from '@/components/products/categroy.vue'
import List from '@/components/products/list.vue'

export default {
    components:{
        crumbs,
        Categroy,
        List
    }
}
</script>
<style lang="sass">
    @import '@/assets/css/products/index.scss';
</style>
