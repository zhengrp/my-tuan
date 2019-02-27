<template>
    <div class="m-istyle">
        <dl @mouseover="over">
            <dt >全部</dt>
            <dd :class="{active:kind == 'all'}" data="all">有格调</dd>
            <dd :class="{active:kind == 'spa'}" data="spa">丽人SPA</dd>
            <dd :class="{active:kind == 'movie'}" data="movie">电影演出</dd>
            <dd :class="{active:kind == 'tarvel'}" data="tarvel">品质出游</dd>
        </dl>
        <ul class="ibody">
            <li v-for="(item,index) in list" :key="index">
                <el-card :body-style="{ padding: '0px' }" shadow="never">
                    <img :src="item.image" class="image">
                    <div class="cbody">
                        <div class="title" :title="item.title">{{item.title}}</div>
                        <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
                        <div class="price-info" v-if="item.price_info.current_price">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">{{item.price_info.current_price}}</span>
                            </span>
                            <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
                            <span class="sold bottom-right-info">{{item.address}}</span>
                        </div>
                        <!--<div class="price-info" v-else-if="!item.rentNum">
                            <span class="current-price-wrapper">
                                <span class="price-symbol numfont">¥</span>
                                <span class="current-price numfont">抢光了</span>
                            </span>
                        </div> -->
                    </div> 
                </el-card>
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            kind:'all',
            list:[{
                image: "http://p1.meituan.net/msmerchant/e3213ac45dcba972ffee3619ced7f53437609.jpg",
                title: "木马森林cake（春熙路店）",
                sub_title: "小清新鲜奶蛋糕1个，约6英寸，圆形",
                price_info: {
                    current_price: 18,
                    old_price: 20
                },
                address: "春熙路"
            }]
        }
    },
    methods: {
        over (){

        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/index/artistic.scss';
</style>
