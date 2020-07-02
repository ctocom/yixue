// import cxf from './cxf.vue'
import navs from './nav.vue'
// import login from './compont/login.vue'

// const href = 'http://api.bxst.net'

var index = {
	install(Vue){
		// Vue.component('cxf',cxf)
		Vue.component('navs',navs)
		// Vue.component('login',login) 
	}
	
}

export default index; 