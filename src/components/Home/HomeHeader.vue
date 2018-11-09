<template>
	<div class="app-home-header">
		<div class="notice">
			<div class="notice-content">
				<p class="text-white">
					<a href="#" target="_blank" track-data="首页顶部通知栏" style="color: rgb(255, 255, 255);">OnePlus 6 一加云耳 火热售卖 立即购买 &gt;&gt;</a>
				</p>
				<a href="#" class="remove-notice">
					<i class="anticon anticon-close" @click="removeNotice ()"></i></a>
			</div>
		</div>

		<header class="header">
			<div class="header-content">
				<ul class="header-nav">
					<router-link to="/next">
					<li class="anticon bars">
						<i class="anticon anticon-bars" style="color:#000000"></i>
					</li>
					</router-link>
					<li class="anticon-yijia">
						<img src="../../assets/img/oneplus.jpg" />
					</li>
					<router-link to="/cart">
					<li class="anticon shopping-cart">
						<i class="anticon anticon-shopping-cart" style="color:#000000"></i>
					</li>
					</router-link>
				</ul>
				<ul class="nav-center">

				</ul>
				<ul class="nav-art">

				</ul>
			</div>
		</header>
	</div>
</template>

<script>
//	import NextSearch from '../../NextSearch.vue'
	export default {
		name: 'AppHomeHeader',
		data() {
			return {
				
			}
		},
		methods: {
			removeNotice () {
				$(".notice").remove();
			},
			nextPage () {
				
$(location).attr('href', '../../next');
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
	
	.notice {
		background-image: url(../../assets/img/header.jpg);
		height: 50px;
		width: 100%;
	}
	
	.text-white {
		color: #fff;
		font-size: 100%;
		max-height: 3em;
		text-align: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		margin: auto;
		line-height: 1.5;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.notice-content {
		display: flex;
		height: 50px;
		cursor: pointer;
		padding-left: 50px;
		padding-right: 50px;
	}
	
	.remove-notice {
		display: block;
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0;
		right: 0;
		font-size: 100%;
		line-height: 50px;
		text-align: center;
		color: #fff;
	}
	
	.header {
		z-index: 100;
		height: 50px;
		left: 0;
		right: 0;
		top: 0;
		background: #fff;
		max-width: 100%;
		overflow: visible;
		text-align: center;
	}
	
	.header-content .header-nav {
		display: flex;
		height: 50px;
		cursor: pointer;
	}
	
	.header-nav .anticon {
		display: block;
		width: 50px;
		height: 50px;
		text-align: center;
		font-size: 20px;
	}
	
	.shopping-cart {
		position: absolute;
		right: 0;
	}
	
	.anticon-yijia {
		position: absolute;
		left: 50%;
		margin-left: -16px;
		width: 50px;
		height: 50px;
		line-height: 50px;
	}
	
	.header i {
		display: block;
		width: 50px;
		height: 50px;
		position: absolute;
		font-size: 100%;
		line-height: 50px;
		text-align: center;
	}
</style>