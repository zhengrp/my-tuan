<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item,index) in groupList" :key="index.type">
                <m-select :name="item.title" :list="item.subList"></m-select>
            </dd>
            
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item,index) in areaList" :key="index.type">
                <m-select :name="item.title" :list="item.subList"></m-select>
            </dd>
            
            
        </dl>
        
    </div>
</template>
<script>
import MSelect from "./select.vue"
import api from "@/api/index.js"
export default {
  data() {
    return {
      // groupList: [{
      //   title: "美食",
      //   type: "food",
      //   sub_list: [{
      //       name: "全部",
      //       id: "all"
      //     },
      //     {
      //       name: "日本菜",
      //       id: "Japan"
      //     },
      //     {
      //       name: "饮品店",
      //       id: "drink"
      //     },
      //     {
      //       name: "面包甜点",
      //       id: "cate"
      //     }]
      //   },
      //   {
      //     title: "酒店住宿",
      //     type: "hotal",
      //     sub_list: [
      //       {
      //         name: "全部",
      //         id: "all"
      //       },
      //       {
      //         name: "温泉酒店",
      //         id: "hot_spring"
      //       }
      //     ]
      //   }],
      groupList: [],
      areaList:[
        {
        title: "推荐商圈",
        type: "bussiness",
        subList: [{
            name: "春熙路",
            id: "chunxi"
          },
          {
            name: "万达广场",
            id: "wanda"
          },
          {
            name: "孵化园",
            id: "fuhua"
          }]
        },
        {
          title: "高新区",
          type: "gaoxin",
          subList: [
            {
              name: "全部",
              id: "all"
            },
            {
              name: "神仙树",
              id: "godTree"
            }
          ]
        }
      ]
    };
  },
  created(){
    api.getGroupList().then(res => {
      // console.log(111,res)
      this.groupList = res.data.data
    })
    // api.getAreaList().then(res => {
    //   let data =  res.data
    //   console.log(data);
      
    //   // this.areaList = JSON.parse(data)
    //   console.log(111,JSON.parse(data))

    // })
  },
  components: {
    MSelect
  }
};


</script>


