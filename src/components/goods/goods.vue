<template>
	<div class="app-goods">
		
		<el-tabs v-model="activeName" @tab-click="handleClick" class="nav-tab">
			<!--<router-link :to="nav.path" >-->
				<!--<el-tab-pane :label="nav.label" :name="nav.name" v-for="nav in goodsNavs" :kid="nav.id"></el-tab-pane>-->
			<!--</router-link>-->
			
			<el-tab-pane label="手机" name="first"><phone/></el-tab-pane>
			<el-tab-pane label="耳机" name="second"><earphone/></el-tab-pane>
			<el-tab-pane label="壳/膜" name="third"><shell/></el-tab-pane>
			<el-tab-pane label="适配器/数据线" name="fourth"><dataLine/></el-tab-pane>
		</el-tabs>
	</div>
	</div>
</template>

<script>
	import phone from '../goods/phone'
	import earphone from '../goods/earphone'
	import shell from '../goods/shell'
	import dataLine from '../goods/dataLine'
	export default {
		name: 'AppGoods',
		data() {
			return {
				activeName: 'first',
//				goodsNavs:[
//				{id:1,name:"first",path:'/phone ',label:'手机'},
//				{id:2,name:"second",path:'/earphone ',label:'耳机'},
//				{id:3,name:"third",path:'/shell ',label:'壳/膜'},
//				{id:4,name:"fourth",path:'/dataLine ',label:'适配器/数据线'},
//				]
			
   
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		components: {
			phone,
			earphone,
			shell,
			dataLine
			
			
			
		}
	}
</script>

<style>
</style>