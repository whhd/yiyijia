<template>
	<div id="app-home">
		<!--<p>123</p>-->
		<AppHomeHeader/>
		<AppHomeBanner/>
		<AppHomeNews/>
		
	</div>
</template>

<script>
	import AppHomeHeader from './HomeHeader'
	import AppHomeBanner from './HomeBanner'
	import AppHomeNews from './HomeNews'
	
	export default {
		name: 'AppHome',
		components: {
			AppHomeHeader,
			AppHomeBanner,
			AppHomeNews,
			
		}
	}
</script>

<style scoped lang="scss">
	
</style>