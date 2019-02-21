<template>
    <div class="header">
        <el-row>
            <top-bar/>
        </el-row>
        <el-row>
            <search-bar/>
        </el-row>
    </div>
</template>
<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'

export default {
  components: {
    topBar,
    searchBar
  }
}
</script>
