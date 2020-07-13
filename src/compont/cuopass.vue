<template>
	<div class="pasMax">
		<div class="xue_hears">
			<span >
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">  
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div> 
					错 题 密 码 修 改
				</a> 
			</span> 
			<p style="float: right;color: black;"> {{navName}}</p>
		</div> 
		<div class="pasInt">
			<input v-model="user.second1_password" id="val2" type="password" placeholder="新密码     请输入">
			<input v-model="user.second2_password" id="val3" type="password" placeholder="确认新密码     请输入">
		</div>
		<div class="pasBut" @click="goHome()">
			设置密码
		</div>
	</div>
</template>

<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				user: {
					user_token: localStorage.getItem('user_token'),
					user_id: localStorage.getItem('user_id'),
					second1_password: '',
					second2_password: '', 
				}
			}
		},

		mounted() { 
		},
		methods: {
			goHome() {
				var pasData = JSON.stringify(this.user);
				this.$http.post(this.href + '/setSecondPassword', pasData).then(response => {
					this.pasData = response.data.data
					console.log(response) 
					if (response.body.code == '300') {
						alert('登录信息已失效，请重新登录')
					} 
					if (JSON.stringify(response.data.code, null, 4) == 200) {
						 this.$notify.info({
						 	title: '提示',
						 	message: '密码设置成功', 
						 }); 
						 location.href = "#/no4"
					} else {
						alert(response.data.msg)
					}
						

				});
			}
		},
	}
</script>
<style>
	.pasMax {
		background-color: white; 
		position: relative;
		z-index: 4;
	}
 

		.pasHear {
			height: 50px;
			line-height: 50px;
			text-align: center;
			font-size: 16px;
		}

		.pasHear span {
			float: left;
			margin-left: 10px;
		}

		.pasHear p {} 

	.pasInt input {
		width: 96%;
		height: 40px;
		border: none;
		border-bottom: 1px solid #ececec;
		padding-left: 4%;
	}

	.pasBut {
		width: 90%;
		height: 50px;
		margin: 20px auto;
		font-size: 20px;
		color: whitesmoke;
		line-height: 50px;
		text-align: center;
		background: #ffa813;
		border-radius: 7px;
	}

	.pasfot {
		width: 90%;
		height: 88px;
		margin: 0 auto;
	}

	.pasfot p {
		font-size: 12px;
		color: #CACACA;
		line-height: 20px;
	}
	
	.pasMax{
		width: 70%;margin: 0 auto;
	}
	@media screen and (max-width: 980px) {
		.pasMax{
			width: 100%;
		}
	}
</style>
