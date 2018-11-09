<template>
	<div class="app-parameter">
		<!--<div>参数2</div>-->
		<div class="top-banner tilt-bottom-in">
			<div class="bg-container"><img src="https://statics.oneplus.cn/ov/assets/images/events/2018/819/specs/specs_640.jpg" alt=""></div>
			<div class="specs-info container-text">
				<div class="specs-phone">
					<div class="title text-white">参数</div>
					<ul class="specs-list">
						<li class="flex-xs">
							<div class="col-1 item">
								<div class="sub-title text-white">高通骁龙™845</div>
								<div class="text text-white">移动平台</div>
							</div>
							<div class="col-1 item">
								<div class="sub-title text-white">最高 8GB+256GB</div>
								<div class="text text-white">存储组合</div>
							</div>
						</li>
						<li class="flex-xs">
							<div class="col-1 item">
								<div class="sub-title text-white">2000 万+1600 万 </div>
								<div class="text text-white">2 倍速 AI 双摄</div>
							</div>
							<div class="col-1 item">
								<div class="sub-title text-white">6.28 英寸全面屏</div>
								<div class="text text-white">19:9 Optic AMOLED</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<el-collapse v-model="activeName" accordion>
			<div class="detail-specs">
				<div class="detail-common detail-specs">
					<div class="detail-common-container animated">
						<div class="common-detail common-detail-onlytwotext as-common-detail">

							<div class="content">
								<div class="text-container">
									<el-collapse-item title="基本参数 " name="1" class="specs-text as-show-specs-text ant1 appear">
										<!--<h2 data-text="+" class="specs-text as-show-specs-text ant1 appear">基本参数</h2>-->
										<div class="item-box">
											<div class="item ant2">
												<h3>尺寸</h3>
												<p>155.7*75.4*7.75 mm</p>
												<h3>重量</h3>
												<p>177g</p>
												<h3>材质</h3>
												<p>3D Corning<sup>®</sup> Gorilla<sup>®</sup> Glass 5 玻璃 铝合金金属中框</p>
												<h3>操作系统</h3>
												<p>H<sub>2</sub> OS 5.1 基于 Android™ 8.1 开发</p>
												<h3>CPU</h3>
												<p>高通骁龙™ 845 移动平台 (8 核，10nm 工艺，单核最高主频 2.8GHz)，搭载 AIE 人工智能引擎</p>
												<h3>GPU</h3>
												<p>Adreno 630 图形处理器</p>
												<h3>RAM</h3>
												<p>6GB/8GB LPDDR4X 四通道大内存</p>
												<h3>存储</h3>
												<p>64GB/128GB/256GB UFS 2.1 双通道闪存</p>
												<h3>传感器</h3>
												<p>指纹传感器、霍尔感应器、加速度传感器、陀螺仪、距离感应器、RGB 光线感应器、电子罗盘、Sensor Core</p>
											</div>
											<div class="item ant2">
												<h3>接口</h3>
												<p>
													USB 2.0, Type-C，支持 Type-C 数字音频输出，双 Nano-SIM 卡，双卡双待 3.5 mm 耳机插孔
												</p>
												<h3>电池</h3>
												<p>
													3300mAh (不可拆卸) OnePlus Dash 闪充技术 (5V/4A)
												</p>
												<h3>呼吸灯</h3>
												<p>
													RGB LED 呼吸灯
												</p>
												<h3>振动</h3>
												<p>
													线性马达
												</p>
												<h3>按键</h3>
												<p>
													触摸按键：多任务、Home、返回（支持左右按键功能切换）, 并支持全屏手势（可在设置-按键中开启）<br> 三段式开关：静默、振动、响铃
													<br> 支持支付宝、微信指纹支付
												</p>
												<h3>音频</h3>
												<p>
													高保真扬声器<br> 支持通话降噪
													<br> 支持 Dirac HD Sound<sup>®</sup><br> 支持 Dirac Power Sound<sup>®</sup></p>
											</div>
										</div>
									</el-collapse-item>

								</div>
							</div>
						</div>

						<div class="common-detail common-detail-onlytwotext as-common-detail">
							<div class="content">
								<div class="text-container">
									<el-collapse-item title="网络与连接性" name="2" class="specs-text as-show-specs-text ant1">
										<div class="item-box">
											<div class="item ant2">
												<h3>LTE</h3>
												<p>
													4G+，4x4 MIMO，4 天线技术<br> 支持下行 4xCA，上行 CA，支持高阶调制<br> 最高支持下行 Cat.16<br> 上行 Cat.13 (1Gbps /150Mbps)（需运营商支持）
												</p>
												<h3>频段</h3>
												<p>
													FDD LTE: <br> Band 1/2/3/4/5/7/8/12/17/18/19/20/25/26/28/29/66<br> TDD LTE: Band 34/38/39/40/41<br> TD-SCDMA: Band 34/39<br> UMTS(WCDMA): Band 1/2/4/5/8/9/19<br> CDMA: BC0/BC1<br> GSM: 850/900/1800/1900 MHz
												</p>
												<h3>双卡使用介绍</h3>
												<p>
													全网通<br> 当手机使用单卡时: 任意卡槽均可支持移动、联通、电信 4G+/4G/3G/2G 网络<br> 当手机使用双卡时：
													<br> 可设置任意卡为主卡（默认流量卡）；
													<br> 主卡支持任意运营商的 4G+/4G/3G/2G 网络，若副卡为移动卡，则副卡支持 4G/2G 网络驻网。<br> 若副卡为联通卡，则副卡支持 4G/3G/2G 驻网，若副卡为电信卡，则副卡仅支持 2G 网络驻网。<br> 两张卡均为电信卡时，主卡可使用 4G 网络，副卡无服务。
												</p>
												<p></p>
											</div>
											<div class="item ant2">
												<h3>WLAN</h3>
												<p>
													2*2MIMO 双天线，支持 Wi-Fi 802.11 a/b/g/n/ac，支持2.4G/5G双频
												</p>
												<p></p>
												<h3>蓝牙</h3>
												<p>Bluetooth 5.0，支持 aptX &amp; aptX HD 高清音乐传输</p>
												<h3>NFC</h3>
												<p>
													支持
												</p>
												<h3>定位功能</h3>
												<p>
													GPS、GLONASS、Galileo、北斗导航
												</p>
											</div>
										</div>
									</el-collapse-item>
								</div>
							</div>
						</div>

						<div class="common-detail common-detail-onlytwotext as-common-detail">
							<div class="content">
								<div class="text-container">
									<el-collapse-item title="屏幕" name="3" class="specs-text as-show-specs-text ant1">
										<div class="item-box">
											<div class="item ant2">
												<h3>规格</h3>
												<p>
													尺寸： 6.28 英寸<br> 分辨率： 2280 x 1080<br> 比例: 19:9<br> 材质：Optic AMOLED<br> 支持 sRGB，DCI-P3 显示<br> 玻璃: 2.5D Corning<sup>®</sup> Gorilla<sup>®</sup> Glass 5
												</p>
											</div>
											<div class="item ant2">
												<h3>功能</h3>
												<p>
													自适应模式<br> 阅读模式
													<br> 夜间模式
													<br> 抬手亮屏
													<br></p>
											</div>
										</div>
									</el-collapse-item>
								</div>
							</div>
						</div>

						<div class="common-detail common-detail-onlytwotext as-common-detail">
							<div class="content">
								<div class="text-container">
									<el-collapse-item title="后置摄像 " name="4" class="specs-text as-show-specs-text ant1">
										<div class="item-box">
											<div class="item ant2">
												<h3>后置主摄像头</h3>
												<p>
													传感器 Sony IMX 519<br> 像素: 1600 万像素<br> 像素尺寸：1.22 µm<br> OIS 光学防抖：支持<br> EIS 电子防抖：支持<br> 对焦技术： PDAF 相位对焦<br> 光圈: f/1.7 大光圈
												</p>
												<h3>后置副摄像头</h3>
												<p>
													传感器: Sony IMX 376K<br> 像素：2000 万像素<br> 像素尺寸: 1.0µm<br> 对焦技术: PDAF 相位对焦<br> 光圈: f/1.7 大光圈
												</p>
											</div>
											<div class="item ant2">
												<h3>闪光灯</h3>
												<p>
													双 LED 闪光灯
												</p>
												<h3>视频拍摄</h3>
												<p>
													4K 视频拍摄，30fps，60fps<br> 1080p 视频拍摄，30fps，60fps<br> 720p 视频拍摄，30fps<br> 全新慢动作视频：720p 480fps ，1080p 240fps<br> 延时摄影
													<br> 视频编辑
													<br></p>
												<h3>功能</h3>
												<p>
													人像模式，专业模式，全景模式，像素精选，HDR，RAW 格式
												</p>
											</div>
										</div>
									</el-collapse-item>
								</div>
							</div>
						</div>

						<div class="common-detail common-detail-onlytwotext as-common-detail">
							<div class="content">
								<div class="text-container">
									<el-collapse-item title="前置摄像 " name="5" class="specs-text as-show-specs-text ant1">
										<div class="item-box">
											<div class="item ant2">
												<h3>前置摄像头</h3>
												<p>
													传感器: Sony IMX 371<br> 像素: 1600 万像素<br> 像素尺寸: 1.0 µm<br> EIS 电子防抖：支持<br> 光圈: f/2.0
												</p>
												<h3>功能</h3>
												<p>面部解锁，屏幕补光，微笑快门，HDR，美颜</p>
											</div>
											<div class="item ant2">
												<h3>视频拍摄</h3>
												<p>
													1080p 视频拍摄，30fps<br> 720p 视频拍摄，30fps<br> 延时摄影
												</p>
											</div>
										</div>
									</el-collapse-item>
								</div>
							</div>
						</div>

						<div class="common-detail common-detail-onlytwotext as-common-detail">
							<div class="content">
								<div class="text-container">
									<el-collapse-item title="多媒体 " name="6" class="specs-text as-show-specs-text ant1">
										<div class="item-box">
											<div class="item ant2">
												<h3>音频</h3>
												<p>
													播放: MP3, AAC, AAC+, WMA, AMR-NB, AMR-WB, WAV, FLAC, APE, OGG, MID, M4A, IMY<br> 录制: WAV, AAC, AMR
												</p>
												<h3>视频</h3>
												<p>
													播放: MKV, MOV, MP4, H.265(HEVC), AVI, WMV, TS, 3GP, FLV, WEBM<br> 录制: MP4
												</p>
											</div>
											<div class="item ant2">
												<h3>图片</h3>
												<p>
													浏览: JPEG, PNG, BMP, GIF<br> 输出: JPEG
												</p>
											</div>
										</div>
									</el-collapse-item>
								</div>
							</div>
						</div>

						<div class="common-detail common-detail-onlytwotext as-common-detail">
							<div class="content">
								<div class="text-container">
									<el-collapse-item title="包装清单 " name="7" class="specs-text as-show-specs-text ant1">
										<div class="item-box">
											<div class="item ant2">
												<p>
													OnePlus 6<br> Dash Type-C 数据线<br> Dash 闪充适配器<br> 保护套（推荐从底部开始装配保护套）
													<br> SIM 卡针<br> 快速上手指南
													<br> 产品重要信息与保修卡
												</p>
											</div>
										</div>
									</el-collapse-item>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</el-collapse>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeName: '1'
			};
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
	
	@media screen and (max-width: 735px) .top-banner {
		padding-top: 260px;
	}
	
	.top-banner {
		padding-top: 260px;
		position: relative;
		background-color: #000;
		background-size: cover;
		background-position: 50%;
	}
	
	.tilt-bottom-in {
		width: 100%;
	}
	
	.top-banner .bg-container img {
		width: 100%;
		border: 0 none;
		vertical-align: middle;
	}
	
	@media screen and (max-width: 550px) .top-banner .specs-info {
		padding: 15% 20px;
	}
	
	@media screen and (max-width: 735px) .top-banner .specs-info {
		padding: 10% 30px 0;
		padding-left: 20px;
		padding-right: 20px;
	}
	
	@media screen and (max-width: 1067px) .top-banner .specs-info {
		padding: 10% 35px 0;
	}
	
	@media screen and (max-width: 1200px) .top-banner .specs-info {
		padding: 9% 40px 0;
	}
	
	.top-banner .specs-info {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		padding-top: 13%;
		padding-left: 30px;
		padding-right: 30px;
	}
	
	.container-text {
		max-width: 1200px;
		min-width: 300px;
	}
	
	@media screen and (max-width: 735px) .top-banner .title {
		font-size: 30px;
		padding-bottom: 20px;
	}
	
	@media screen and (max-width: 1067px) .top-banner .title {
		font-size: 40px;
		padding-bottom: 20px;
	}
	
	@media screen and (max-width: 1200px) .top-banner .title {
		padding-bottom: 40px;
	}
	
	.top-banner .title {
		font-family: SlateForOnePlusRegular, MYingHeiW5, Microsoft Yahei;
		font-size: 40px;
		padding-bottom: 40px;
	}
	
	.text-white {
		color: #fff;
	}
	
	@media screen and (max-width: 735px) .top-banner .specs-list {
		width: 100%;
	}
	
	.top-banner .specs-list {
		/* width: 50%;*/
	}
	
	@media screen and (max-width: 735px) .flex-xs {
		display: flex;
	}
	
	.flex-xs {
		display: flex;
	}
	
	@media screen and (max-width: 1067px) .top-banner .specs-list .text {
		font-size: 14px;
	}
	
	.top-banner .specs-list .text {
		font-family: SlateForOnePlusRegular, MYingHeiW3, Microsoft Yahei;
		font-size: 14px;
	}
	
	.text-white {
		color: #fff;
	}
	
	@media screen and (max-width: 735px) .top-banner .specs-list .item {
		padding-bottom: 20px;
	}
	
	.top-banner .specs-list .item {
		padding-bottom: 20px;
	}
	
	.col-1 {
		flex: 1;
	}
	
	.detail-specs {
		color: #000;
	}
	
	.detail-common .common-detail-onlytwotext {
		margin: 0 20px;
	}
	
	.detail-specs .common-detail .content {
		position: relative;
	}
	
	.detail-common .common-detail-onlytwotext .content {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.detail-common .common-detail-onlytwotext .text-container {
		text-align: left;
	}
	
	@media screen and (max-width: 768px) .detail-common .common-detail-onlytwotext .text-container h2 {
		position: relative;
		font-size: 24px;
	}
	
	.detail-common .common-detail-onlytwotext .text-container h2 {
		font-family: SlateForOnePlusRegular, MYingHeiW4, Microsoft Yahei;
		font-size: 24px;
	}
	
	.detail-specs .common-detail .specs-text {
		padding: 5rem 0;
		cursor: pointer;
	}
	
	.animated.ant1,
	.animated .ant1 {
		transition-delay: 0s;
	}
	
	@media screen and (max-width: 768px) .detail-common .common-detail-onlytwotext .item-box {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		flex-direction: column;
		display: none;
	}
	
	.detail-common .common-detail-onlytwotext .item-box {
		-webkit-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: start;
		align-items: flex-start;
	}
	
	.detail-specs .common-detail .item-box .item {
		padding-bottom: 5rem;
	}
	
	@media screen and (max-width: 768px) .detail-common .common-detail-onlytwotext .item-box .item {
		width: 100%;
	}
	
	.detail-common .common-detail-onlytwotext .item-box .item {
		/* width: 44.166%;*/
	}
	
	.animated.ant2,
	.animated .ant2 {
		transition-delay: .2s;
	}
</style>