<template>
    <div class="m-menu" >
        <dl class="nav" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(item,index) in menuList" key ="index" @mouseenter="menuEnter(item)" >
                <i :class="item.icon"></i>{{item.title}}
                <span class="arrow"></span>
            </dd> 
        </dl>
        <div v-if="curDetail" class="detail">
            <template v-for="(item,index) in curDetail.children" @mouseenter="detailEnter" @mouseleave="datalLeave">
                <h2 :key="index">{{item.title}}</h2>
                <span v-for="(v,i) in item.children" :key="v + '_' + i">{{v}}</span>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            menuList: [
                {
                    title: '美食',
                    icon: 'food',
                    children: [{
                        title: '美食',
                        children: ['代金券','代金券','代金券','代金券','代金券','代金券','代金券','代金券','代金券','代金券','代金券']
                    }]
                },
                {
                    title: '外卖',
                    icon: 'takeout',
                    children: [{
                        title: '外卖',
                        children: ['美团外卖']
                    }]
                },
                {
                    title: '酒店',
                    icon: 'hotel',
                    children: [{
                        title: '酒店星级',
                        children: ['经典型','舒适三星','高档四星']
                    }]
                }
            ],
            curDetail:null,
        }
    },
    methods: {
        menuEnter(item){
            this.curDetail = item
        },
        menuLeave() {
            let self = this
            this.timer = setTimeout(function() {
                self.curDetail = null   
            }, 200);
        },
        detailEnter(){
            clearTimeout(this.timer)
        },datalLeave() {
            this.curDetail =null
        }
    }
}
</script>