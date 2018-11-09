<template>
	<div id="app-nextall">
			<nav class="nav container-text">
			<ul class="nav-left">
				<router-link to="./">
				<li class="icon el-icon-close" >
					<a href="#" class="ico-wrapper"><i class="ico ico-brand"></i></a>
				</li>
				</router-link>
				<li class="icon show-menu">
					<a href="" id="store-nav" data-target="#nav-pages-slide" data-trigger="#store-nav" data-nav="top" class="ico-wrapper as-show-menu"><i class="icon-show-menu"></i></a>
				</li>
			</ul>

			<ul id="nav-pages-slide" class="nav-pages">
				<router-link to="/login" replace>
				<li class="user-brief-info" >
					<a href="#" class="info" style="color:#828282;" >欢迎访问一加官网，请<span class="text-blue" style="color:blue;">登录</span></a>
				</li>
				</router-link>
				<router-link :to="{name:nav.name}" v-for="nav in navs" :key="nav.id" replace>
				<li class="page" style="white-space: nowrap;">
				<a href="#">{{nav.title}}</a>
					
				</li>
				</router-link>
			</ul>

		</nav>
	
		
	</div>
</template>

<script>
	export default {
		name: 'nextall',
		data(){
			return {
				navs:[
			{id:1,title:'OnePlus 6',name:'onep'},
				{id:2,title:'商城',name:'store'},
				{id:3,title:'服务',name:'service'},
				{id:4,title:'品牌',name:'brand'},
				{id:5,title:'论坛',name:'forum'}
				]
			}
		}
   
  
		
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	.nav {
		position: relative;
		text-align: center;
		background-color: #fff;
	}
	
	.container-text {
		max-width: 1200px;
		min-width: 300px;
		display: block;
		margin: auto;
		width: 100%;
	}
	
	.nav-fixed .nav .nav-left {
		background-color: #f6f6f6;
	}
	
	@media screen and (max-width: 1050px) .nav .nav-left {
		width: 100%;
	}
	
	.nav .nav-left {
		float: left;
	}
	
	@media screen and (max-width: 1050px) .nav .nav-left {
		position: relative;
		height: 50px;
		padding-right: 0;
	}
	
	.nav .nav-left {
		margin: 0;
		list-style: none;
		text-align: center;
		display: inline-block;
		vertical-align: top;
		font-size: 0;
		width: 100%;background: #f6f6f6;
	}
	
	@media screen and (max-width: 1050px) .nav .nav-left .el-icon-close {
		display: inline-block;
		position: absolute;
		left: 0;
		top: 0;
		
	}
	
	.nav .nav-left .el-icon-close {
		display: inline-block;
		position: absolute;
		left: 0;
		top: 0;min-width: 50px;
		line-height: 50px;
		height: 50px;font-size: 22px;color: #101920;
	}
	
	@media screen and (max-width: 1050px) .nav .nav-left>li {
		font-size: 16px;
		display: block;
		min-width: 50px;
		line-height: 50px;
		height: 50px;
	}
	
	.nav .nav-left>li {
		font-size: 16px;
		display: inline-block;
		vertical-align: middle;
		vertical-align: top;
		line-height: 50px;
		height: 50px;
		min-width: 50px;
		margin-right: -1px;
		cursor: pointer;
		padding-top: 20px;
	}
	/**/
	
	 .nav .nav-pages {
		color: #101920;
		max-height: 1000px;
	}
	
	@media screen and (max-width: 1050px) .nav .nav-pages {
		display: block;
		width: 100%;
		background-color: #fff;
		overflow: hidden;
		height: auto;
		transition: .25s;
		max-height: 1000px;
	}
	
	.nav .nav-pages {
		display: block;
		width: 100%;
		background-color: #fff;
		overflow: hidden;
		height: auto;
		transition: .25s;
		max-height: 1000px;
	}
	
	@media screen and (max-width: 1050px) .nav .nav-pages {
		position: relative;
		height: 50px;
		padding-right: 0;
	}
	
	.nav .nav-pages {
		margin: 0;
		text-align: center;
		
		vertical-align: top;
		
	}
	
	@media screen and (max-width: 1050px) .nav .nav-pages .user-brief-info {
		margin-bottom: 10px;
	}
	
	.nav .nav-pages .user-brief-info {
		background-color: #f6f6f6;
		display: block;
		height: 80px;
		margin-bottom: 10px;
	}
	.user-brief-info{height: 80px;background-color: #f6f6f6;}
	.nav .nav-pages>li {
		font-size: 16px;
		display: block;
		min-width: 50px;
		line-height: 50px;
		height: 50px;
		vertical-align: top;
	}
	
	@media screen and (max-width: 1050px) .nav .page>a {
		color: #828282;
		width: 100%;
		padding: 0 30px;
		text-align: left;
		border-bottom: 0;
	}
	
	.nav .page>a {
		color: #828282;
		width: 100%;
		padding: 0 30px;
		text-align: left;
		border-bottom: 0;
	}
</style>