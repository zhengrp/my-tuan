<template>
    <div class="default-page">
        <el-container>
            <el-header>
                <my-header/>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
import MyHeader from '@/components/header/index.vue'

export default {
    components: {
        MyHeader
    }
}
</script>

