<template>
    <!-- 自定义指令 -->
    <div :class="['choose-wrap',disabled ? 'disabled' : '']" @click="showwrapper" v-document-click="documentClick">
        <div class="choose">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <!-- 根据active值动态添加 -->
            <div :class="{'mt-content':true,'active':showWrapperActive}">
                <h2>{{title}}</h2>
                <div :class="['wrapper', className]">
                    <div class="col" v-for="(listData,index) in renderList" :key="index">
                        <!-- 下拉列表添加点击事件更新value -->
                        <span :class="{'mt-item':true,'active':item.name === value}" v-for="(item,index) in listData" :key="index" 
                        @click="changeValue(item)">
                            {{item.name}}
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
        "showWrapperActive",
        "disabled",
        "className"
    ],
    computed: {
        // 下拉框分列
        renderList: function(){
            let col = Math.ceil(this.list.length / 12)
            let resultList = []
            for (var i = 0; i < col; i++) {
                let data = this.list.slice(i * 12,i * 12 + 12)
                resultList.push(data)              
            }
            return resultList;
        }
    },
    methods:{
        // 点击事件触发showWrapperActive改变，渲染active
        showwrapper(e){
            e.stopPropagation() //阻止事件冒泡
            // this.showWrapperActive = true
            if(!this.disabled){
                this.$emit('change_active',true)
            }
            
        },
        documentClick(){
            // this.showWrapperActive = false
            this.$emit('change_active',false)
            // console.log('documentClick---')
            
        },
        // disper(){

        // },
        changeValue(item){
            this.$emit('chenge',item)
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changecity/select.scss';
</style>
