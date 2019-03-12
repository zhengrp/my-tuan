<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="@/assets/img/m-logo.png" alt="#">
            </el-col>
            <el-col :span="15" class="center">
                    <div class="wrapper">
                        <el-input v-model="searchWord" placeholder="搜索商家或小甜甜" @focus="focus" @blur="blur" @input="inputWord"></el-input>
                        <el-button type="primary" icon="el-icon-search" @click="toProductsList()"></el-button>
                        <dl class="hotPlace" v-if="isHotPlace" >
                            <dt>热门搜索</dt>
                            <dd v-for="(item,index) in hotPlaceList" :key="index">
                                <router-link :to="{name: 'goods',params:{name:item}}">{{item}}</router-link>                            
                            </dd>
                        </dl>
                        <dl class="searchList" v-if="isSearchList">
                            <dd v-for="(item,index) in searchList" :key="index">
                                <router-link :to="{name: 'goods',params:{name:item}}">{{item}}</router-link>
                            </dd>
                        </dl>
                    </div>
                    <p class="suggest">
                        <router-link :to="{name: 'goods',params:{name:item}}" v-for="(item,index) in suggestList" :key="index">{{item}}</router-link>
                    </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
// import axios from '@/axios.js'
import api from '@/api/index.js'

export default {
  data() {
    return {
      searchWord: "",     
      isFocus: false,
    //   hotPlaceList: ['第一温泉度假村','99连锁旅馆','忧伤快捷酒店'],
      hotPlaceList: [],      
    //   searchList: ['火锅','火锅自助餐','KTV'],
      searchList: [],      
    //   suggestList: ['大熊猫繁育研究基地','成都欢乐谷','成都动物园','成都海昌极地海洋公园']
      suggestList: []   
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
  created(){
    //   ajax请求后端热门搜索数据
     api.getSerchHotWord().then(res => {
          this.hotPlaceList=res.data.data
          this.suggestList=res.data.data
      })
  },
  watch:{
      "$route.params.name": function(){
          this.searchWord = this.$route.params.name;
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
        //   console.log(222)
      },
      // 搜索框输入事件
      inputWord(){
          // console.log(this.searchWord);
          let val = this.searchWord
          api.getSerchWord().then(res =>{
          //   console.log(res)
          this.searchList=res.data.data.list.filter((item,index) =>{
            return item.indexOf(val) > -1
          })
        })
      },
      toProductsList(){            // 跳转
            this.$router.push({name: "goods",params:{name: this.searchWord}})
        }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/search.scss";
</style>

