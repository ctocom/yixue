<template>
	<div class="no2_max"> 
		<!-- 头部搜索栏 -->
		<div class="no2_ban">
			<div class="logos">
				<div class="logo_min">
					<img src="../../images/logo.png" alt="">
				</div>
			</div>
			
			<div class="log_lop">
				<div class="block"> 
				    <el-carousel >
						  <el-carousel-item v-for="item in bannerList" :key="item">
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
			<p>热门课程</p>
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
					user_token: localStorage.getItem('user_token')
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
	
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.logos{
		display: none;
	}
	.no2_ban{
		height:auto; 
	}
	.no2_top,.log_ban{
		display: none;
	}
	.block{
			border-radius: 0px;
			overflow: hidden;
		}
	.log_nav{
		height: 180px;
		width: 80%;
		margin: 0 auto;
		display: flex;
		padding-top: 20px;
	}
	.no2_nav_max{ 
		flex: 1; 
		text-align: center;
		font-size:18px;
	}
	.color_icon{
		width:97px;
		height:97px;
		margin: 20px auto;
	}
	.no2_four_text{
		/* width:124px; */
		flex: 1;
		height:130px; 
		border-radius:3px 3px 3px 3px;
		margin: 0 10px;
	}
	.for_max{
		width: 100%;
		height:auto ;
	}
	.no2_four{
		width: 80%;
		height: 100%;
		margin: 0 auto;
		display: flex;
	} 
	.no2_jing{
		width: 80%;
		margin: 20px auto;
	}  
	img{
		width: 100%;
		height: 100%;
	} 
	.no2_p{
		width:115px;
		height:37px;
		font-size:9px;
		font-family:Adobe Heiti Std;
		font-weight:normal;
		color:rgba(24,40,55,1);
		line-height:14px;;
	}
	.el-carousel__container{
		/* width: 80%; */
		height: 56vh;
		/* height: 337px; */
		margin: 0 auto;
	}  
	.tanbar{
		display: block;
	}
	.footer{
		display: block;
	}
	 .no2_max{
		 margin: 20px 0;
	 }
	
@media screen and (max-width: 980px) {
	.logos{
		display: block;
		width: 100%;
		height: auto;
		margin-bottom: 10px;
		box-shadow: 0 3px 3px 1px #ccc;
	}
	.logo_min{
		margin: 0 auto;
		width: 6rem;
		height: 2.5rem;
	}
	.logo_min img{
		width: 100%;
		height: 100%;
	}
	
	.no2_max{
			 margin: 0px ;
			 padding-bottom: 50px;
	}
	.tanbar{
		width:100%;
		position: absolute;
		bottom: 0; 
		height: 50px;
		display: block;
	} 
	.clear{
		clear: both;
	}
	.no2_p{
		display: none;
	}
	.no2_top,.log_ban{
		display: block;
	}
	.footer{
		display: none;
	}   
	 .el-carousel__item h3 {
	     color: #475669;
	     font-size: 14px;
	     opacity: 0.75;
	     line-height: 150px;
	     margin: 0;
	   }
	   .no2_ban{
		   width: 100%;
		   height: auto;
		   padding-top: 10px;
		  /* background-image: url(../../images/banner.png); 
		   background-size: 100% 125%; */
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
			display: block;
			width: 95%;
			height: 11rem;
			margin: 15px auto; 
			overflow: hidden;
		}
		.log_lop div{
			height: 100%;
		}
		.el-carousel__item is-active is-animating{
			width: 100%;
			height: 100%;
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
   
		/* img {
			width: 100%;
			height: 100%;
		} */
		
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
			margin: 0px auto;
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
			width: 100%;
			height: auto;
			padding-bottom: 5vh;
		}
		
		.clear{ clear:both} 

		.no2_four {
			width: 98%; 
			margin: 0 auto; 
			display: block;
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
	}
</style>
