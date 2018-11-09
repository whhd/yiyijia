<template>
	<div class="app-login">
		<AppHomeHeader/>
		<main role="main" id="sign-in-main" class="main-section sign-in-main">
			<div class="container-infinite bg-warm-gray height-vh-auto">
				<div class="sign-in-contianer">
					<div class="sign-in-content">

						<form role="form" class="sign-in-form text-left" :model="loginForm">
							<h5 class="text-black text-center text-strong sign-in-title">登录</h5>
							<div class="margin-4x frozen"></div>
							<div class="form-group">

								<div class="margin-2x frozen"></div>
							</div>
							<div class="form-group">
								<div class="input-email field-pack"><label for="input-email" class="field-label"></label>
									<div class="field auto-complete"><input id="input-email username" name="input-email" type="text" is-show-words-count="true" maxlength="60" placeholder="手机／邮箱／用户名" autocomplete="off" autofocus="autofocus" autocorrect="off" autocapitalize="off" spellcheck="false" class="input username" v-model="loginForm.username">
										<div class="dropdown-menu">
											<div class="list-container">

											</div>
										</div> <label for="input-email" class="clean-btn"></label>
										<div class="error-tips text-xs text-strong"><span></span>

										</div>
									</div>
								</div>
							</div>
							<div class="form-group">
								<div class="password-container">
									<div class="input-password field-pack" data-type="password"><label for="login-password" class="field-label" style="display: none;"><!----></label>
										<div class="field">
											<input id="login-password password" name="input-password" type="password" placeholder="密码" autocomplete="off" class="input password" v-model="loginForm.password">

										</div>

										<div class="field-tips behind-stage">
											<p class="text-xs text-red text-strong invalid-tips"></p>
										</div>

									</div> <label for="input-password" class="show-pwd-btn ico ico-hide-pwd"></label> <label for="input-password" class="clean-pwd-btn"></label>
									<div>
									</div>
								</div>
							</div>

							<div class="form-group">
								<div class="margin-4x frozen"></div>
							</div>
							<div class="form-group"><button type="button" title="" data-retry="Retrying" class="submit-btn full-width one-button btn-red frozen" id="submit-btn">确定 </button></div>
						</form>

						<div class="margin-4x frozen"></div>
						<div class="sign-in-tips text-xs text-center">
							<fieldset>
								<legend>选择其它方式登录</legend>
							</fieldset>
						</div>
						<div class="margin-4x frozen"></div>

						<div class="third-login clearfix">
							<a href="https://account.oneplus.com/cn/wblogin?jump=https%3A%2F%2Fstore.oneplus.com%2Fcn&amp;channel=1" class="third-login-btn weibo-btn"><span class="ico ico-account-weibo text-white"></span></a>
							<a href="https://account.oneplus.com/cn/qqlogin?jump=https%3A%2F%2Fstore.oneplus.com%2Fcn&amp;channel=1" class="third-login-btn qq-btn"><span class="ico ico-account-qq text-white"></span></a>

						</div>
						<div class="margin-6x frozen"></div>
						<div class="link-footer text-sm text-center">
							<a href="https://account.oneplus.com/cn/regist?jump=https%3A%2F%2Fstore.oneplus.com%2Fcn&amp;channel=1" class="link-btn">注册</a> <span class="separator vertical"></span>
							<a href="https://account.oneplus.com/cn/forget?jump=https%3A%2F%2Fstore.oneplus.com%2Fcn&amp;channel=1" class="link-btn">忘记密码</a>
						</div>
					</div>
				</div>
			</div>
		</main>
<router-view></router-view>
	</div>
</template>

<script>
	import axios from 'axios'
	import AppHomeHeader from '../Home/HomeHeader'
	export default {
		data() {
			return {
				loginForm: {
					username: '18200000000',
					password: '123456',
				}
			}
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
	}
	
	ul,
	li {
		list-style: none;
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
	
	.sign-in-main {
		font-family: MYingHeiW4, SlateForOnePlusRegular, Microsoft Yahei;
		font-size: 16px;
		color: #828282;
		box-sizing: border-box;
	}
	
	.container-infinite {
		display: block;
		margin: auto;
		width: 100%;
	}
	
	.bg-warm-gray {
		background-color: #f9f9f9;
	}
	
	@media screen and (max-width: 350px) .sign-in-contianer .sign-in-content {
		width: 280px;
	}
	
	.sign-in-contianer .sign-in-content {
		width: 280px;
		margin: 0 auto;
		padding: 20px 20px 53px;
	}
	
	@media screen and (max-width: 735px) .sign-in-contianer .sign-in-content {
		padding: 20px 20px 53px;
	}
	
	.text-left {
		text-align: left;
	}
	
	.text-center {
		text-align: center;
	}
	
	.text-strong {
		font-weight: 400;
	}
	
	.text-black {
		color: #101920;
		line-height: 1.5;
		font-size: 24px;
	}
	
	.margin-4x.frozen {
		padding-bottom: 20px;
	}
	
	.margin-4x {
		height: 0;
		width: 100%;
		padding-bottom: 8%;
	}
	
	.margin-2x.frozen {
		padding-bottom: 10px;
	}
	
	.margin-2x {
		height: 0;
		width: 100%;
		padding-bottom: 4%;
	}
	
	.auto-complete {
		position: relative;
		margin-bottom: 12px;
	}
	
	.field-pack .field .input {
		box-sizing: border-box;
		display: block;
		width: 100%;
		height: 40px;
		padding: 8px 16px;
		font-size: 14px;
		line-height: 24px;
		color: #101920;
		background-color: #fff;
		background-image: none;
		border: 1px solid #efefef;
		border: 1px solid rgba(0, 0, 0, .1);
		border-radius: 2px;
		transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
		box-shadow: none;
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
	}
	
	.password-container {
		position: relative;
		margin-bottom: 12px;
	}
	
	.sign-in-contianer .sign-in-content .sign-in-form .form-group .submit-btn {
		position: relative;
		z-index: 0;
	}
	
	.sign-in-contianer button.submit-btn {
		box-sizing: border-box;
	}
	
	.one-button.frozen {
		line-height: 40px;
		height: 40px;
		font-size: 14px;
	}
	
	.one-button.btn-red {
		background-color: #eb0028;
		color: #fff;
	}
	
	.full-width {
		width: 100%;
	}
	
	.one-button {
		display: inline-block;
		margin-bottom: 0;
		font-weight: 300;
		text-align: center;
		vertical-align: middle;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		background-image: none;
		white-space: nowrap;
		border: 1px solid transparent;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		text-decoration: none;
		position: relative;
		z-index: 1;
		border-radius: 2px;
		padding: 0 1em;
	}
	
	.sign-in-contianer .sign-in-content .sign-in-tips {
		color: #666;
	}
	
	.text-xs {
		font-size: 12px;
		line-height: 1.7;
	}
	
	.text-center {
		text-align: center;
	}
	
	fieldset {
		display: block;
		margin-inline-start: 2px;
		margin-inline-end: 2px;
		padding-block-start: 0.35em;
		padding-inline-start: 0.75em;
		padding-inline-end: 0.75em;
		padding-block-end: 0.625em;
		min-width: -webkit-min-content;
	}
	
	.sign-in-contianer .sign-in-content .third-login {
		display: flex;
		justify-content: space-around;
	}
	
	.sign-in-contianer .sign-in-content .third-login .weibo-btn {
		background-color: #ea0027;
	}
	
	.sign-in-contianer .sign-in-content .third-login .third-login-btn {
		width: 40px;
		height: 40px;
		display: inline-block;
		border-radius: 50%;
	}
	
	.sign-in-contianer .sign-in-content .third-login .third-login-btn .ico {
		font-size: 40px;
		line-height: 1;
	}
	
	.text-white {
		color: #fff;
	}
	
	.sign-in-contianer .sign-in-content .third-login .qq-btn {
		background-color: #12b7f5;
	}
	
	.sign-in-contianer .sign-in-content .third-login .third-login-btn {
		width: 40px;
		height: 40px;
		display: inline-block;
		border-radius: 50%;
	}
	
	.margin-6x.frozen {
		padding-bottom: 30px;
	}
	
	.sign-in-contianer .sign-in-content .link-footer .separator.vertical {
		width: 1px;
		height: 1em;
		background-color: #dfdfdf;
		display: inline-block;
		line-height: inherit;
		vertical-align: middle;
		margin: 0 1em;
	}
</style>