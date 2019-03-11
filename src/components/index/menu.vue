<template>
    <div class="m-menu" >
        <!-- 菜单区域绑定鼠标进入事件，触发menuLeave，渲染detail -->
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <!-- 循环渲染菜单列表，绑定移出事件，去除detail区域 -->
            <dd v-for="(item,index) in menuList" :key ="index" @mouseenter="menuEnter(item)" >
                <i :class="item.type"></i>{{item.name}}
                <span class="arrow"></span>
            </dd> 
        </dl>
        <!-- 根据curDetail条件渲染detail -->
        <div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item,index) in curDetail.items" >
                <h2 :key="index">{{item.title}}</h2>
                <span v-for="(v,i) in item.items" :key="v + '_' + i">{{v}}</span>
            </template>
        </div>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data(){
        return {
            // menuList: [
            //     {
            //         title: '美食',
            //         icon: 'food',
            //         children: [{
            //             title: '美食',
            //             children: ['代金券','代金券','代金券','代金券','代金券','代金券','代金券','代金券','代金券','代金券','代金券']
            //         }]
            //     },
            //     {
            //         title: '外卖',
            //         icon: 'takeout',
            //         children: [{
            //             title: '外卖',
            //             children: ['美团外卖']
            //         }]
            //     },
            //     {
            //         title: '酒店',
            //         icon: 'hotel',
            //         children: [{
            //             title: '酒店星级',
            //             children: ['经典型','舒适三星','高档四星']
            //         }]
            //     }
            // ],
            menuList: [],
            curDetail:null,
        }
    },
    created(){
        api.getMenuList().then(res => {
            // console.log(res)
            this.menuList = res.data.data
        })
    },
    methods: {
        // 移入列表触发函数
        menuEnter(item){
            this.curDetail = item
        },
        // 移出列表触发函数        
        menuLeave() {
            let self = this
            this.timer = setTimeout(function() {
                self.curDetail = null   
            }, 200);
        },
        detailEnter(){
            // let self = this
            clearTimeout(this.timer)
        },
        detailLeave() {
            this.curDetail =null
        }
    }
}
</script>