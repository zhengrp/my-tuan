<template>
    <div class="categroy">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(i,index) in zimu" :key="index">
                <a :href="'#city-' + i">{{i}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section"  v-for="(i,index) in zimu" :key="index">
            <dt :id="'city-' + i">{{i}}</dt>
            <dd></dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {
            zimu:'ABCDEFGHJKLMNPQRSTWXYZ'
        }
    },
}
</script>