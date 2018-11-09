<template>
	<div id="app-next">
		<nextall/>
		<router-view/>
		
	</div>
</template>

<script>
	import nextall from './nextall.vue'
	export default {
		name: 'Next',
		data(){
			return {

			}
		},
		components:{
			nextall
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
</style>