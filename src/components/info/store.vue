<template>
	<div class="app-store">
		<AppHomeHeader/>
		<goods/>
	</div>
</template>
<script>
	import AppHomeHeader from '../Home/HomeHeader'
	import goods from '../goods/goods'
	export default {

		data() {
			return {}
		},

		components: {
			AppHomeHeader,
			goods
		}
	};
</script>
<style scoped> 
</style>