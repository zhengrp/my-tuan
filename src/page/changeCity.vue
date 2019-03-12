<template>
    <div class="page-changeCity">
        <el-row>
            <province/>
        </el-row>
        <el-row>
            <hot title="热门城市" :list="hotList"/>
        </el-row>
        <el-row>
            <hot title="最近访问" :list="rencentList"/>
        </el-row>
        <el-row>
            <category />
        </el-row>
    </div>
</template>
<script>
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
import api from '@/api/index.js'
export default {
    data(){
        return {
            // hotList: ["兰州","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南"],
            hotList: [],
            // rencentList:["兰州","陇南"]
            rencentList:[]
        }
    },
    created(){
        api.getHotCity().then(res => {
            // console.log(res);            
            this.hotList = res.data.data.map((item) =>item.name)

        })
        api.getLastCity().then(res => {
            // console.log(res);            
            this.rencentList = res.data.data.map((item) =>item.name)
        })
        
    },
    components: {
        Province,
        Hot,
        Category
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss';
    @import '@/assets/css/changecity/hot.scss';
    @import '@/assets/css/changecity/categroy.scss';
    
</style>
