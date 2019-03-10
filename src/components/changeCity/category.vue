<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(i,index) in list" :key="index">
                <a :href="'#city-' + i">{{i}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section"  v-for="(item,index) in cityGroup" :key="index">
            <dt :id="'city-' + index">{{index}}</dt>
            <dd v-for="city in item" :key="city.id">
                <span>{{city.name}}</span>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:'ABCDEFGHJKLMNPQRSTWXYZ',
            cityList: [],
            cityGroup: null
        }
    },
    created(){
        var data = [{
            "id": 1,
            "name": "北京",
            "pingyin":"beijing",
            "rank": "S",
            "fristChar": "b"
        },
        {
            "id": 3,
            "name": "成都",
            "pingyin":"chengdu",
            "rank": "C",
            "fristChar": "c"
        },
        {
            "id": 2,
            "name": "兰州",
            "pingyin":"lanzhou",
            "rank": "L",
            "fristChar": "l"
        }]
        var obj = {}
        data.forEach((item,index) =>{ //将数据按首字母分组
            if(!obj[item.fristChar.toUpperCase()]){
                obj[item.fristChar.toUpperCase()]=[]
            }
            obj[item.fristChar.toUpperCase()].push(item)
        })
        // console.log(obj)
        this.cityGroup = obj;
    }
}
</script>