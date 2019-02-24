<template>
    <div class="slide">
        <el-carousel>
            <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item.img" alt="#">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: [
            {
                url: '',
                img:'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            },
            {
                url: '',
                img:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            },
            ]
        }
    }
}
</script>