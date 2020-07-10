<template>
	<div class="nav_max">
		<div class="nav_content">
		</div>
		<div class="nav">
			<div class="logo">
				<img src="../images/logo.png" alt="">
			</div>
			<ul class="nav_ul">
				<a href="#/" class="add">
					<i class="el-icon-s-home"></i>
					<p>首页</p>
				</a>
				<a href="#/no3">
					<i class="el-icon-s-management"></i>
					<p>学习</p>
				</a>
				<a href="#/jilu">
					<i class="el-icon-s-order"></i>
					<p>消息</p>
				</a>
				<a href="#/no4">
					<i class="el-icon-s-custom"></i>
					<p>我的</p>
				</a>
			</ul>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default {
		data() {
			return {
				categoryIndex: 1,
			}
		},
		mounted() {
			this.goHome()
		},
		methods: {
			goHome() {
				var atl = $('.123').text()
				console.log(atl)
				if (atl == '作业') {
					console.log('123')
				}
			}


		}
	};
	$(document).ready(function() {
		$(".nav_ul a").click(function() {
			$(this).addClass("add").siblings().removeClass("add");
		});
	});
</script>

<style scoped>
	.nav_max{
		width: 100%;
		height: 50px;
		position: fixed;
		top: 0;
		box-shadow: 0 0 2px 2px #e2e2e2;
		z-index: 4;
		background-color: white; 
	} 
	* {
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.logo{
		width: 132px;
		height: 30px;
		float: left;
		position: absolute;
		top: 50%;
		margin-top: -15px;
	}
	.add {
		color: #00BFFF;
	} 
	.nav {
		width: 80%;
		height: 50px;
		margin: 0 auto;
		/* background-color: green; */
	} 
	.nav_ul {
		/* width: 49%; */
		float: right;
		height: 100%;
		font-size: 16px;
		 text-align: right;
	} 
	.nav_ul a {
		float: left;
		margin: 0 20px;
		line-height: 50px;
		/* color: #333333; */
		font-size: 12px;
	}

	.nav_ul i {
		display: none;
	}
	.no2_top{
		display: none;
	}
	@media screen and (max-width: 980px) {
		 .logo{
			 display: none;
		 }
		 .nav_max{
			 background-color: transparent;
			 box-shadow: none;
			 position: absolute;
			 bottom: 0;
			 z-index: 3;
		 }
		.nav_ul {
			width: 80%;
			margin: 0 auto;
			text-align: center;
			line-height: 60px;
			display: flex;
		}

		.nav_ul a {
			display: black;
			flex: 1;
		} 
		.add {
			color: #FFA305;
		}

		.add i {
			font-size: 5vh;
		}

		.add p {
			font-size: 2vh;
		}
 
		.nav_content {
			width: 98%;
			height: 100%;
		}

		.nav {
			width: 100%;
			max-width: 1024px;
			height: 9vh;
			position: fixed;
			bottom: -1px; 
			margin: 0 auto;
			background-color: #f4f4f4;
			z-index: 1;
		}

		.nav .nav_ul {
			width: 100%;
			height: 100%;
			font-size: 10px;
			/* line-height: 3vh; */
		}

		.nav_ul a {
			flex: 1;
			padding-top: 1.5vh;
			line-height: 23px;
		}

		.nav_ul a p {
			font-size: 1.5vh;
		}

		.nav_ul a i {
			font-size: 3vh;
			display: block;
		}

		a {
			display: inline-block;
			width: 100%;
			height: 100%;
			color: #9c9c9c;
		}

	}
</style>
