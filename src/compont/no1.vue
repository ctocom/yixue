<template>
	<div class="login">
		<div class="log_hear">
			<div class="login_tap">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592460329120&di=b76e2a8671757ab18597cc83108f6294&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201807%2F31%2F20180731175723_vYFEK.jpeg"
				 alt="">
			</div>
			<p>{{userData.name}}</p>
		</div>
		<div class="log_int">
			<div class="int_mot">
				<input v-model="user.account" id="val1" type="text" placeholder="用户名 :"><br>
				<input v-model="user.password" id="val2" type="password" placeholder="密码 :">
			</div> 
			<div  class="log_but" @click="goHome">
				<button>登录</button>
			</div>
		</div>
		<div class="play_a">
			<a href="#/">非会员登陆 -></a>
		</div>
	</div>
</template>

<script type="text/javascript" src="http://www.sz886.com/js/jquery-1.9.1.min.js"></script>
<script>
	import gloal from '../cxf.vue'
	export default {
		data() {
			return {
				href: gloal.userApi,
				user: { 
					account: '',
					password: ''
				},
				userData: {}
			}
		},
		mounted() {},
		methods: { 
			goHome() {
				var formData = JSON.stringify(this.user);
				this.$http.post(this.href + '/login', formData).then(response => {
					console.log(response.data.data.name) 
					this.userData = response.data.data
					if (JSON.stringify(response.data.code, null, 4) == 200) {
						// alert('登录成功')
						localStorage.setItem('user_id', response.data.data.id)
						localStorage.setItem('user_token', response.data.data.token)
						localStorage.setItem('userName',response.data.data.name)
						// this.$router.push("#/")
						location.href = "#/"
					} else {
						alert(response.data.msg)
					}
				});

			},
		},
	} 
</script>

<style>
	.play_a{
		width: 100%;
		text-align: center;
		line-height: 30px;
		margin: 20px 0;
	}
	.login {
		width: 100%;
		/* height: 100vh; */
		height: 100%;
		background-image: url(../../images/ban_img.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		position: relative;
		bottom: 0;
		z-index: 4;
		/* overflow: hidden; */
	}

	.login_tap {
		width: 320px;
		height: 320px;
		background-color: #494949;
	}

	.int_mot {
		width: 81%;
		margin: 0 auto;
		padding-top: 20px;
	}

	/* @media screen and (max-width: 980px) { */
		.login_tap {
			width: 176px;
			height: 176px;
			margin: 40px auto;
			background-color: skyblue;
			border-radius: 176px;
			overflow: hidden;
			box-shadow: 0 0 10px 10px rgba(237, 237, 243, 0.4);
		}

		.login_tap img {
			width: 100%;
			height: 100%;
		}

		.log_hear {
			width: 80%;
			/* height: 320px; */
			height: auto;
			margin: 0 auto;
			overflow: hidden;
			text-align: center;
			font-size: 20px;
			color: white;
		}

		.log_hear p {
			height: 20px;
			color: white;
		}

		.log_int {
			width: 81%;
			height: 35%;
			margin: 0 auto;
			border: 1px solid #BCBCBC;
			border-radius: 20px;
			background-color: white;
		}

		.log_but {
			width: 200px;
			height: 50px;
			display: block;
			margin: 15px auto; 
		}
		.log_but button{
			width: 100%;
			height: 100%;
			background: url(../../images/1.jpg);
			background-size: 100% 100%;
			border-radius: 50px;
			border: none;
			outline: none;
		}

		.int_mot input {
			width: 90%;
			height: 46px;
			border-radius: 10px;
			background-color: #f5f6f8;
			border: none;
			margin: 10px 0 0 0;
			padding-left: 10%;
		} 
	/* } */
</style>
