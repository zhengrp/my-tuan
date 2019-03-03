<template>
    <div class="choose-wrap" @click="showwrapper">
        <div class="choose">
            <span>{{title}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content':true,'active':showWrapperActive}">
                <h2>{{value}}</h2>
                <div class="wrapper">
                    <div class="col">
                        <span class="mt-item" v-for="(item,index) in list" :key="index">
                            {{item}}
                        </span>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>
<script>
export default {
    data(){
        return{
            showWrapperActive: false
        }
    },
    props: [
        "list",
        "title",
        "value"
    ],
    methods:{
        // 点击事件触发showWrapperActive改变，渲染active
        showwrapper(){
            this.showWrapperActive = true
        },
        disper(){
            
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/select.scss';
</style>
