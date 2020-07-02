<template>
	<div class="no3_net_max">
		<div class="xue_hears">
			<router-link :to="{path:'/',query:{id:''}}">
				<span>
					< </span> </router-link> <p> {{$route.query.name}} </p>
		</div>

		<div class="no3_net_max_bot">
			<div class="no3_net_max_text" v-for="(item,index) of noData">
				<router-link :to="{path:'/dangqian',query:{it_id:item.id}}">
					<div style="width: 100%;height: 100%;">
						<p style="color: black;">{{item.name}}</p>
						<div class="net_tet">
							<span style="float: left;">英语{{item.course_id}}</span>
							<span style="float: left;">new{{item.id}}</span>
						</div>
						<div class="net_tets">
							<div style="float: right;">
								{{item.section_id}}
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
				noDatas: {}
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
			}
		}


	}
</script>

<style>
	@media screen and (max-width: 980px) {
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

		.no3_net_max {
			width: 100%;
			height: 100%;
			/* height: 100vh; */
			padding-bottom:60px ;
			background-color: white;
			z-index: 3;
			position: absolute; 
			padding-bottom: 100px ;
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
			height: 100px;
			line-height: 40px;
			background: white;
			margin: 10px auto;
			border-radius: 10px;
			box-shadow: 0 0 5px 1px #cacaca;
			padding: 15px 17px 15px;
		}

		.net_tet {}

		.net_tet span {
			border: 1px solid darkorange;
			height: 16px;
			line-height: 16px;
			margin: 12px 8px 0 0;
			font-size: 12px;
			color: darkorange;
			border-radius: 5px;
		}

		.net_tet p {
			color: black;
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
