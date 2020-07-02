<template>
	<div class="dan">
		<div class="xue_hears">
			<router-link :to="{path:'/jilei',query:{id:$route.query.id, papId:this.$route.query.papId}}">
				<span>
					< </span> </router-link> <router-link :to="{path:'',query:{}}">
						<span style="float: right;"> </span>
			</router-link>
			<!-- {{$route.query.papId}} -->
		</div>
		<div class="paName">
			<p>提示：请输入二级密码，获取答案</p> 
			密码： <input type="password" v-model="danData.seconds_password" value="请输入密码">
		</div>
		<div class="erJi" @click="goHome()">
			确定
		</div>
		<div class="div_p" v-for="i in danDatas">
			{{i.keyword}}
		</div>
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				danData: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					paper_id: '15',
					seconds_password: ''
				},
				danDatas: {}
			}
		},
		mounted() {
			// this.goHome()
		},
		methods: {
			goHome() {
				this.danData.paper_id = this.$route.query.papId
				var danData = JSON.stringify(this.danData);
				this.$http.post(this.href + '/paperQuestion', danData).then(response => {
					// console.log(response.data.data.paper_question_list)
					this.danDatas = response.data.data.paper_question_list
					if (JSON.stringify(response.data.code, null, 4) == 200) {
						// alert('登录成功')
						localStorage.setItem('user_id', response.data.data.id)
						localStorage.setItem('user_token', response.data.data.token)
						localStorage.setItem('userName',response.data.data.name)
						this.$router.push("/")
					} else {
						this.$notify.info({
						  title: '提示',
						  message: response.data.msg 
						}); 
					}
					 
				});
			},
		}
	}
</script>

<style>
	.paName {
		width: 80%;
		height: auto;
		margin: 0 auto;
		padding: 5px 0;
		font-size: 14px;
	}

	.paName input {
		width: 75%;
		height: 35px;
		margin: 10px 0;
		border: 1px solid black;
		padding-left: 4%;
	}

	.erJi {
		width: 60%;
		height: 50px;
		margin: 0 auto;
		text-align: center;
		background-color: sandybrown;
		line-height: 50px;
		font-size: 20px;
		color: white;
	}

	.div_p {
		line-height: 30px;
	}
</style>
