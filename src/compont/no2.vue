<template>
	<div class="no2_max">
		<!-- 头部搜索栏 -->
		<div class="no2_ban">
			<div class="no2_top">
				<div style="float: left;width: 10%;line-height: 6vh; font-size: 4vh;" class="el-icon-cloudy"></div>
				<div class="top_int">
					<input type="text"> 
				</div>
				<div style=" width: 10%; line-height: 6vh; font-size: 4vh;"> + </div>
			</div>
			<!-- 侧边导航栏 -->
			<div class="log_lop">
				<!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
				<div class="block"> 
				    <el-carousel >
				      <el-carousel-item v-for="item in bannerList" :key="item">
						  <img :src=item alt="">
				        <h3 class="small">{{ item }}</h3>
						<img :src=item alt="">
				      </el-carousel-item>
				    </el-carousel>
				</div>
			</div>
		</div>
		<!-- banner --> 
		<div class="log_ban" v-for="i in imgs2">
			<img :src=i alt="">
		</div>
		<!-- nav -->
		<div class="log_nav">
			<div class="no2_nav_max" v-for="i in twoData">
				<router-link :to="{path:'/no3_net',query:{id:i.id,name:i.name}}">
					<div class="color_icon">
						<img :src=i.icon alt=""> 
					</div> 
					<span>{{i.name}}</span>
				</router-link>
			</div>
		</div>
		<!-- 精品 -->
		<div class="no2_jing">
			<span></span>
			<p>精品课堂</p>
		</div>
		<!-- 四大类科目 -->
		<div class="for_max">
			<div class="no2_four">
				<div class="no2_four_text"  v-for="i in imgs3">
					  <img :src=i alt="">
				</div>  
				<div class="clear"></div>
			</div> 
			 
		</div>
		
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default { 
		data() {
			return { 
				href:gloal.userApi,   
				bannerList: {},
				twoData:{ 
					user_token: localStorage.getItem('user_token'),
					
				},
				img1:{ type:'1' },
				img2:{type:'2'}, 
				img3:{type:'3'},
				imgs2:{},
				imgs3:{}, 
			}
		},
		mounted(){
			this.goHome()
		},
		methods: {
			goHome() {
				var twoData = JSON.stringify(this.twoData);
				this.$http.post(this.href+'/course',twoData).then(response => {
					this.twoData = response.data.data
				});    
				if(this.user_token == '300'){
					alert('您尚未登陆账号，请前往登陆')
				}
				
				// banner轮播
				var img1 = JSON.stringify(this.img1);
				this.$http.post(this.href+'/imagesInfo',img1).then(response => {   
					this.bannerList = response.data.data
				});  
				// banner ban  
				var img2 = JSON.stringify(this.img2);
				this.$http.post(this.href+'/imagesInfo',img2).then(response => {  
					this.imgs2 = response.data.data
				});  
				var img3 = JSON.stringify(this.img3);
				this.$http.post(this.href+'/imagesInfo',img3).then(response => { 
					console.log(response.data.data)
					this.imgs3 = response.data.data
				});  
				 
				
			}
		}
	};
</script>

<style>
	.no2_ban{
		width: 100%;
		/* height: 120px; */
	}
	.log_ban{
		width: 100%;
		height: 120px;
		background-color: #000000;
	}
	.log_ban img{
		width: 100%;
		height: 100%;
	}
	/* @media screen and (max-width: 980px) { */
	 .el-carousel__item h3 {
	     color: #475669;
	     font-size: 14px;
	     opacity: 0.75;
	     line-height: 150px;
	     margin: 0;
	   }
	   .no2_ban{
		   background-image: url(../../images/banner.png); 
		   background-size: 100% 125%;
	   }
	 
	   .el-carousel__item:nth-child(2n) {
	      background-color: #99a9bf;
	   }
	   
	   .el-carousel__item:nth-child(2n+1) {
	      background-color: #d3dce6;
	   }
	  
	 .el-carousel__container{
		 height: 25vh;
	 } 
		.no2_top {
			width: 100%;
			height: 9vh;
			/* background-color: #f8d14f; */
		}

		.no2_top div {
			float: left;
			color: white;
			text-align: center;
			padding-top: 10px;
		}

		.top_int {
			width: 80%;
			height: 90%;
			float: left;
			/* margin: 10px auto; */
		}

		.top_int input {
			width: 90%;
			height: 70%;
			border: none;
			border-radius: 55px;
			outline: none;
			padding-left: 10%;
			background-color: #fff7cf;
		}

		.log_lop {
			width: 95%;
			margin: 0 auto; 
			padding:0 0 14px ;
			overflow: hidden;
		}

		.lop_thre {
			width: 80%;
			/* height: 145px; */
			border: 20px;
			margin: 0 auto;
			border-radius: 10px;
			background-color: #BCBCBC;
		}

		.slide {
			width: 100%;
			height: 100%;
			margin: 0 auto;
			/* margin-top: 50px; */
			overflow: hidden;
			position: relative;
		}
   
		img {
			width: 100%;
			height: 100%;
		}
		
		.block{
			border-radius: 15px;
			overflow: hidden;
		}
		
		.bar {
			position: absolute;
			width: 100%;
			bottom: 10px;
			margin: 0 auto;
			z-index: 10;
			text-align: center;
		}

		.bar span {
			width: 20px;
			height: 5px;
			border: 1px solid; 
			display: inline-block;
			margin-right: 10px;
		}

		.lop_bag {
			background-color: red;
		}

		.log_ban {
			width: 95%;
			height: 13vh;
			margin: 0 auto; 
			/* background-image: url(../../dist/ban_03.jpg); */
			/* background-size: 100%; */
			border-radius: 7vh;
			overflow: hidden;
		}
		.log_ban img{
			width: 100%;
			height: 100%;
		}
		.log_nav {
			width: 95%;
			height: 87px;
			line-height: 50px;
			text-align: center;
			margin: 15px auto;
			display: flex;
			color: white;  
		}

		.log_nav .no2_nav_max {
			flex: 1;
		}
		
		.no2_nav_max span{
			font-size: 14px;
			color: black;
		}

		.color_icon {
			    width: 7vh;
			    height: 7vh;
			border-radius: 35px; 
			overflow: hidden;
			margin: 0 auto;  
		}
		.color_icon img{
			width: 100%;
			height: 100%;
		}

		.no2_jing {
			height: 30px;
			width: 95%;
			margin: 0 auto;
			padding-top: 20px;
		}

		.no2_jing span {
			height: 40%;
			border: 2px solid #87CEEB;
			display: block;
			float: left;
		}

		.no2_jing p {
			font-size: 14px;
			color: #87CEEB;
			margin-left: 15px;
			color: #87CEEB;
			line-height: 15px;
		}
		.for_max{
			height: 100%;
			padding-bottom: 13vh;
		}
		
		.clear{ clear:both} 

		.no2_four {
			width: 98%; 
			margin: 0 auto; 
		}

		.no2_four_text {
			height: 14vh;
			width: 48%; 
			margin: 1%;
			float: left; 
			border-radius: 20px;  
		}
		.no2_four_text img{
			width: 100%;
			height: 100%;
		}
	/* } */
</style>
