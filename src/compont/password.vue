<template>
	<div class="pasMax">
		<div class="pasHear">
			<router-link :to="{path:'/shezhi'}">
				<span> < </span>
			</router-link>
			<p>修改密码</p>
		</div>
		<div class="pasInt">
			<input v-model="user.old_password" id="val1" type="text" placeholder="旧密码     请输入">
			<input v-model="user.new1_password" id="val2" type="text" placeholder="新密码     请输入">
			<input v-model="user.new2_password" id="val3" type="text" placeholder="确认新密码     请输入">
		</div>
		<div class="pasBut" @click="goHome()">
			确定修改
		</div>
		<div class="pasfot"> 
			<p>修改密码时要输入当前密码</p>
			<p>新密码长度要大于6位</p>
			<p>建议您定期刚换密码，确保账号安全</p>
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
					old_password: '',
					new1_password: '',
					new2_password: ''
				}
			}
		},

		mounted() {
			// this.goHome()
		},
		methods: {
			goHome() {
				var pasData = JSON.stringify(this.user);
				this.$http.post(this.href + '/updatePassword', pasData).then(response => {
					this.pasData = response.data.data
					console.log(response)
					if (JSON.stringify(response.data.code, null, 4) == 200) {
						 this.$notify.error({
						 	title: '提示',
						 	message: '密码设置成功'
						 }); 
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
	}

	@media screen and (max-width: 980px) {

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
	}

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
</style>
