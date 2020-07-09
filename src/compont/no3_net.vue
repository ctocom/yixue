<template>
	<div class="no3_net_max">
		<div class="xue_hears">
			<router-link :to="{path:'/',query:{id:''}}">
				<span>
					< </span> </router-link> <p> {{$route.query.name}} </p>
		</div>
		<div class="log_lops">
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
		<div class="no3_net_max_bot">
			<div class="no3_net_max_text" v-for="(item,index) of noData">
				<router-link :to="{path:'/dangqian',query:{it_id:item.id,cu_id:item.course_id}}">
					<div class="no3_div">
						<p style="color: black;">{{item.name}}</p>
						<div class="net_tet">
							<span style="float: left;">英语{{item.course_id}}</span>
							<span style="float: left;">new{{item.id}}</span>
							<div class="net_tets">
								  查看课程 
							</div>
						</div>
						
					</div>
				</router-link>
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
				noData: {
					user_token: localStorage.getItem('user_token'),
					course_id: ''
				},
				img1:{ type:'1' },
				noDatas: {},
				bannerList: {}
			}
		},
		mounted() {
			this.goHome()
		},

		methods: {
			goHome() {
				this.noData.course_id = this.$route.query.id
				var noData = JSON.stringify(this.noData);
				this.$http.post(this.href + '/unitListInfo', noData).then(response => {
					this.noData = response.data.data
					console.log(response)
				});
				
				
				var img1 = JSON.stringify(this.img1);
				this.$http.post(this.href+'/imagesInfo',img1).then(response => {   
					this.bannerList = response.data.data
				});
			}
			
		}


	}
</script>

<style>
	.log_lops{
		height:auto;
		margin-bottom: 30px;
	}
	.no3_div{
		width: 90%;padding-top: 10px; margin: 0 auto;
	}
	.n_net_bner {
		width: 100%;
		height: 318px;
		background: rgba(0, 0, 0, 1);
		opacity: 0.5;
		margin-bottom: 40px;
	} 
	.xue_hears {
		display: none;
	}
	.no3_net_max_bot{
		width: 100%;
		height: auto;
	}
	.no3_net_max_text{ 
		width: 75%;
		height:128px;
		margin: 10px auto;
		background:rgba(255,255,255,1);
		border-radius:7px;
		box-shadow: 0 0 3px 2px #e6e6e6;
	}
	.no3_net_max_text p{ 
		 font-size: 24px;
		 margin-bottom: 20px;
	}
	.no3_net_max_text span{ 
		width:45px;
		height:21px;
		border:1px solid rgba(251,127,45,1);
		border-radius:5px;
		color: sandybrown;
		padding: 2px 3px;
		text-align: center;
		line-height: 21px;
		margin:0 5px;
	}  
	.net_tets{
		width:91px;
		height:32px;
		float: right;
		background:rgba(250,126,45,1);
		border-radius:14px; 
		color: white; 
			font-size: 18px;
			text-align: center;
			line-height: 32px;
	}  
	.el-carousel__container{
		height: 66vh;
	}
	
	@media screen and (max-width: 980px) {
		.log_lops{
			display: none;
		}
		.conter{
			height: auto;
			padding-top: 0;
			background-color: transparent;
		}
		.n_net_bner {
			display: none;
		}
		
		.xue_hears {
			display: block;
			height: 8vh;
			padding: 0 20px;
			line-height: 8vh;
			background: #f8d14f;
			background-size: 100% 150%;
			text-align: center;
			font-size: 2vh;
		}

		.xue_hears span {
			float: left;
		}

		.no3_net_max {
			width: 100%;
			height: 100%; 
			padding-bottom: 60px;
			background-color: white; 
		}
		
		.no3_net_max_top {
			padding-left: 20px;
			height: 55px;
			background-image: url(../../images/1.jpg);
			background-size: 100% 100%;
		}

		.no3_net_max_top a {
			float: left;
			line-height: 50px;
		}

		.no3_net_max_top p {
			text-align: center;
			line-height: 55px;
		}

		.no3_net_max_bot {
			width: 100%;
			/* height: 100%; */
			background-color: #fff;
			padding-top: 10px;
		}

		.no3_net_max_text {
			width: 85%;
			height: auto; 
			background: white;
			margin: 10px auto;
			border-radius: 10px;
			box-shadow: 0 0 5px 1px #cacaca;
			padding: 12px 17px;
			font-size: 2vh;
		}
		.no3_net_max_text p{
			font-size: 16px;
		} 
		.no3_div{
			width: 90%; 
			height: auto;
			margin: 0 auto;
			padding-top: 0;
		}
		.no3_div p{
			margin-bottom: 0;
		}
		.net_tet {
			height: 30px;
			margin-top: 10px;
		}

		.net_tet span {
			border: 1px solid darkorange;
			height: 16px;
			line-height: 16px; 
			font-size: 12px;
			color: darkorange;
			border-radius: 5px;
		}

		.net_tet p {
			color: black;
		}
		.net_tets{
			float: right;
			width: 70px;
			height:25px; 
			line-height: 25px;
			text-align: center;
			font-size: 14px;
		} 

		.tets_img {
			width: 55px;
			height: 35px;
			background-color: #000000;
			border-radius: 15px;
			color: white;
			float: left;
			margin-right: 10px;
		}
	}
</style>
