<template>
	<div class="app-car">
		<HomeHeader/>
		<div class="content flow-cart">
			<div class="main-c">

				<div class="m-my-cart-head">
					<em>我的购物车</em>
					<span>全场满99免运费</span>
				</div>
			</div>
			<div class="main-c">
				<div id="cartContent">
					<div class="cart-top-tip">
					</div>
					<div class="goods-list">
		
						</li>
						<li class="list-body">
							<div class="main-goods " data-value="1111100012" data-type="1">
								<ul class="cart-product" data-value="1111100012" data-type="1">
									<li>
										<a href="https://store.oneplus.com/cn/products/P1100121" target="_blank"><img class="goods-img" :src="this.imgurl" alt="this.title"></a>
										<span class="name-info">
						<span><a href="https://store.oneplus.com/cn/products/P1100121" target="_blank">{{this.title}}</a></span>
										</span>
										<span class="delete-btn" data-value="1111100012" data-type="" data-suit="" data-insure=""></span>
									</li>
									<li class="price">
										<div>
											<p>¥ {{this.price}}</p>

										</div>
									</li>

									<li class="goods-number">
										<span class="goods-num">
						<span class="goods-minus disabled"><span></span></span>
										<span>{{count}}</span>
										<span class="goods-plus " @click="ja(index)"><span></span><span></span></span>
										</span>
										 

									</li>
									
									<li class="total-price">¥ {{this.price}}</li>
								</ul>
							</div>
						</li>
						</ul>
						<div class="total-panel clearfix">
							<div class="total-list">
								<div class="total-content">
									<p class="freight-tip">
										已选择 <span class="total-goods-num">1</span> 件商品
									</p>
									<dl>
										<dt>购物车商品小计</dt>
										<dd class="all-price">¥ {{this.price}}</dd>
										<dt>运费</dt>
										<dd>¥ 0</dd>
									</dl>
									<dl class="amount-to">
										<dt>总价</dt>
										<dd class="amount-price">¥ {{this.price}}</dd>
									</dl>
								</div>
								<div class="checkout-btn-bar">
									<a href="https://store.oneplus.com/cn/order/tocheckout" id="goOrder" onclick="_opq.push(['trackEvent','onepluscn_A0','去结算'])"><span id="goOrderBtn">去结算</span></a>
									<a class="go-store-btn" href="https://store.oneplus.com/cn" onclick="_opq.push(['trackEvent','onepluscn_A0','继续购物'])">继续购物</a>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import HomeHeader from './HomeHeader.vue'
	import $ from 'jquery'

	export default {
		name: "car",
		data() {
			return {
				goods:'',
				count:1,
				tatol:''
			}
		},
		  created() {
		  	
		  		
      				this.id = this.$route.query.id,
      				this.title = this.$route.query.title,
      				this.imgurl = this.$route.query.imgurl,
      				this.price = this.$route.query.price,
      				
      			console.log(this, this.id,this.title,this.imgurl,this.price)
      			
    },
    computed: {


//  	Handle: function(index) {
//          if(this.goods[index].count === 1) return
//          this.list[index].count--;
//      },
//      //增加商品数量
//      ja(index) {
//          this.goods[index].count++;
//      },
       
},
		components: {
			HomeHeader
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
	
	.content {
		width: 100%;
		background-color: #efefef;
	}
	
	@media screen and (max-width: 650px) .main-c {
		width: 100%;
	}
	
	.main-c {
		max-width: 1200px;
		margin: 0 auto;
		text-align: left;
	}
	
	@media screen and (max-width: 767px) .main-c .m-my-cart-head {
		display: block;
	}
	
	.main-c .m-my-cart-head {
		display: block;
		padding: 20px 0 20px 10px;
		border-bottom: 1px solid #dfdfdf;
		color: #333;
	}
	
	.main-c .m-my-cart-head em {
		font-size: 16px;
		font-style: normal;
	}
	
	.main-c .m-my-cart-head span {
		font-size: 12px;
		color: #999;
	}
	
	@media screen and (max-width: 650px) .main-c {
		width: 100%;
	}
	
	@media screen and (max-width: 1240px) .main-c {
		width: 96.09375%;
	}
	
	.main-c {
		max-width: 1200px;
		margin: 0 auto;
		text-align: left;
	}
	
	#op-content {
		font-family: LATO-REGULAR, "Helvetica Neue", Arial, "Microsoft Yahei", Helvetica, sans-serif;
	}
	
	@media screen and (max-width: 767px) .goods-list {
		padding-bottom: 20px;
	}
	
	.goods-list {
		padding-bottom: 20px;
	}
	
	.goods-list .goods-list-box {
		font-size: 14px;
		width: 100%;
	}
	
	.goods-list .list-body {
		background: #fff;
		position: relative;
	}
	
	.goods-list .main-goods:first-child {
		border-top: 0 none;
	}
	
	@media screen and (max-width: 767px) .goods-list .list-head,
	.goods-list .main-goods {
		margin: 0;
		padding: 15px 5.33333% 13px 26.66667%;
	}
	
	@media screen and (max-width: 1024px) .goods-list .main-goods {
		padding-left: 15.78947%;
	}
	
	.goods-list .main-goods {
		padding: 15px 5.33333% 13px 26.66667%;
		border-top: 1px solid #ddd;
		position: relative;
		color: #333;
	}
	
	@media screen and (max-width: 767px) .goods-list .cart-product {
		min-height: auto;
		padding-bottom: 0;
		margin-bottom: 0;
	}
	
	.goods-list .cart-product {
		min-height: auto;
		padding-bottom: 0;
		margin-bottom: 0;
	}
	
	@media screen and (max-width: 767px) .goods-list .cart-product li {
		padding-top: 2px;
		padding-bottom: 2px;
	}
	
	.goods-list .cart-product li {
		padding-top: 2px;
		padding-bottom: 2px;
	}
	
	@media screen and (max-width: 320px) and (max-width: 767px) .goods-list .cart-product .goods-img {
		left: -85px;
	}
	
	@media screen and (max-width: 767px) .goods-list .cart-product .goods-img {
		width: 95px;
		left: -100px;
		top: 0;
	}
	
	.goods-list .cart-product .goods-img {
		width: 95px;
		left: 0px;
		top: 0px;
		position: absolute;
	}
	
	@media screen and (max-width: 767px) .goods-list li:first-child .name-info {
		padding-left: 0;
		font-size: 14px;
		padding-right: 20px;
		line-height: 1.4;
	}
	
	.goods-list li:first-child .name-info {
		display: inline-block;
		font-size: 14px;
		color: #212121;
		padding-left: 20px;
		line-height: 24px;
	}
	
	@media screen and (max-width: 767px) .goods-list .delete-btn {
		position: absolute;
		right: 0;
		top: 2px;
	}
	
	.goods-list .delete-btn {
		display: inline-block;
		position: absolute;
		right: 0;
		top: 2px;
		background-repeat: no-repeat;
		background-image: url(../../assets/img/cart-icons-sbbe05c499c.png);
		background-position: 0 -126px;
		width: 16px;
		height: 19px;
		cursor: pointer;
	}
	
	.goods-list .price {
		display: table;
	}
	
	.goods-list .price div {
		display: table-cell;
		vertical-align: middle;
	}
	
	@media screen and (max-width: 767px) .goods-list .price p {
		display: inline-block;
		margin-right: 5px;
		color: #666;
	}
	
	.goods-list p {
		line-height: 1.6;
		display: inline-block;
		/*margin-right: 5px;*/
		padding-left: 20px;
		color: #666;
	}
	
	@media screen and (max-width: 767px) .goods-list .cart-product li {
		padding-top: 2px;
		padding-bottom: 2px;
	}
	
	@media screen and (max-width: 767px) .goods-list .cart-product li.goods-number {
		text-align: left;
		margin-top: 10px;
		padding-top: 15px;
		width: 50%;
		float: left;
		border-top: 1px solid #e2e2e2;
	}
	
	.goods-list .cart-product li.goods-number {
		text-align: left;
		margin-top: 10px;
		padding-top: 15px;
		width: 50%;
		float: left;
		padding-top: 2px;
		padding-bottom: 2px;
	}
	
	@media screen and (max-width: 767px) .goods-list .cart-product li {
		padding-top: 2px;
		padding-bottom: 2px;
	}
	
	@media screen and (max-width: 767px) .goods-list .goods-num {
		font-size: 14px;
	}
	
	.goods-list .goods-num {
		position: relative;
		display: inline-block;
		height: 25px;
		line-height: 25px;
		width: 85px;
		border: 1px solid #dfdfdf;
		border-radius: 2px;
		margin-top: -2px;
		text-align: center;
		color: #333;
		font-size: 14px;
	}
	
	.goods-list .goods-minus {
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
		border-right: none;
	}
	
	.goods-list .goods-minus,
	.goods-list .goods-plus {
		width: 24px;
		height: 23px;
		border: 1px solid #f9f9f9;
		border-radius: 2px;
	}
	
	.goods-list .goods-minus span,
	.goods-list .goods-plus span {
		position: absolute;
		top: 11px;
		left: 8px;
		height: 2px;
		width: 10px;
		background: #ccc;
	}
	
	.goods-list .goods-plus {
		position: absolute;
		top: 0;
		right: 0;
		cursor: pointer;
		border-left: none;
	}
	
	.goods-list .goods-plus span:first-child {
		top: 7px;
		left: 12px;
		height: 10px;
		width: 2px;
	}
	
	@media screen and (max-width: 767px) .goods-list .cart-product li.total-price {
		text-align: right;
		font-size: 14px;
		padding-top: 20px;
	}
	
	.goods-list .cart-product li.total-price {
		text-align: right;
		font-size: 14px;
		padding-top: 15px;
		border-top: 1px solid #e2e2e2;
	}
	
	@media screen and (max-width: 767px) .goods-list .total-panel {
		border-top: none;
		margin-top: 6px;
		margin-bottom: 0;
		background-color: #fff;
		padding: 10px;
	}
	
	.goods-list .total-panel {
		margin-top: 6px;
		padding: 10px;
		position: relative;
		background: #fff;
		border-top: 1px solid #dfdfdf;
	}
	
	@media screen and (max-width: 767px) .goods-list .total-list {
		float: none;
		width: 100%;
		margin-right: 0;
		text-align: left;
	}
	
	@media screen and (max-width: 768px) .goods-list .total-list {
		width: 310px;
	}
	
	.goods-list .total-list {
		float: none;
		text-align: left;
		font-size: 14px;
		width: 100%;
	}
	
	@media screen and (max-width: 767px) .goods-list .total-list .freight-tip {
		position: static;
		margin-left: 0;
		border-bottom: 1px solid #dfdfdf;
		padding-bottom: 10px;
		line-height: 1.8;
	}
	
	.goods-list .total-list .freight-tip {
		color: #999;
		padding-left: 0;
		font-size: 12px;
		border-bottom: 1px solid #dfdfdf;
		padding-bottom: 10px;
		width: 100%;
	}
	
	.goods-list .total-list dl dt {
		float: left;
		color: #999;
		font-size: 12px;
		text-align: left;
	}
	
	.goods-list .total-list dl dt,
	.goods-list .total-list dl dd {
		width: 50%;
		padding-top: 10px;
	}
	
	.goods-list .total-list dl dd {
		float: right;
		color: #333;
		text-align: right;
	}
	
	.goods-list .total-list .amount-to {
		/*  border-top: 1px solid #dfdfdf;*/
		margin-top: 10px;
	}
	
	.goods-list .total-list dl {
		line-height: 1.6;
	}
	
	.goods-list .total-list .amount-to dt {
		margin-top: 10px;
		font-size: 14px;
		color: #333;
	}
	
	.goods-list .total-list .amount-to dd {
		font-size: 30px;
		vertical-align: bottom;
	}
	
	.goods-list .total-list .amount-to dd {
		font-family: lato, "Microsoft Yahei";
	}
	
	.goods-list .total-list dl dd {
		float: right;
		color: #333;
		text-align: right;
	}
	
	.goods-list .total-list dl dd,
	.goods-list .total-list dl dt {
		width: 50%;
		padding-top: 10px;
	}
	
	@media screen and (max-width: 767px) .goods-list .total-list .checkout-btn-bar {
		position: relative;
		min-height: 50px;
		margin: 10px 0;
	}
	
	.goods-list .total-list .checkout-btn-bar {
		clear: both;
		width: 100%;
		padding-top: 10px;
	}
	
	@media screen and (max-width: 767px) .goods-list .total-list .go-store-btn {
		margin-top: 45px;
	}
	
	@media screen and (max-width: 767px) .goods-list .total-list #goOrderBtn,
	.goods-list .total-list .go-store-btn {
		width: 100%;
		float: none;
	}
	
	@media screen and (max-width: 768px) .goods-list .total-list #goOrderBtn,
	.goods-list .total-list .go-store-btn {
		width: 150px;
	}
	
	.goods-list .total-list #goOrderBtn {
		display: inline-block;
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		cursor: pointer;
		font-size: 14px;
		background: #eb0028;
		color: #fff;
		border: 1px solid #d70226;
		-moz-border-radius: 2px;
		-webkit-border-radius: 2px;
		border-radius: 2px;
		transition: color .15s ease 0s;
		position: relative;
		z-index: 1;
	}
	
	.goods-list .total-list .go-store-btn {
		display: inline-block;
		width: 100%;
		height: 48px;
		line-height: 48px;
		text-align: center;
		cursor: pointer;
		font-size: 14px;
		background: 0 0;
		color: #333;
		border: 1px solid #d6d6d6;
		border-radius: 2px;
		transition: color .15s ease 0s;
		position: relative;
		z-index: 1;
		margin-top: 10px;
	}
</style>