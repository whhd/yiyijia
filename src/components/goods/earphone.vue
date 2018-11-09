<template>

	<div class="app-earphone">
		<div class="earphone-header">

		</div>
		<div class="goods-wrap">
			<ul class="goods-list">
				<li v-for="(ear,idx) in earphones" :key="ear.idx" class="list">
					<router-link :to="{path:'/detail',query:{array:ear}}">
						<a href=""><img :src="ear.imgurl" alt="" />
							<h3>{{ear.title}}</h3>
							<p class="price">
								<span><span class="unit">¥</span> {{ear.price}}
								</span><br />
								<del><span class="origin-price"><span class="unit">¥</span>{{ear.originPrice}}</span></del>
							</p>
						</a>
					</router-link>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	export default {

		data() {

			return {

				earphones: []
			}
		},
		methods: {
			aos() {
				axios.get("/wh/php/earphone.php").then(res => { //这里是ES6的写法，get请求的地址

					this.earphones = res.data; //获取数据

					//					console.log(this.earphones)
				})
			}

		},
		mounted() {

			this.aos()
		}

	}
</script>

<style>
	.earphone-header {
		background: url(../../assets/img/audio-plate@2x.jpg)center center no-repeat #fff;
		padding-bottom: 17.70833%;
		overflow: hidden;
		width: 100%;
		position: relative;
		color: #fff;
		text-align: center;
		background-size: cover;
		min-height: 150px;
	}
	
	.price {
		color: #999;
	}
</style>