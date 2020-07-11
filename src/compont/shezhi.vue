<template>
	<div class="shu_max">
		<div class="xue_hears">
			<span >
				<a href="javascript:history.go(-1);" style="font-size: 2vh; ">  
					<div style="width: 10px;height: 100%;float:left;margin-right:20px ;">
						<img  src="../../images/ic.png" alt="">
					</div> 
					<p style="float: right;color: black;"> 我 的 设 置 </p>
				</a> 
			</span>  
		</div>
		<div class="biaodan">
			<div class="shu_max_tet" v-for="i in arr">
				<router-link :to="{path:'/password',query:{name:''}}">
					<i>{{i.icon}}</i>
					<div style="width: 10px; height:30%; float: right;">
						<img src="../../images/myri.png" alt="">
					</div>
					<p>{{i.t1}}</p>
				</router-link>
			</div>
		</div>
		<div class="biaodan">
			<router-link :to="{path:'/cuopass',query:{name:''}}">
				<div class="shu_max_tet"> 
					<i></i>
					<div style="width: 10px; height:30%; float: right;">
						<img src="../../images/myri.png" alt="">
					</div>
					<p>错题本登录密码</p>
				</div>
			</router-link>
		</div> 
	</div>
</template>
<script>
	export default {
		data() {
			return {
				arr: [{
					icon: '',
					t1: '登陆密码修改',
					icon2: ''
				}],
				arr2: [{
						icon: '',
						t1: '错题本登陆密码',
						icon2: ''
					},
					{
						icon: '',
						t1: '消息设置',
						icon2: ''
					}
				], 
			}

		},
		methods: {

		}
	};
</script>

<style>
	.shu_max {
		width: 100%;
		background-color: #f6f6f6;
	}

	.el-page-header__left {
		float: left;
		text-align: center;
	}

	.el-page-header__content {
		margin: 0 auto;
	}

	.shu_max_tet {
		width: 90%;
		height: 50px;
		background-color: white;
		line-height: 50px;
		margin: 0px auto;
		padding: 0 5%;
		border-bottom: 1px solid #CCCCCC;
	}

	.shu_max_tet i {
		float: left;
		margin: 0 13px;
	} 

	.biaodan {
		margin: 15px 0 20px;
	}

	.shu_max_top {
		width: 100%;
		height: 4vh;
		margin: 0 auto;
		padding: 10px;
		font-size: 16px;
		line-height: 30px;
		background-color: #f8d14f;
	}

	.she_cuo {
		width: 25px;
		height: 25px;
		float: left;
	}

	.shu_max_top span {
		float: left;
		font-size: 16px;
		color: #000000; 
	}

	.shu_max_top span p {
		line-height: 20px;
	}

	a {
		color: black;
	}
	
	
	.shu_max{
		width: 70%;
		margin: 0 auto;
	}
	
	@media screen and (max-width: 980px) {
		.shu_max{
			width: 100%;
		}
	}
</style>
