<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="../../../src/assets/img/m-logo.png" alt="#">
            </el-col>
            <el-col :span="15" class="center">
                    <div class="wrapper">
                        <el-input v-model="searchWord" placeholder="搜索商家或小甜甜" @focus="focus" @blur="blur"></el-input>
                        <el-button type="primary" icon="el-icon-search"></el-button>
                        <dl class="hotPlace" v-if="isHotPlace" >
                            <dt>热门搜索</dt>
                            <dd v-for="(item,index) in hotPlaceList" :key="index">
                                <router-link :to="{name: 'goods',params:{name:item}}">{{item}}</router-link>                            
                            </dd>
                        </dl>
                        <dl class="searchList" v-if="isSearchList">
                            <dd v-for="(item,index) in searchList" :key="index">
                                <router-link to="/s">{{item}}</router-link>
                            </dd>
                        </dl>
                    </div>
                    <p class="suggest">
                        <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
                    </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      searchWord: "",     
      isFocus: false,
      hotPlaceList: ['第一温泉度假村','99连锁旅馆','忧伤快捷酒店'],
      searchList: ['火锅','火锅自助餐','KTV'],
      suggestList: ['大熊猫繁育研究基地','成都欢乐谷','成都动物园','成都海昌极地海洋公园']
    };
  },
  computed: {
      isHotPlace: function() {
          return this.isFocus && !this.searchWord;//聚焦并且无内容，返回ture
      },
      isSearchList: function(){
          return this.isFocus && this.searchWord;//聚焦有内容，返回ture
      }      
  },
  methods: {
      focus(){
          this.isFocus = true
        //   console.log(111)
      },
      blur(){
          let self = this
          setTimeout(function(){
            self.isFocus = false              
          },500)
          console.log(222)
      }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>

