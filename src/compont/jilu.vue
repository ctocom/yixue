<template>
	<div class="ji_max">  
		<div class="xue_hears"> 
			<p>{{this.MyName}}</p>
		</div>
		<div class="ji_cont" > 
			<div class="ji_dan" v-for="item in jiDatas" >   
				<div class="max" v-if="openId != item.from_user_id">
					<div class="max_img"> 
						<img :src=item.head alt="">
					</div>
					<div class="max_tet">  
						{{item.content}}
					</div> 
					<div class="clear"></div>
				</div> 
				<div class="min" v-if="openId == item.from_user_id">
					<div class="min_img"> 
						<img :src="item.head" alt="">
					</div> 
					<div class="min_tet">
						<!-- <h3>{{item.user_name}} : </h3> -->
						{{item.content}}
					</div>  
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
				openId: localStorage.getItem('openId'), 
				href: gloal.userApi,
				jiData:{
					user_token: localStorage.getItem('user_token'),
					user_id:localStorage.getItem('user_id'), 
					from_user_id:'1'
				},
				jiDatas:{},
				MyName:''
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
					console.log(response.data.data.user_name) 
					this.jiDatas = response.data.data.chat_list
					this.MyName = response.data.data.user_name
					// this.from_userId = response.data.data
				}); 
			},
		}
	}
</script>

<style> 

.ji_max{
	width: 100%;
	padding-bottom: 70px;
	margin: 20px 0;
}
.clear{ clear:both} 
.max,.min{
	width: 95%;
	height: auto; 
	padding: 10px 0;
} 
.max_tet{
	background-image: url(../../images/youic.png); 
	color: white;
	max-width: 75%;
	display: inline-block;
	line-height: 3vh;
	padding: 10px 10px 10px;  
	background-size: 100% 100%;  
	background-repeat: no-repeat; 
}
.max_img,.min_img{
	width: 7vh;
	height: 7vh; 
	margin: 10px 0; 
} 
.max_img img,.min_img img{
	width: 100%;
	height: 100%;
} 
.min_tet{
	max-width: 75%;
	display: inline-block;
	line-height: 3vh;
	padding: 10px 10px 10px ;
	background-image:  url(../../images/myic.png);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	color: #717171;
}
.max_img{
	float: left;
	margin-right: 3px;
}
.max_tet{ 
	float: left; 
}

.min_img{
	float: right;
}
.min_tet{ 
	float: right;
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
	width: 95%;
	height: 100%;
	margin: 0 auto;
	/* position: relative; */
	/* z-index: 3; */
	background-color: white;
	font-size: 14px; 
}
.ji_dan{
	width: 100%;
	/* height: 60px; */
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
@media screen and (max-width: 980px) {
	.ji_max{
		width: 100%;
		padding-bottom: 70px;
		margin: 0px 0;
	}
}
</style>
