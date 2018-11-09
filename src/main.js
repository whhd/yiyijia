import Vue from 'vue'
import App from './App'

//引入vue-router
//import VueRouter from 'vue-router'
//Vue.use(VueRouter)

//引入jQuery
import $ from 'jquery'
window.$ = $

// 引入Mint
import Mint from 'mint-ui'
Vue.use(Mint)

//引入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//引入ant-design
import 'ant-design-vue/dist/antd.css'
import router from './router'
Vue.config.productionTip = false


new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})