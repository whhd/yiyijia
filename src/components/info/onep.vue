<template>
	<div class="app-onep">
		<AppHomeHeader/>
		<div class="nav-list flex flex-content-between flex-align-center">
			<h1 class="text-base m-r text-black title">OnePlus 6</h1>
			<a href="https://rush.oneplus.com/cn/oneplus6.html" data-retry="Retrying" class="buy-btn one-button btn-red text-base text-center one-button btn-red frozen" style="font-size: 16px;">购买
				<!---->
			</a>
		</div>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
			<el-tab-pane label="概述" name="first"><overview/></el-tab-pane>
			<el-tab-pane label="参数" name="second"><parameter/></el-tab-pane>
			<el-tab-pane label="体验" name="third"><experience/></el-tab-pane>
			<el-tab-pane label="评价" name="fourth"><appraise/></el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
	import AppHomeHeader from '../Home/HomeHeader'
	import overview from '../newNav/overview'
	import parameter from '../newNav/parameter'
	import experience from '../newNav/experience'
	import appraise from '../newNav/appraise'
	export default {

		data() {
			return {
				activeName: 'second'
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		components: {
			AppHomeHeader,
			overview,
			parameter,
			experience,
			appraise
		}
	};
</script>
<style scoped>
	.nav-list {
		padding: 0 15px;
		height: 60px;
	}
	
	.flex-content-between {
		-webkit-box-pack: justify;
		/*-ms-flex-pack: justify;*/
		justify-content: space-between;
	}
	
	.flex-align-center {
		-webkit-box-align: center;
		/*-ms-flex-align: center;*/
		align-items: center;
	}
	
	.flex {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}
	.m-r {
    margin-right: 20px;
}
.text-base, p {
    font-size: 16px;
    line-height: 1.5;
}

.text-black {
    color: #101920;
}
@media screen and (max-width: 735px)
.nav-list .buy-btn {
    height: 40px;
    line-height: 38px;
    font-size: 14px;
    min-width: 100px;
    border-radius: 4px;
}
.one-button.btn-red {
    background-color: #eb0028;
    color: #fff;
}
.text-center {
    text-align: center;
}
.one-button {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 300;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    border: 1px solid transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 2px;
    padding: 0 1em;
}
.nav-tab{
	background-color: #fff;
    padding: 0 0 0 8%;
    height: 50px;
    
}
</style>