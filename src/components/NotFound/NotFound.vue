<template>
    <div class="not-found">
       <header class="bar bar-nav">
            <a @click="back" class=" el-icon-arrow-left"></a>
        </header>

        <div class="content">
            <h4>访问的页面不存在 <router-link to="/" style="color:#f00;font-size: 30px;">回到首页</router-link> </h4>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app-not-found',
    methods: {
        back () {
            //返回， 编程式导航
           this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
	.el-icon-arrow-left{font-size: 30px;}
	h4{text-align: center;}
</style>


