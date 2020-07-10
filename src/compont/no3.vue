<template>
	<div class="no3_max">
		<!-- 头部搜索栏 -->
		<div class="no3_top">
			<div class="no3_top_sou">
				<input type="text" placeholder="搜索你喜欢的课程">
			</div>
		</div>

		<div class="no3_img" v-for="i in imgs1">
			<img :src=i alt="">
		</div>

		<div class="no3_nav">
			<div class="no3_nav_ul">
				<li v-for="(item,age) of kcData" :key="age" @click="cur = age" :class="{no3_active:cur == age}">

					<div class="min_cli" @click="goClick()">
						<router-link :to="{path:'/no3',query:{id:item.id}}">
							{{item.name}}
						</router-link>
					</div>

				</li>
			</div>
		</div>
		<div class="no3_content">
			<!-- banner -->
			<div class="no3_cont_ban" v-for="i in imgs1">
				<img :src=i alt="">
			</div>
			<div class="no3_cont_nav">
				<div class="cont_nav_str" v-for="(item,index) of fromData " :key="index" @click="toNo3(item)">
					<!-- <router-link :to="{path:'/dangqian',query:{it_id:item.id,cu_id:item.course_id}}"> -->
					<div class="cont_nav_str_icon">
						<img :src=item.icon alt="">
					</div>
					<p style="text-align: center;">{{item.name}}</p>
					<!-- </router-link> -->
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
				href: gloal.userApi,
				kcData: {
					user_id: localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token'),
				},
				zjData: {
					course_id: '1',
					user_id: localStorage.getItem('user_id'),
					user_token: localStorage.getItem('user_token'),
				},
				fromData: {},
				cur: '0',
				img1: {
					type: '4'
				},
				imgs1: {}
			}
		},

		mounted() {
			this.goHome()
		},
		methods: {
			goHome() {
				// console.log('000')
				var kcData = JSON.stringify(this.kcData);
				this.$http.post(this.href + '/course', kcData).then(response => {
					this.kcData = response.data.data
				});
				var fromData = JSON.stringify(this.zjData);
				this.$http.post(this.href + '/section', fromData).then(response => {
					this.fromData = response.data.data
				})

				var img1 = JSON.stringify(this.img1);
				this.$http.post(this.href + '/imagesInfo', img1).then(response => {
					this.imgs1 = response.data.data
					console.log(response.data.data)
				});
			},
			toNo3(item) {
				this.$router.push({
					path: '/dangqian',
					query: {
						it_id: item.id,
						cu_id: item.course_id
					}
				})
			},
			goClick() {
				this.zjData.course_id = this.$route.query.id
				var fromData = JSON.stringify(this.zjData);
				this.$http.post(this.href + '/section', fromData).then(response => {
					this.$set(this, 'fromData', response.data.data)
					console.log(this.fromData)
				})
			}
		},

	}
</script>

<style>
	img {
		width: 100%;
		height: 100%;
	}

	.no3_top {
		display: none;
	}

	.no3_nav {
		width: 80%;
		height: 50px;
		margin: 25px auto;
	}

	.no3_active {
		border-bottom: #3A91E7 1px solid;
	}

	.no3_nav_ul {
		width: 40%;
		float: right;
	}

	.no3_nav_ul li {
		float: left;
		margin: 0 10px;
		padding: 10px 0px;
		font-size: 18px; 
	}

	.no3_cont_ban {
		display: none;
	}

	.no3_img {
		width: 100%;
		height: 53vh;
		margin-bottom: 50px;
	}

	.no3_content {
		width: 80%;
		margin: 0 auto;
	}

	.clear {
		clear: both;
	}

	.no3_cont_nav {
		width: 100%;
		min-height: 20vh;
		height: auto;
		/* display: flex; */
	}

	.cont_nav_str {
		/* flex: 1; */
		width: 25%;
		float: left;
		height: 28vh;
	}

	.cont_nav_str_icon {
		margin: 5px 5px;
		height: 80%;
		background-color: #CCCCCC;
	}
	.no3_max {
	    margin: 20px 0;
	}
	@media screen and (max-width: 980px) {
		.no3_img {
			display: none;
		}

		.no3_max {
			width: 100%; 
			height: 100vh;
			background-color: #f8f8f8;
			margin: 0;
		}

		.no3_top {
			width: 100%;
			height: 5vh;
			padding: 10px 0;
			margin-bottom: 10px;
			background-color: #f8d14f;
			display: block;
		}

		.no3_top input {
			width: 94%;
			height: 95%;
			border: none;
			border-radius: 35px;
			background-color: #fff7cf;
			padding-left: 6%;
			outline: none;
			font-size: 2vh;
		}

		.no3_top_sou {
			width: 90%;
			height: 100%;
			margin: 0 auto;
		}

		.no3_nav {
			width: 27.6%;
			height: 100%;
			float: left;
			background-color: #e2e2e2;
			margin: 0;
		}

		.no3_active {
			height: 36px;
			background-color: white;
		}

		.no3_nav_ul {
			width: 100%;
			height: 8vh;
		}

		.no3_nav_ul li {
			width: 100%;
			height: 8vh;
			line-height: 8vh;
			text-align: center;
			margin: 0;
			padding: 0;
			border: none;
		}

		.no3_content {
			width: 72%;
			height: 100%;
			float: right;
		}

		.no3_cont_ban {
			display: block;
			width: 95%;
			height: 18vh;
			margin: 0px auto;
		}

		img {
			width: 100%;
			height: 100%;
		}

		.no3_cont_nav {
			width: 90%;
			margin: 0 auto;
			background-color: white;
			padding: 10px;
			display: block;
		}

		.cont_nav_str {
			width: 48%;
			float: left;
			height: 14vh;
			margin: 1%;
		}

		.cont_nav_str p {
			font-size: 2vh;
			line-height: 20px;
			color: black;
		}

		.min_cli {
			width: 100%;
			height: 100%;
			color: black;
		}

		.min_cli a {
			display: block;
			width: 100%;
			color: black;
			font-size: 2vh;
			letter-spacing: 8px;
			text-align: center;

		}

		.cont_nav_str_icon {
			height: 80%;
			padding: 0;
			margin: 0;
			background-color: transparent;
		}

		.cont_nav_str_icon img {
			width: 100%;
			height: 90%;
		}

		.cont_nav_str_icon p {
			height: 20%;
			background-color: saddlebrown;
		}

		img {
			width: 100%;
			height: 100%;
		}
	}
</style>
