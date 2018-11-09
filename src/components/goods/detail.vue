<template>
	<div class="detail">
		<AppHomeHeader/>
		<div class="acc-detail-content" id="accDetail">
			<!--<div class="accdetail-loading" style="display: none;"></div>-->
			<div class="width-wrap flex-mid clearfix">
				<div class="acc-img-show flex-mid">

					<div class="acc-bxslider fl">
						<ul class="" id="bxSliderImg">
							<li>
								<img data-original="https://image01.oneplus.cn/ebp/201805/18/514/ade212415cfcdb3eb63cafb484f639d5.png" :src="this.goodslist.imgurl" alt="" style="display: inline;">
							</li>
						</ul>
					</div>
				</div>

				<div class="acc-info">
					<h1 class="acc-title"></h1>

					<p class="acc-subtitle">{{this.goodslist.title}}</p>

					<div class="acc-price ff-lato">
						<span class="now-price">¥{{this.goodslist.price}}</span> <span class="origin-price"></span>
					</div>

					<div class="acc-option">
						<dl class="clearfix">
							<dt class="fl" data-title="颜色">颜色 - 黑色</dt>
							<dd class="attr-list-box">
								<a href="javascript:void(0);" title="黑色" data-code="OPT00000711" class="attr-imglist active">
									<img src="https://image01.oneplus.cn/ebp/201608/17/1338/ff3abcda00fca67198a070b60a0bf444.jpg" alt="">
								</a>

							</dd>
						</dl>
					</div>

					<div class="acc-btn clearfix">
						<input type="hidden" id="goodsCode" value="1091100014">
<!--<router-link :to="{path:'/car',query:{id:id}}">-->
	<router-link :to="{name: 'car',query:{id:this.goodslist.id,title:this.goodslist.title,imgurl:this.goodslist.imgurl,price:this.goodslist.price}}">
						<div class="goods-buy-btn fl">
							<a class="buy-btn" href="javascript:;" id="buyBtn">加入购物车</a>
						</div>
						</router-link>
				</div>
				</div>
			</div>

		</div>
		<!--<router-view/>-->
	</div>
</template>

<script>
	import AppHomeHeader from '../Home/HomeHeader'
	import $ from 'jquery'
	export default {
		name: "detail",
		data() {
			return {
				goodslist: [],

			}
		},
		created() {
			//这边接收上个组件传递过来的array数组，赋值给data中定义的goodslist
			
			this.goodslist = this.$route.query.array;
			console.log(this.goodslist);
//			var gg = this.goodslist;
//			console.log(gg);
		},

		components: {
			AppHomeHeader
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	ul,
	li {
		list-style: none;
	}
	
	.acc-detail-content {
		background: #efefef;
		padding-top: 9.11458%;
		font-size: 14px;
		position: relative;
	}
	
	.width-wrap {
		width: 100%;
		margin: auto;
		max-width: 1920px;
	}
	
	.flex-mid {
		align-items: center;
	}
	
	.acc-detail-content .acc-img-show {
		width: 100%;
	}
	
	.acc-detail-content .acc-bxslider,
	.acc-detail-content .acc-bxslider li img {
		width: 100%;
	}
	
	@media screen and (max-width: 700px) .acc-detail-content .acc-bxslider {
		height: auto;
	}
	
	.acc-detail-content .acc-bxslider {
		height: auto;
	}
	
	.acc-detail-content .acc-bxslider ul {
		width: 100%;
	}
	
	.acc-detail-content .acc-bxslider {
		position: relative;
		margin: 50px 0;
		overflow: hidden;
		transition: height .2s;
	}
	
	.acc-detail-content .acc-bxslider li {
		text-align: center;
	}
	
	@media screen and (max-width: 700px) .acc-detail-content .acc-info {
		line-height: 1.8;
		padding-bottom: 40px;
		padding-left: 10px;
		width: auto;
		padding-right: 10px;
	}
	
	@media screen and (max-width: 768px) .acc-detail-content .acc-info {
		width: 47%;
	}
	
	.acc-detail-content .acc-info {
		text-align: left;
		line-height: 1.8;
		color: #333;
		padding-bottom: 40px;
		padding-left: 10px;
		width: 47%;
		padding-right: 10px;
	}
	
	.acc-detail-content .acc-info .acc-title {
		font-size: 14px;
		margin-bottom: 10px;
		line-height: 1.2;
	}
	
	@media screen and (max-width: 700px) .acc-detail-content .acc-info .acc-price {
		font-size: 18px;
		padding: 5px 0 10px;
	}
	
	@media screen and (max-width: 1366px) .acc-detail-content .acc-info .acc-price {
		font-size: 36px;
	}
	
	.acc-detail-content .acc-info .acc-price {
		font-size: 18px;
		color: #404040;
		font-weight: 300;
		line-height: .9;
		padding: 5px 0 10px;
		margin-bottom: 20px;
		border-bottom: 1px solid #ccc;
	}
	
	.acc-detail-content .acc-info .acc-option dl:first-child {
		margin-top: 35px;
	}
	
	.acc-detail-content .acc-info .acc-option dl {
		margin: 10px 0 25px;
	}
	
	.acc-detail-content .acc-info .acc-option dt {
		float: none;
		margin-bottom: 15px;
	}
	
	.acc-detail-content .acc-info .attr-list-box .attr-imglist.active {
		vertical-align: text-bottom;
		padding: 2px;
		border: 2px solid #ff334c;
	}
	
	@media screen and (max-width: 768px) .acc-detail-content .acc-info .attr-list-box .attr-imglist {
		width: 25px;
		height: 25px;
	}
	
	.acc-detail-content .acc-info .attr-list-box .attr-imglist {
		display: inline-block;
		width: 32px;
		height: 32px;
		padding: 2px;
		margin-right: 6px;
		vertical-align: text-bottom;
		border: 2px solid transparent;
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
		border-radius: 50%;
	}
	
	@media screen and (max-width: 768px) .acc-detail-content .acc-info .attr-list-box .attr-imglist img {
		width: 25px;
		height: 25px;
	}
	
	.acc-detail-content .acc-info .attr-list-box .attr-imglist img {
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
		border-radius: 50%;
		box-sizing: border-box;
		width: 25px;
		height: 25px;
		vertical-align: unset;
	}
	
	@media screen and (max-width: 700px) .acc-detail-content .acc-info .goods-buy-btn .buy-btn {
		display: inline-block;
		height: 56px;
		line-height: 56px;
		text-align: center;
		cursor: pointer;
		font-size: 14px;
		background: #eb0028;
		color: #fff;
		border: 1px solid #d70226;
		border-radius: 2px;
		transition: color .15s ease 0s;
		position: relative;
		z-index: 1;
		width: 97%;
	}
	
	.acc-detail-content .acc-info .goods-buy-btn .buy-btn {
		display: inline-block;
		width: 293px;
		height: 56px;
		line-height: 56px;
		text-align: center;
		cursor: pointer;
		font-size: 14px;
		background: #eb0028;
		color: #fff;
		border: 1px solid #d70226;
		border-radius: 2px;
		transition: color .15s ease 0s;
		position: relative;
		z-index: 1;
	}
</style>