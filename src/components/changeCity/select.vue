<template>
    <!-- 自定义指令 -->
    <div class="choose-wrap" @click="showwrapper" v-document-click="documentClick">
        <div class="choose">
            <span>{{title}}</span>
            <i class="el-icon-caret-bottom"></i>
            <!-- 根据active值动态添加 -->
            <div :class="{'mt-content':true,'active':showWrapperActive}">
                <h2>{{value}}</h2>
                <div class="wrapper">
                    <div class="col">
                        <span :class="{'mt-item':true,'active':item == value}" v-for="(item,index) in list" :key="index" @click="changeValue(item)">
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
        }
    },
    // 从父组件province接收的数据
    props: [
        "list",
        "title",
        "value",
        "showWrapperActive"
    ],
    methods:{
        // 点击事件触发showWrapperActive改变，渲染active
        showwrapper(e){
            e.stopPropagation() //阻止事件冒泡
            // this.showWrapperActive = true
            this.$emit('change_active',true)
        },
        documentClick(){
            // this.showWrapperActive = false
            this.$emit('change_active',false)
            // console.log('documentClick---')
            
        },
        disper(){

        },
        changeValue(item){

        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/select.scss';
</style>
