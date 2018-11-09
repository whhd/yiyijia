<template>
	<div class="app-dataLine">
		<div class="dataLine-header">

		</div>
		<div class="goods-wrap">
			<ul class="goods-list">

				<li v-for="(ear,id) in dataLines" :key="ear.id" class="list">
					<router-link :to="{path:'/detail',query:{array:ear}}">
						<a href=""><img :src="ear.imgurl" alt="" />
							<h3>{{ear.title}}</h3>
							<p class="price">
								<span><span class="unit">¥</span> {{ear.price}}
								</span><br />
								<del><span class="origin-price" ><span class="unit">¥</span>{{ear.originPrice}}</span></del>
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
	export default {

		data() {

			return {

				dataLines: []
			}
		},
		methods: {
			aos() {
				//							alert(777)
				axios.get("/wh/php/dataLine.php").then(res => { //这里是ES6的写法，get请求的地址

					this.dataLines = res.data; //获取数据

//					console.log(this.dataLines)
				})
			}

		},
		mounted() {

			this.aos()
		}

	}
</script>

<style>
	.dataLine-header {
		background: url(../../assets/img/cables-plate@2x.jpg) center center no-repeat #fff;
		padding-bottom: 17.70833%;
		overflow: hidden;
		width: 100%;
		position: relative;
		color: #fff;
		text-align: center;
		background-size: cover;
		min-height: 150px;
	}
</style>