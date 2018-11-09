import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//一级
import home from '../components/Home/Home.vue'
import cart from '../components/Home/cart.vue'
import car from '../components/Home/car.vue'
import next from '../components/Next/Next.vue'
import NotFound from '../components/NotFound/NotFound.vue'

//二级
import login from '../components/Next/login.vue'
import onep from '../components/info/onep.vue'
import store from '../components/info/store.vue'
import brand from '../components/info/brand.vue'
import service from '../components/info/service.vue'
import forum from '../components/info/forum.vue'
import detail from '../components/goods/detail.vue'
//定义路由
const routes = [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/home', component: home 
		},
//		{
//			path: '/next',
//			name: 'next',
//			component: next,
//			children:[{
//				path: 'onep',
//				name: 'onep',
//				component: onep
//			},
//			{
//				path: 'login',
//				name: 'login',
//				component: login
//			},
//			{
//				path: 'onep',
//				name: 'onep',
//				component: onep
//			},
//			{
//				path: 'store',
//				name: 'store',
//				component: store
//			},
//			{
//				path: 'service',
//				name: 'service',
//				component: service
//			},{
//				path: 'brand',
//				name: 'brand',
//				component: brand
//			},
//			
//			{
//				path: 'forum',
//				name: 'forum',
//				component: forum
//			},]
//		},
		{
			path: '/next',
			name: 'next',
			component: next
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/onep',
			name: 'onep',
			component: onep
		},
		{
			path: '/store',
			name: 'store',
			component: store
		},
		{
			path: '/service',
			name: 'service',
			component: service
		},
		{
			path: '/brand',
			name: 'brand',
			component: brand
		},	
		{
			path: '/forum',
			name: 'forum',
			component: forum
		},	
		{
			path: '/detail',
			name: 'detail',
			component: detail
		},
		{
			path: '/car',
			name: 'car',
			component: car
		},
		{
	        path: '/not-found',
	        name : 'not-found',
	        component: NotFound
		}, 
		{
		    //必须在最下面,
		    path: '**',
		    redirect: {name: 'not-found'}//重定向
		}
		]
		const router = new VueRouter({
			routes
		})
		export default router