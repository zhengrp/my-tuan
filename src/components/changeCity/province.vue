<template>
    <div class="">
        <span class="name">按省份选择</span>
        <!-- 向子组件select传值 -->
        <m-select :list="provinceList" title="省份" :value="province" :showWrapperActive="provinceActive"
            @change_active="changeProvActive"
            @chenge="chengeProvince"></m-select>
        <m-select :list="cityList" title="城市" :value="city" :showWrapperActive="cityActive"
            @change_active="changeCityActive"
            @chenge="chengeCity"></m-select>
        <span>直接搜索</span>
        <el-select
            v-model="searchWord"
            filterable
            remote
            reserve-keyword
            placeholder="请输入城市名称"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
                v-for="item in searchList"
                :key="item"
                :label="item"
                :value="item">
            </el-option>
        </el-select>
        
    </div>
</template>
<script>
import MSelect from './select.vue'
export default {
    data(){
        return {
            provinceList: ["山东","甘肃","江苏","北京","云南","海南","浙江","上海","天津","陕西","新疆","贵州"],          province: "省份",
            city:"城市",
            cityList:["兰州","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏"],
            cityActive: false,
            provinceActive:false,
            searchList: ["兰州","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏"],
            searchWord:'',
            loading:false
        }
    },
    components: {
        MSelect
    },
    methods:{
        changeProvActive(flag){
            this.provinceActive = flag
            if(flag){
                this.cityActive = false
            }
        },
        changeCityActive(flag){
            this.cityActive = flag
            if(flag){
                this.provinceActive = false
            }
        },
        chengeProvince(value){
            this.province = value
        },
        chengeCity(value){
            this.city = value
        },
        remoteMethod(val){
            // console.log(this.searchWord,val);
            // 请求后端接口
            
        }
    }
}
</script>
