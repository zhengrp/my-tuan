<template>
    <div class="">
        <span class="name">按省份选择</span>
        <m-select :list="provinceList" title="省份" :value="province"></m-select>
        <m-select :list="cityList" title="城市" :value="city"></m-select>
        
    </div>
</template>
<script>
import MSelect from './select.vue'
export default {
    data(){
        return {
            provinceList: [
                "山东",
                "甘肃",
                "江苏",
                "北京",
                "云南",
                "海南",
                "浙江",
                "上海",
                "天津",
                "陕西",
                "新疆",
                "贵州",
                "安徽",
                "澳门",
                "湖南",
                "河北",
                "香港",
                "辽宁",
                "四川",
                "宁夏",
                "吉林",
                "福建",
                "湖北",
                "广东",
                "重庆",
                "山西",
                "江西",
                "黑龙江",
                "青海",
                "河南",
                "台湾",
                "内蒙古",
                "西藏",
                "广西"
            ],
            province: "省份",
            city:"城市",
            cityList:[
                        "兰州",
                        "金昌",
                        "白银",
                        "天水",
                        "武威",
                        "张掖",
                        "平凉",
                        "酒泉",
                        "庆阳",
                        "定西",
                        "陇南",
                        "临夏",
                        "甘南",
                        "敦煌",
                        "华亭",
                        "环县",
                        "康县"
                    ]
        }
    },
    components: {
        MSelect
    }
}
</script>
