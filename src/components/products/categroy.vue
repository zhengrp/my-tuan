<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item,index) in menuList" :key="index.type">
                <m-select :name="item.title" :list="item.sub_list"></m-select>
            </dd>
            
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="(item,index) in bussinessList" :key="index.type">
                <m-select :name="item.title" :list="item.sub_list"></m-select>
            </dd>
            
            
        </dl>
        
    </div>
</template>
<script>
import MSelect from "./select.vue";
export default {
  data() {
    return {
      menuList: [{
        title: "美食",
        type: "food",
        sub_list: [{
            name: "全部",
            id: "all"
          },
          {
            name: "日本菜",
            id: "Japan"
          },
          {
            name: "饮品店",
            id: "drink"
          },
          {
            name: "面包甜点",
            id: "cate"
          }]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          sub_list: [
            {
              name: "全部",
              id: "all"
            },
            {
              name: "温泉酒店",
              id: "hot_spring"
            }
          ]
        }],
      bussinessList:[
        {
        title: "推荐商圈",
        type: "bussiness",
        sub_list: [{
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
          sub_list: [
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
  components: {
    MSelect
  }
};
</script>