<template>
  <div id="app">  
    <div style="height: 100%;">
		<div class="tanbar">
		  <navs></navs>
		</div>
		<div style="height: 100%;"> 
			<!-- <keep-alive> -->
				<router-view></router-view>
			<!-- </keep-alive> -->
		</div>
	</div>  
  </div>
</template>
<script> 
// import localStore from './localstorage.js'
	export default {
		data() {
			return {
				// href:'http://api.bxst.net',
			  // activeIndex2: "/"
			     // items:localStore.fetch(),
			};
		},
		mounted() {
			
		},
		methods:{
			

		}, 
		watch:{
			 items:{
				  
			   }
		}
	  }
</script>


<style>
	#app{
		max-width: 1024px;
		height: 100vh;
		margin: 0 auto;
	}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
} 

.tanbar{
	/* width: 80%; */
	margin: 0 auto;
	font-size: 18px;
} 
</style>
