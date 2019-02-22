<template>
    <div class="m-header">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="../../../src/assets/img/m-logo.png" alt="#">
            </el-col>
            <el-col :span="15" class="center">
                    <div class="wrapper">
                        <el-input v-model="input" placeholder="搜索商家或小甜甜"></el-input>
                        <el-button type="primary" icon="el-icon-search"></el-button>
                    </div>
                    <p class="suggest">
                        <a href="#">大熊猫繁育研究基地</a>
                        <a href="#">成都欢乐谷</a>
                        <a href="#">成都动物园</a>
                        <a href="#">成都海昌极地海洋公园</a>
                    </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>

