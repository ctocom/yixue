<template>
	<div class="tic_max"> 
	 
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				checkedNames: [],
				tiData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'), 
					paper_id: '1'
				},
				tiDatas:{}, 
			}
		},
		mounted() { 
			 
		},
		methods: {
			goHome() { 
				
			}, 
		}
	};
</script>

<style> 
.tic_max{
	width: 100%;
	height: auto;
}
.tic_cont{
	width: 90%;
	height: 50px;
	height: auto;
	margin: 0 auto;
}
.tic_cont .tiv_ul{
	width: 100%;
	height: 100%;
}
.tic_li{
	width: 18%;
	height: 50px;
	margin: 0 1%;
	float: left;
	font-size: 18px;
	color: black;
	line-height: 50px;
	text-align: center;
	/* background-color: darkcyan; */
	border: 1px solid rosybrown;
	box-sizing: border-box;
}
</style>
