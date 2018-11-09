<template>
	<div class="app-home-news">
		
			<section class="part2 top-recommend clearfix" data-min-height="300">
			<ul>
				<li>
					<h4 style="">以旧换新</h4>
					<a class="img-box img-box-mobile" href="#"><img src="@/assets/img/6966b85e5aa37e6d3e11d65d23e3bca4.jpg" alt=""></a>
				</li>
				<li>
					<h4 style="">参赛赢手机</h4>
					<a class="img-box img-box-mobile" href="#"><img src="@/assets/img/055b121c2259c388bfe7f5d767f916c0.jpg" alt="" /></a>
				</li>
				<li>
					<h4 style="">推荐有礼</h4>
					<a class="img-box img-box-mobile" href="#"><img src="@/assets/img/04788510f69288329e75c754eff3fa00.jpg" alt="" /></a>
				</li>
			</ul>
		</section>
		<section class="part3 odop" id="part3">
			<div class="img-box">
				<div class="odop-text" style="color:#fff">
					<div class="h3">Shot on OnePlus</div>
					<div class="h4"></div>
					<button class="btn opod-btn">我要参加</button>
				</div>
			</div>
		</section>
		<!--7-->
		<div class="section-row" style="order: 7;">
			<div class="sections">
				<div class="section-container" style="width: 100%;">
					<div tpl-id="lastthreeblock-4" class="section-template-placeholder">
						<section class="part4 bottom-promos">
							<div class="inner">
								<ul class="clearfix">
									<li>
										<a href="#">
											<img src="@/assets/img/1ff19e3121bff3083812e050fa7b8ac5.jpg">
											<div class="tit-desc-panel">
												<h4>博客</h4>
												<p>OnePlus 6 Android 9.0 正式版现已推送</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<img src="@/assets/img/04788510f69288329e75c754eff3fa00.jpg">
											<div class="tit-desc-panel">
												<h4>新闻</h4>
												<p>OnePlus 6T，来了。</p>
											</div>
										</a>
									</li>
									<li>
										<a href="#">
											<img src="@/assets/img/6966b85e5aa37e6d3e11d65d23e3bca4.jpg">
											<div class="tit-desc-panel">
												<h4>技巧</h4>
												<p>OnePlus 6 使用技巧</p>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
		
		<div class="section-row" style="order: 8;">
			<div class="sections">
				<div class="section-container" style="width: 100%;">
					<div tpl-id="service_icons-5" class="section-template-placeholder">
						<div class="ft-service">
							<div class="service-wrap">
								<ul>
									<li>
										<a href="https://service.oneplus.com/cn/faq?knowledgeId=A300000227" target="_blank">
											<i class="i-7d-return"></i>
											<span>7天无理由退货</span>
										</a>
									</li>
									<li>
										<a href="https://service.oneplus.com/cn/faq?knowledgeId=A300000228" target="_blank">
											<i class="i-15d-return"></i>
											<span>15天退货保障</span>
										</a>
									</li>
									<li>
										<a href="https://service.oneplus.com/cn/faq?knowledgeId=A300000229" target="_blank">
											<i class="i-30d-swap"></i>
											<span>30天换货保障</span>
										</a>
									</li>
									<li>
										<a href="https://service.oneplus.com/cn/faq?knowledgeId=A100000031" target="_blank">
											<i class="i-free-send"></i>
											<span>99元全场包邮</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<!---->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'AppHomeNews',
		data () {
			return {
			}
		},
		
		
	}
</script>
		
<style scoped>
	*{margin: 0;padding: 0;}
	ul,li{list-style: none;}
	@media screen and (max-width: 767px) .top-recommend li {
		width: 100%;
	}
	
	.top-recommend li {
		display: list-item;
		float: left;
		position: relative;
		text-align: -webkit-match-parent;
	}
	
	li h4 {
		line-height: 1.2;
		display: block;
		margin-block-start: 1.33em;
		margin-block-end: 1.33em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}
	
	.top-recommend li .img-box img {
		width: 100%;
		display: block;
		vertical-align: middle;
	}
	
	.top-recommend li h4 {
		position: absolute;
		font-weight: 400;
		font-size: 20px;
		top: 7.8125%;
		left: 5.46875%;
		z-index: 9;
	}
	
	.odop {
		position: relative;
	}
	
	@media screen and (max-width: 1024px) .part3 .img-box {
		height: 50vw;
		background-image: url(../../assets/img/8070f60cb10b64a0bcf03d98242947ca.jpg);
	}
	
	.part3 .img-box {
		height: 160px;
		background: url(../../assets/img/8070f60cb10b64a0bcf03d98242947ca.jpg) no-repeat center;
		background-size: cover;
	}
	
	@media screen and (max-width: 767px) .odop .odop-text {
		margin-top: -35px;
	}
	
	.odop .odop-text {
		position: absolute;
		top: 50%;
		width: 100%;
		text-align: center;
	}
	
	@media screen and (max-width: 767px) .odop .odop-text .h3 {
		font-weight: 300;
		font-size: 26px;
		line-height: 1.2;
	}
	
	.odop .odop-text .h3 {
		font-weight: 300;
		font-size: 26px;
		line-height: 1.2;
	}
	
	.odop .odop-text .opod-btn {
		display: inline-block;
		width: 70px;
		height: 24px;
		line-height: 24px;
		text-align: center;
		cursor: pointer;
		font-size: 12px;
		background: 0 0;
		color: #fff;
		border: 1px solid #fff;
		-moz-border-radius: 0;
		-webkit-border-radius: 0;
		border-radius: 0;
		-moz-transition: color .15s ease 0s;
		transition: color .15s ease 0s;
		position: relative;
		z-index: 1;
		border-width: 2px;
	}
	
	.section-row {
		width: 100%;
		box-sizing: border-box;
		position: relative;
		display: flex;
	}
	
	.section-row .sections {
		width: 100%;
		display: flex;
	}
	
	.section-row .sections .section-container {
		position: relative;
		height: 100%;
	}
	
	.bottom-promos {
		background: #f6f6f6;
		padding: 5.98958% 0;
	}
	
	@media screen and (max-width: 1200px) .bottom-promos .inner {
		padding: 0 20px;
	}
	
	.bottom-promos .inner {
		padding: 0 20px;
		max-width: 1200px;
		margin: 0 auto;
		box-sizing: border-box;
	}
	
	.clearfix {
		zoom: 1;
	}
	
	@media screen and (max-width: 767px) .bottom-promos li {
		width: 90%;
		display: block;
		margin: 0 auto 20px;
	}
	
	.bottom-promos li {
		width: 90%;
		display: block;
		margin: 0 auto 20px;
		background: #fff;
		transition: all .3s;
		/*margin-right: 1.5%;*/
		vertical-align: middle;
	}
	
	.bottom-promos li img {
		width: 100%;
	}
	
	@media screen and (max-width: 1200px) .bottom-promos .tit-desc-panel {
		min-height: 110px;
	}
	
	.bottom-promos .tit-desc-panel {
		min-height: 110px;
		background: #fff;
		box-sizing: border-box;
		padding: 5.95855% 6.99482%;
		color: #333;
	}
	
	@media screen and (max-width: 1200px) .bottom-promos .tit-desc-panel h4 {
		font-size: 16px;
	}
	
	.bottom-promos .tit-desc-panel h4 {
		font-weight: 400;
		line-height: 34px;
		font-size: 16px;
	}
	
	@media screen and (max-width: 1200px) .bottom-promos .tit-desc-panel p {
		font-size: 12px;
	}
	
	.bottom-promos .tit-desc-panel p {
		font-size: 12px;
		line-height: 1.5;
		white-space: normal;
	}
	
	
	@media screen and (max-width: 400px) .ft-service .service-wrap {
		margin: auto 12px;
	}
	
	@media screen and (max-width: 767px) .ft-service .service-wrap {
		width: auto;
		margin: auto 20px;
	}
	
	@media screen and (max-width: 1280px) .ft-service .service-wrap {
		/*width: 93.75%;*/
	}
	
	.ft-service .service-wrap {
		/* width: 100%;*/
		max-width: 1200px;
		margin: auto;
		margin: auto 12px;
	}
	
	.ft-service .service-wrap {
		border-bottom: 1px solid #e4e4e4;
	}
	
	@media screen and (max-width: 550px) .ft-service li {
		width: 50%;
		padding: 30px 0;
	}
	
	@media screen and (max-width: 1024px) .ft-service li {
		font-size: 14px;
	}
	
	.ft-service li {
		width: 50%;
		float: left;
		text-align: center;
		padding: 30px 0;
		font-size: 14px;
	}
	
	.ft-service li a {
		display: block;
		color: #565b62;
	}
	
	.ft-service .i-7d-return {
		background-image: url(../../assets/img/serviceIcons@2x-sa9f58b327e.png);
		background-position: 0 -280px;
		height: 80px;
		width: 80px;
		background-size: 80px auto;
		display: inline-block;
		background-repeat: no-repeat;
	}
	
	.ft-service li span {
		display: block;
		padding-top: 15px;
	}
	
	.ft-service .i-15d-return {
		background-image: url(../../assets/img/serviceIcons@2x-sa9f58b327e.png);
		background-position: 0 0;
		height: 80px;
		width: 80px;
		background-size: 80px auto;
		display: inline-block;
		background-repeat: no-repeat;
	}
	
	.ft-service .i-30d-swap {
		background-image: url(../../assets/img/serviceIcons@2x-sa9f58b327e.png);
		background-position: 0 -160px;
		height: 80px;
		width: 80px;
		background-size: 80px auto;
		display: inline-block;
		background-repeat: no-repeat;
	}
	
	.ft-service .i-free-send {
		background-image: url(../../assets/img/serviceIcons@2x-sa9f58b327e.png);
		background-position: 0 -400px;
		height: 80px;
		width: 80px;
		background-size: 80px auto;
		display: inline-block;
		background-repeat: no-repeat;
	}
</style>