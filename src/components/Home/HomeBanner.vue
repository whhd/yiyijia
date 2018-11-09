<template>
	<div class="app-home-banner">
		<div class="carousel">
			<div class="carousel-one" v-for="(ban,idx) in banners">
				<h2>
					<span class="title1" style="color: #fff;">{{ban.title1}}</span>
					<span class="title2">
                	<span style="color: #fff; ">{{ban.title2}}</span>

</span>
<a href="https://www.oneplus.com/cn/6t/launch"><p class="title-btn" style="color: #fff;" >{{ban.titleBtn}}</p></a>
<p class="title3" style="color: #fff;padding-top: 10px;text-align: center;">{{ban.title3}}</p>
			
				</h2>
			</div>

		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	export default {

		data() {

			return {

				banners: [],

			}
		},
		methods: {
			aos() {
				axios.get("/wh/php/banner.php").then(res => { //这里是ES6的写法，get请求的地址

					this.banners = res.data; //获取数据

					console.log(this.banners)
				})
			}

		},
		mounted() {

			this.aos()

		}
	}
</script>

<style scoped>
	.carousel {
		width: 100%;
		height: 630px;
		background: #17A4BD;
		overflow: hidden;
	}
	
	.carousel .carousel-one {
		background: url(../../assets/img/one.jpg);
		background-size: cover;
		/*background-color: transparent;*/
		background-repeat: no-repeat;
		background-position: center top;
		cursor: pointer;
		height: 100%;
		width: 100%;
	}
	
	.title1 {
		font-size: 24px;
		font-family: SlateForOnePlusLight;
	}
	
	@media screen and (max-width: 767px) .carousel h2 span {
		display: block;
		text-align: center;
	}
	
	h2 {
		text-align: center;
		padding-top: 60px;
		font-weight: bold;
	}
	
	h2 span {
		display: block;
		text-align: center;
	}
	
	.title-btn {
		display: inline-block;
		width: 110px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		cursor: pointer;
		font-size: 12px;
		padding: 0px 20px;
		font-weight: 400;
		border: 1px solid #fff;
	}
</style>