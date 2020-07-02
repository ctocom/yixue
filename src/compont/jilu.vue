<template>
	<div class="ji_max"> 
		<!-- {{$route.query.id}} -->
		<div class="xue_hears">
			<router-link :to="{path:'/xiaoxi',query:{id:$route.query.id,id2:this.$route.query.id}}">
				<span>
					< 
				</span>
			</router-link> 
			<p>消息</p>
		</div>
		<div class="ji_cont" > 
			<div class="ji_dan" v-for="item in jiDatas" > 
				<div class="max" v-if="item.from_user_id == 1">
					{{item.content}}
				</div>
				<div class="max" else style="float: right;">
					{{item.content}}
				</div>
			</div> 
		</div>
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				jiData:{
					user_token: localStorage.getItem('user_token'),
					user_id:localStorage.getItem('user_id'), 
					from_user_id:'1'
				},
				jiDatas:{}
			}
		},
		mounted(){
			this.goHome()
		},
		methods:{
			goHome() { 
				var jiData = JSON.stringify(this.jiData);
				this.jiData.from_user_id = this.$route.query.id
				this.$http.post(this.href + '/systemInfo', jiData).then(response => {
					// console.log(response.data.data)
					 this.jiDatas = response.data.data   
				});
				 
  
			},
		}
	}
</script>

<style> 
.max{
	width: 80%;
	overflow: hidden;
}
.xue_hears {
		height: 60px;
		padding: 0 20px;
		line-height: 60px;
		background: #f8d14f;  
		 background-size: 100% 150%; 
		text-align: center;
		
		} 
	.xue_hears span {
		float: left;
	}
.ji_cont{
	padding-top: 20px;
	width: 90%;
	height: 100%;
	margin: 0 auto;
	position: relative;
	z-index: 3;
	background-color: white;
	font-size: 14px; 
}
.ji_dan{
	width: 100%;
	height: 60px; 
	overflow: hidden;
}
.le_img{
	width: 15%;
	height: 100%;
	float: left;
}
.le_img img{
	width: 30px;
	height: 30px; 
}
.le_tet{
	width: 85%;
	height: 100%; 
	white-space:nowrap;  
	word-break:keep-all;  
	overflow:hidden;  
	text-overflow:ellipsis; 
}
</style>
