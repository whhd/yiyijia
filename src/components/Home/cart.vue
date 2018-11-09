<template>
	<div>
		<HomeHeader/>
		<div class="app-cart" id="header">

			<div id="basket-info" class="basket-info">
				<nav class="basket-info-nav signed-in">

					<div class="cart-no-products">
						<div class="text-container">
							<p>您的购物车里没有商品！</p>

						</div>
					</div>
					<ul class="cart-info">
						<li class="cart-link">
							<a href="https://store.oneplus.com/cn" data-retry="Retrying" class="full-width one-button btn-red frozen">去购物

							</a>

						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
	import HomeHeader from './HomeHeader.vue'
	export default {
		name: "cart",
		data() {
			return {}
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
	}
	
	ul,
	li {
		list-style: none;
	}
	
	@media screen and (max-width: 1050px) #header #basket-info {
		width: 100%;
		max-width: none;
	}
	
	#header .shop-basket:hover .basket-info {
		height: auto;
		box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
		visibility: visible;
		font-size: 16px;
		background-color: #fff;
		left: calc(50px - 100vw);
		right: 0;
		overflow: hidden;
	}
	
	@media screen and (max-width: 1050px) #header .basket-info .basket-info-nav {
		padding: 20px 0;
		padding-top: 0;
	}
	
	@media screen and (max-width: 1050px) #header .basket-info .cart-no-products {
		padding: 10px 40px;
	}
	
	#header .basket-info .cart-no-products {
		position: relative;
		padding: 7.023% 20px;
		margin-top: 30px;
		text-align: center;
		font-family: Lato;
		font-size: 18px;
		font-weight: 300;
		line-height: 1.56;
		color: #999;
	}
	
	#header .basket-info .cart-info {
		position: relative;
		border-top: 1px solid #dfdfdf;
	}
	
	#header .basket-info .cart-info .cart-link {
		padding: 10px 20px;
		background-color: #eb0028;
		text-align: center;
	}
	
	.one-button.frozen {
		line-height: 40px;
		height: 40px;
		font-size: 14px;
		text-align: center;
	}
	
	.one-button.btn-red {
		background-color: #eb0028;
		color: #fff;
	}
	
	.one-button {
		display: inline-block;
		margin-bottom: 0;
		font-weight: 300;
		text-align: center;
		vertical-align: middle;
		touch-action: manipulation;
		cursor: pointer;
		background-image: none;
		white-space: nowrap;
		border: 1px solid transparent;
		- user-select: none;
		text-decoration: none;
		position: relative;
		z-index: 1;
		border-radius: 2px;
		padding: 0 1em;
	}
</style>