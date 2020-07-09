// import foot from './foot.vue'
import navs from './nav.vue'
// import login from './compont/login.vue'

// const href = 'http://api.bxst.net'

var index = {
	install(Vue){ 
		Vue.component('navs',navs)
		// Vue.component('foot',foot) 
	}
	
}

export default index; 