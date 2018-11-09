<template>
	<div class="app-phone">
		<!--<div>phone</div>-->
		<div class="phone">
			<div class="phone-header">

			</div>
			<div class="goods-wrap">
				<ul class="goods-list">
					
						<li v-for="(ear,id) in phones" :key="ear.id" class="list">
							 <router-link :to="{path:'/detail',query:{array:ear}}">
							<a href=""><img :src="ear.imgurl" alt="" />
								<h3>{{ear.title}}</h3>
								<p class="price">
									<span><span class="unit">¥</span> {{ear.price}}
									</span><br />

								</p>
							</a>
					</router-link>
					</li>

				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {

		data() {

			return {

				phones: []
			}
		},
		methods: {
			aos() {
				axios.get("/wh/php/phone.php").then(res => { //这里是ES6的写法，get请求的地址

					this.phones = res.data; //获取数据

//					console.log(this.phones)
				})
			}

		},
		mounted() {

			this.aos()
		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	.price {
		color: #333333;
	}
	
	.phone {
		background-color: #ddd;
	}
	
	.phone-header {
		background: url(../../assets/img/phones.jpg)center center no-repeat #fff;
		padding-bottom: 17.70833%;
		overflow: hidden;
		width: 100%;
		position: relative;
		color: #fff;
		text-align: center;
		background-size: cover;
		min-height: 150px;
	}
	
	@media screen and (max-width: 400px) .goods-wrap {
		margin: auto 12px;
	}
	
	@media screen and (max-width: 767px) .goods-wrap {
		width: auto;
		margin: auto 20px;
	}
	
	@media screen and (max-width: 1280px) .goods-wrap {
		width: 93.75%;
	}
	
	.goods-wrap {
		width: 100%;
		max-width: 1200px;
		margin: auto;
		background: #f2f2f2;
		padding-bottom: 3.64583%;
	}
	
	@media screen and (max-width: 767px) .goods-list {
		margin-left: 0;
	}
	
	@media screen and (max-width: 1366px) .goods-list {
		font-size: 14px;
	}
	
	.goods-list {
		margin-left: -1.83333%;
		font-size: 14px;
		background-color: #ddd;
		height: 100%;
	}
	
	@media screen and (max-width: 400px) .goods-list li {
		margin-top: 15px;
	}
	
	@media screen and (max-width: 767px) .goods-list li {
		width: 48.33333%;
		max-width: none;
		margin-left: 0;
		padding: 30px 0 35px;
	}
	
	.goods-list li {
		width: 48.33333%;
		max-width: none;
		margin-left: 0;
		padding: 35px 10px 35px 10px;
	}
	
	@media screen and (max-width: 1024px) .goods-list li {
		width: 23.30508%;
		padding: 30px 0;
	}
	
	.goods-list li {
		font-size: 1em;
		color: #333;
		float: left;
		background: #fff;
		text-align: center;
		position: relative;
		transition: all .3s;
	}
	
	@media screen and (max-width: 767px) .goods-list li img {
		width: 72.41379%;
		max-width: none;
	}
	
	@media screen and (max-width: 768px) .goods-list li img {
		width: 76.47059%;
	}
	
	.goods-list li img {
		width: 64.21053%;
		max-width: 183px;
		display: block;
		margin: 0 auto;
	}
	
	.goods-content img,
	.hero-goods-content img,
	.top-banner img {
		vertical-align: top;
	}
	
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0;
		margin-bottom: .5em;
		color: rgba(0, 0, 0, 0.85);
		font-weight: 500;
	}
	
	@media screen and (max-width: 767px) .goods-list li h3 {
		margin: 30px 10px 10px;
	}
	
	.goods-list li h3 {
		line-height: 1.8;
		margin: 20px 20px 8px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>